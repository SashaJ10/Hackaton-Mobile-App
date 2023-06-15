/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Header} from '@rneui/themed';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {QuestionsDetails} from './components/QuestionsDetails';
import {CanopyItem} from './components/CanopyItem';
import {CustomVideo} from './components/CustomVideo';

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

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
          }}
          centerComponent={{
            text: 'Canopy Details',
            style: styles.heading,
          }}
        />
        {/* {canopies.map(canopy => (
          <CanopyItem item={canopy} key={canopy.id} />
        ))} */}
        {/* <QuestionsDetails /> */}
      </ScrollView>
      <CustomVideo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  simpleText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'grey',
  },
});

export default App;
