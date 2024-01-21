import "react-native-reanimated";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CarasouelScreen from "./screens/CarasouelScreen";
import MatchScreen from "./screens/MatchScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Carasouel" component={CarasouelScreen} />
        <Stack.Screen name="MatchScreen" component={MatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
