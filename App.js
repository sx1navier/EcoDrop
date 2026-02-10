import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from "./Components/screens/LandingScreen";
import SigninScreen from "./Components/screens/SigninScreen";
import SignupScreen from "./Components/screens/SignupScreen";
import EcoMapScreen from "./Components/screens/EcoMapScreen";
import QRScreen from "./Components/screens/QRScreen";
import WalletScreen from "./Components/screens/WalletScreen";
import ProfileScreen from "./Components/screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="SignIn" component={SigninScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="EcoMap" component={EcoMapScreen} />
        <Stack.Screen name="QRScreen" component={QRScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}