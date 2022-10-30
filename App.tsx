import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {Text} from "react-native";
import { TamaguiProvider } from "tamagui";

import config from "./tamagui.config";

export default function App() {


  return (
      <TamaguiProvider config={config}>
        <SafeAreaProvider>
          <StatusBar/>
          <Text>Test</Text>
        </SafeAreaProvider>
      </TamaguiProvider>
  )
}
