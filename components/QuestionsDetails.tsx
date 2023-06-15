import { Dialog, Icon } from '@rneui/themed';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { QuestionItem } from './QuestionItem';
import Layout from '../Layout';
import { CanopyQuestionResponse } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

const canopyQuestionsResponse: CanopyQuestionResponse[] = [
  {
    canopyId: 'd95e17d4-aac4-46eb-b50a-36785c6a94b5',
    details: '',
    id: '61d563fc-dd99-4a43-b049-ca5017925f57',
    isAnswered: true,
    order: 0,
    text: 'What songs will be played at the next European music festival?',
    type: 'Video',
  },
  {
    canopyId: 'd95e17d4-aac4-46eb-b50a-36785c6a94b5',
    details: '',
    id: '61d563fc-dd99-4a43-b049-ca5017925f58',
    isAnswered: true,
    order: 0,
    text: 'Canopy agreement',
    type: 'Video',
  },
];

const grey = '#f2f2f5';
const officialBlue = '#6157fc';

type Props = NativeStackScreenProps<RootStackParamList, 'QuestionDetails'>;

export const QuestionsDetails: React.FC<Props> = ({ navigation }) => {
  const [visible1, setVisible1] = useState<boolean>(false);

  const handleDialog = () => setVisible1((prevState) => !prevState);

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
            <Text style={styles.simpleText}>5 mins |</Text>
            <Text style={{ color: officialBlue }}> 100% Completed</Text>
          </View>
        </View>
        <FlatList
          data={canopyQuestionsResponse}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <QuestionItem
              item={item}
              key={item.id}
              index={index}
              handleDialog={handleDialog}
              navigation={navigation}
            />
          )}
        />
        <Dialog isVisible={visible1} onBackdropPress={handleDialog}>
          <Dialog.Title title="Remove/Archive" />
          <Text>It will be available soon.</Text>
        </Dialog>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
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
