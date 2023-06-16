import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CanopyDetails } from './components/CanopyDetails';
import { QuestionsDetails } from './components/QuestionsDetails';
import { Answer } from './components/Answer';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();
export const expertId = 'd60e44ec-59d4-41df-b48f-545ac948b0c4';

export type RootStackParamList = {
  CanopyDetails: undefined;
  QuestionDetails: undefined;
  Answer: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

interface QuestionDetailsRouteParams {
  title: string;
  canopyId: string;
}

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
        options={({ route }) => {
          const routeParams: QuestionDetailsRouteParams = route.params || {
            title: '',
            canopyId: '',
          };
          return {
            title: routeParams.title || 'Question Details',
            canopyId: routeParams.canopyId,
          };
        }}
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
