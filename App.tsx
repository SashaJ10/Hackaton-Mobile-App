/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Header } from '@rneui/themed';
import React from 'react';
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
import { CanopyDetails } from './components/CanopyDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QuestionItem } from './components/QuestionItem';

export type RootStackParamList = {
  CanopyDetails: undefined;
  QuestionDetails: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="CanopyDetails">
        <RootStack.Screen
          name="CanopyDetails"
          component={CanopyDetails}
          options={{ title: 'Canopies' }}
        />
        <RootStack.Screen name="QuestionDetails" component={QuestionsDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: 'red',
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
