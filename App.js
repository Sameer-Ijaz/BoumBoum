import "react-native-reanimated";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MatchScreen from "./MatchScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MatchScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
