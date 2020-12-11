/**
 * 
 *  Main App.js file 
 *  Which contain Navigation for Screens
 * 
 */

 // All Imports Here
 import React from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";

 // All Screens here
 import HomeScreen from "./src/screens/homeScreen";
 import InfoScreen from './src/screens/infoScreen';

 // Stack for screens
 const Stack = createStackNavigator()

 // Main Navigator
 function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='HomeScreen'>
         <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
         />
         <Stack.Screen
            name='InfoScreen'
            component={InfoScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
         />
       </Stack.Navigator>
       
     </NavigationContainer>
   )
 }

 // Exporting the Main function
 export default App;