import { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Animated } from "react-native";
import { Easing } from "react-native-reanimated";

function AnimatedVinyl() {
  const vinylAnim = useRef(new Animated.Value(0)).current;
  const vinylAnimInterPolated = vinylAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(vinylAnim, {
        duration: 7000,
        toValue: 1,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start()
    );
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Animated.Image
        style={{
          width: 200,
          height: 200,
          transform: [
            {
              rotate: vinylAnimInterPolated,
            },
          ],
        }}
        source={require("../assets/vinyl.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  vinylContainer: {},
});

export default AnimatedVinyl;
