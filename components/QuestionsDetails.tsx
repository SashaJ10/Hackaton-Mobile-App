import { Dialog, Icon } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { QuestionItem } from './QuestionItem';
import Layout from '../Layout';
import { CanopyQuestionResponse } from '../types';
import { RootStackParamList, expertId } from '../App';

const grey = '#f2f2f5';
const officialBlue = '#6157fc';

type Props = NativeStackScreenProps<RootStackParamList, 'QuestionDetails'>;
interface RouteParams {
  canopyId: string;
}

export const QuestionsDetails: React.FC<Props> = ({ navigation, route }) => {
  const routeParams: RouteParams = route.params || {
    canopyId: '',
  };

  const [visible1, setVisible1] = useState<boolean>(false);
  const [questions, setQuestions] = useState<CanopyQuestionResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const resp = await fetch(
        `https://dev.arbolus.com/api/v1/canopies/${routeParams.canopyId}/questions/${expertId}/public`
      );
      const data = await resp.json();
      setQuestions(data.items);
      setLoading(false);
    };

    fetchData();
  }, [routeParams.canopyId]);

  const handleDialog = () => setVisible1((prevState) => !prevState);
  const percentageCompleted =
    (questions.filter((res) => res.isAnswered).length / questions.length) * 100;

  return (
    <Layout>
      <View style={styles.wrapper}>
        <View style={styles.wrapperTitle}>
          <Text style={styles.simpleText}>Questions</Text>
          <View style={styles.wrapperLeftTitle}>
            <Icon
              name="clock-time-five-outline"
              type="material-community"
              color="grey"
              size={18}
              style={styles.leftIcon}
            />
            <Text style={styles.simpleText}>5 mins | </Text>
            <Text style={{ color: officialBlue }}>
              {Math.ceil(percentageCompleted)}% Completed
            </Text>
          </View>
        </View>
        <Dialog
          overlayStyle={styles.dialog}
          isVisible={loading}
          onBackdropPress={() => setLoading(false)}
        >
          <Dialog.Loading />
        </Dialog>
        {!loading && (
          <FlatList
            data={questions}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <QuestionItem
                item={item}
                key={item.id}
                index={index}
                handleDialog={handleDialog}
                isAnswered={item.isAnswered}
                navigation={navigation}
              />
            )}
          />
        )}
        <Dialog isVisible={visible1} onBackdropPress={handleDialog}>
          <Dialog.Title title="Record/Answer" />
          <Text>It will be available soon.</Text>
        </Dialog>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  wrapper: {
    backgroundColor: grey,
    flex: 1,
  },
  wrapperTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: grey,
    alignItems: 'center',
    padding: 10,
    paddingVertical: 20,
  },
  wrapperLeftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: { marginRight: 5 },
  simpleText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'grey',
  },
});
