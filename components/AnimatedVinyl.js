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
    const animation = Animated.sequence([
      Animated.timing(vinylAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(vinylAnim, {
        toValue: 0, // Reset to the initial value
        duration: 0, // Set duration to 0 for an instant reset
        useNativeDriver: true,
      }),
    ]);

    const loop = Animated.loop(animation);
    loop.start();

    // Don't forget to stop the animation when the component unmounts
    return () => {
      loop.stop();
    };
  }, []); // empty dependency array to run the effect only once when the component mounts
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
