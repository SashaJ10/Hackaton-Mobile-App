import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Dialog, Divider } from '@rneui/themed';

import Layout from '../Layout';
import { AnswerResponse } from '../types';
import { CustomVideo } from './CustomVideo';
import { CustomCheckbox } from './CustomCheckbox';
import { RootStackParamList, expertId } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const { height } = Dimensions.get('screen');

type Props = NativeStackScreenProps<RootStackParamList, 'Answer'>;
interface RouteParams {
  type: string;
  questionId: string;
}

export const Answer: React.FC<Props> = ({ route }) => {
  const routeParams: RouteParams = route.params || { type: '', questionId: '' };
  const [answer, setAnswer] = useState<AnswerResponse>({} as AnswerResponse);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const resp = await fetch(
        `https://dev.arbolus.com/api/v1/canopies/experts/${expertId}/questions/${routeParams.questionId}/answer/public`
      );
      const data = await resp.json();
      setAnswer(data);
      setLoading(false);
    };

    fetchData();
  }, [routeParams.questionId]);

  return (
    <Layout>
      <View style={styles.wrapper}>
        <Text style={styles.question}>Q: {answer.questionText}</Text>
        <Text style={styles.details}>{answer.details}</Text>
        <Divider />
        <Dialog
          overlayStyle={styles.dialog}
          isVisible={loading}
          onBackdropPress={() => setLoading(false)}
        >
          <Dialog.Loading />
        </Dialog>
        {!loading && (
          <View style={styles.videoContainer}>
            {answer.type === 'Video' && answer.downloadUrl && (
              <CustomVideo url={answer.downloadUrl} />
            )}
            {answer.type === 'MultipleChoice' &&
              answer.answersRange &&
              answer.optionChoices && (
                <CustomCheckbox optionChoices={answer.optionChoices} />
              )}
          </View>
        )}
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
