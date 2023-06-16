import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Layout from '../Layout';
import { CanopyItem } from './CanopyItem';
import { RootStackParamList, expertId } from '../App';
import { Canopy } from '../types';
import { Dialog } from '@rneui/themed';

type Props = NativeStackScreenProps<RootStackParamList, 'CanopyDetails'>;

export const CanopyDetails: React.FC<Props> = ({ navigation }) => {
  const [canopies, setCanopies] = useState<Canopy[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const resp = await fetch(
        `https://dev.arbolus.com/api/v1/canopies/expert/list/public?expertId=${expertId}`
      );
      const data = await resp.json();
      setCanopies(data.items);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Dialog
        isVisible={loading}
        onBackdropPress={() => setLoading(false)}
        overlayStyle={styles.dialog}
      >
        <Dialog.Loading />
      </Dialog>
      {!loading && (
        <FlatList
          data={canopies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CanopyItem item={item} navigation={navigation} />
          )}
          style={{ marginTop: 20 }}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
});
