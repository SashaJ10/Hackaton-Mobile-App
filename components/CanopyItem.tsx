import React from 'react';
import {Icon, ListItem} from '@rneui/themed';
import {Canopy} from '../types';
import {Button, StyleSheet} from 'react-native';
import Layout from '../Layout';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


const canopyDetailsExpertResponse = {
  documents: [],
  id: 'd95e17d4-aac4-46eb-b50a-36785c6a94b5',
  isCanopyAgreementAccepted: true,
  isSubmitted: true,
  links: [],
  overview: 'test purposes',
  projectId: '9f3ec052-9b8b-416b-b48e-d3c9408e9ae8',
  status: 'Active',
  title: 'Rock questons',
};

interface QuestionItemProps {
  item: Canopy;
  navigation:any
}

type Props = NativeStackScreenProps<RootStackParamList, 'CanopyDetails'>;

export const CanopyItem: React.FC<QuestionItemProps> = ({ item, navigation}) => {
  const {title, status} = canopyDetailsExpertResponse;
  const isIncomplete = status === 'Incomplete';

  const statusText = isIncomplete ? 'Incomplete' : 'Complete';

  return (
    <ListItem containerStyle={styles().containerStyle}>
      <Icon name="tree-outline" type="material-community" color="orange" />
      <ListItem.Content>
      <Button
      title="Go to Canopy Questions"
      onPress={() =>
        navigation.navigate('QuestionDetails')
      }
    />
        <ListItem.Title>{title}</ListItem.Title>
        <ListItem.Subtitle style={styles({isIncomplete}).subtitle}>
          {statusText}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron iconStyle={styles().icon} />
    </ListItem>
  );
};

const styles = (props?: any) =>
  StyleSheet.create({
    containerStyle: {borderBottomColor: 'grey', borderBottomWidth: 1},
    subtitle: {fontSize: 12, color: props?.isIncomplete ? 'red' : 'green'},
    icon: {color: 'orange'},
  });
