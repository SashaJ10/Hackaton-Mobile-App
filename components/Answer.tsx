import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Divider } from '@rneui/themed';

import Layout from '../Layout';
import { AnswerResponse } from '../types';
import { CustomVideo } from './CustomVideo';
import { CustomCheckbox } from './CustomCheckbox';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const multiChoiceAnswer: AnswerResponse = {
  optionChoices: [
    {
      id: '26dc6e89-6d32-4346-a099-15517b1503ad',
      text: '1',
      sortOrder: 0,
      isOther: false,
      isSelected: true,
      otherText: null,
    },
    {
      id: 'ccbf1824-9265-4037-b7e8-4dca20b32307',
      text: 'Other',
      sortOrder: 1,
      isOther: true,
      isSelected: false,
      otherText:
        'aAAAAAAAAAAAAAAAAaAAAAAAAAAAAAAAAAaAAAAAAAAAAAAAAAAaAAAAAAAAAAAAAAAAaAAAAAAAAAAAAAAAAaAAAAAAAAAAAAAAAA',
    },
  ],
  answersRange: {
    minimum: 1,
    maximum: 2,
  },
  id: 'c1d4982f-dd13-484f-8fbb-54da44cd5e21',
  questionId: '0cb5d898-3fbc-433d-8f9e-16b2a71ac26c',
  expertId: '1f9838e2-925e-4794-b6e9-78ef355711de',
  type: 'MultipleChoice',
  questionText: 'multi',
  details: 'multi',
  status: 'Complete',
  created: '2023-04-18T13:44:07.361852Z',
};

const videoAnswer: AnswerResponse = {
  id: 'c1d4982f-dd13-484f-8fbb-54da44cd5e21',
  questionId: '0cb5d898-3fbc-433d-8f9e-16b2a71ac26c',
  expertId: '1f9838e2-925e-4794-b6e9-78ef355711de',
  type: 'Video',
  questionText: 'video',
  details: 'video',
  status: 'Complete',
  created: '2023-04-18T13:44:07.361852Z',
  downloadUrl:
    'https://ciq-dev.s3.amazonaws.com/Clients/62e08e18-805f-41c1-b210-6f129f754ad5/Projects/921a1e0e-0af8-42f5-b3a4-8f2b7035e88d/Uploads/Canopies/a2c64d7b-7b06-4ba2-9d7c-2f4819209633/Questions/1cb0a29f-c0d2-40e3-94ad-164acee4706d/Answers/daay1qai_Converted.mp4?AWSAccessKeyId=AKIAVNVAFULXV4FTEMVY&Expires=1687444110&Signature=Fv9D6PFRhenf%2BWK%2BeUoTE9aiEx8%3D',
};

const { height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Answer'>;

export const Answer: React.FC<Props> = ({ route }) => {
  const { type } = route.params;
  const answerResponse = type === 'Video' ? videoAnswer : multiChoiceAnswer;
  return (
    <Layout>
      <View style={styles.wrapper}>
        <Text style={styles.question}>Q: {answerResponse.questionText}</Text>
        <Text style={styles.details}>{answerResponse.details}</Text>
        <Divider />
        <View style={styles.videoContainer}>
          {answerResponse.type === 'Video' && answerResponse.downloadUrl && (
            <CustomVideo url={answerResponse.downloadUrl} />
          )}
          {answerResponse.type === 'MultipleChoice' &&
            answerResponse.answersRange &&
            answerResponse.optionChoices && (
              <CustomCheckbox optionChoices={answerResponse.optionChoices} />
            )}
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    height: height,
  },
  question: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  videoContainer: {
    height: 300,
  },
});
