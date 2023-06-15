import React from 'react';
import { FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Layout from '../Layout';
import { CanopyItem } from './CanopyItem';
import { RootStackParamList } from '../App';
import { Canopy } from '../types';

const canopies: Canopy[] = [
  {
    id: 'd95e17d4-aac4-46eb-b50a-36785c6a94b5',
    joinDate: '2023-06-06T09:17:53.466127Z',
    status: 'InReview',
    title: 'Rock questons',
  },
  {
    id: 'd95e17d4-aac4-46eb-b50a-36785c6a94b4',
    joinDate: '2023-06-06T09:17:53.466127Z',
    status: 'InReview',
    title: 'Rock Canopy',
  },
  {
    id: 'd95e17d4-aac4-46eb-b50a-36785c6a94b3',
    joinDate: '2023-06-06T09:17:53.466127Z',
    status: 'Incomplete',
    title: 'Test Canopy',
  },
];

type Props = NativeStackScreenProps<RootStackParamList, 'CanopyDetails'>;

export const CanopyDetails: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout>
      <FlatList
        data={canopies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CanopyItem item={item} navigation={navigation} />
        )}
      />
    </Layout>
  );
};
