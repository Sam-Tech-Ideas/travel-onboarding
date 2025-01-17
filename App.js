// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboardings from "./src/screens/Onboarding";




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Onboardings}
          options={{
        headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
