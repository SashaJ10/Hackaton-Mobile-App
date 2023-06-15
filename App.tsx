import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CanopyDetails } from './components/CanopyDetails';
import { QuestionsDetails } from './components/QuestionsDetails';
import { Answer } from './components/Answer';

export type RootStackParamList = {
  CanopyDetails: undefined;
  QuestionDetails: undefined;
  Answer: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = (): JSX.Element => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="CanopyDetails">
      <RootStack.Screen
        name="CanopyDetails"
        component={CanopyDetails}
        options={{ title: 'Canopy Details' }}
      />
      <RootStack.Screen
        name="QuestionDetails"
        component={QuestionsDetails}
        options={{ title: 'Question Details' }}
      />
      <RootStack.Screen
        name="Answer"
        component={Answer}
        options={{ title: 'Answer' }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
