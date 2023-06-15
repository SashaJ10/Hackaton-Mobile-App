import React from 'react';
import { Icon, ListItem } from '@rneui/themed';
import { Canopy } from '../types';
import { Button, StyleSheet, Text } from 'react-native';
import Layout from '../Layout';
import { CanopyItem } from './CanopyItem';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

const canopies = [
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
    <Layout title="Canopy Details">
      {canopies.map((canopy) => (
        <CanopyItem item={canopy} key={canopy.id} navigation={navigation} />
      ))}
    </Layout>
  );
};

const styles = (props?: any) =>
  StyleSheet.create({
    containerStyle: { borderBottomColor: 'grey', borderBottomWidth: 1 },
    subtitle: { fontSize: 12, color: props?.isIncomplete ? 'red' : 'green' },
    icon: { color: 'orange' },
  });
