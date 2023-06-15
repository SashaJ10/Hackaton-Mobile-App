import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Layout from '../Layout';
import { AnswerResponse } from '../types';
import { CustomVideo } from './CustomVideo';

const answerResponse: AnswerResponse = {
  created: '2023-04-18T13:43:56.631751Z',
  details: 'video',
  downloadUrl:
    'https://ciq-dev.s3.amazonaws.com/Clients/62e08e18-805f-41c1-b210-6f129f754ad5/Projects/921a1e0e-0af8-42f5-b3a4-8f2b7035e88d/Uploads/Canopies/a2c64d7b-7b06-4ba2-9d7c-2f4819209633/Questions/1cb0a29f-c0d2-40e3-94ad-164acee4706d/Answers/daay1qai_Converted.mp4?AWSAccessKeyId=AKIAVNVAFULXV4FTEMVY&Expires=1687444110&Signature=Fv9D6PFRhenf%2BWK%2BeUoTE9aiEx8%3D',
  expertId: '1f9838e2-925e-4794-b6e9-78ef355711de',
  id: '1c916491-2199-44cc-bda4-1e27ab23f826',
  questionId: '1cb0a29f-c0d2-40e3-94ad-164acee4706d',
  questionText: 'video',
  status: 'InReview',
  type: 'Video',
};

const { height } = Dimensions.get('window');

export const Answer: React.FC = () => {
  return (
    <Layout>
      <View style={styles.wrapper}>
        <Text style={styles.question}>Q: {answerResponse.questionText}</Text>
        <View style={styles.videoContainer}>
          {answerResponse.type === 'Video' && (
            <CustomVideo url={answerResponse.downloadUrl} />
          )}
        </View>
        <Text style={styles.transcript}>{answerResponse.details}</Text>
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
    marginBottom: 20,
  },
  videoContainer: {
    height: 300,
  },
  transcript: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
  },
});
