/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Header } from '@rneui/themed';
import React, { ReactNode } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { QuestionsDetails } from './components/QuestionsDetails';
import { CanopyItem } from './components/CanopyItem';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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

const Layout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}): JSX.Element => {
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
        style={backgroundStyle}
      >
        <Header
          leftComponent={{
            icon: 'menu',
            color: 'green',
          }}
          centerComponent={{
            text: title,
            style: styles.heading,
          }}
        />
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'red',
    fontSize: 22,
    fontWeight: 'bold',
  },
  simpleText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'orange',
  },
  text: { color: 'pink' },
});

export default Layout;
