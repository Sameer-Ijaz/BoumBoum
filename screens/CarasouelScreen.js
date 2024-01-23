import * as React from "react";
import {
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Animated,
  Text,
  View,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import AnimatedLogo from "../components/AnimatedLogo";
const { width } = Dimensions.get("window");

const DURATION = 1000;
const TEXT_DURATION = DURATION * 0.8;

const inputRangeData = [1, 2];

const Circle = ({ onPress, animatedValue, animatedValue2 }) => {
  const backgroundColor = "#222";

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.container,
        { backgroundColor },
      ]}
    >
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: "white",
            transform: [
              { perspective: 200 },
              {
                rotateY: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ["0deg", "-90deg", "-180deg"],
                }),
              },

              {
                scale: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 6, 1],
                }),
              },

              {
                translateX: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 0.5, 0],
                }),
              },
            ],
          },
        ]}
      >
        {animatedValue._value === 0 && (
          <TouchableOpacity onPress={onPress}>
            <Animated.View
              style={[
                styles.button,
                {
                  transform: [
                    {
                      scale: animatedValue.interpolate({
                        inputRange: [0, 0.05, 0.5, 1],
                        outputRange: [1, 0, 0, 1],
                      }),
                    },
                  ],
                  opacity: animatedValue.interpolate({
                    inputRange: [0, 0.05, 0.9, 1],
                    outputRange: [1, 0, 0, 1],
                  }),
                },
              ]}
            >
              <AnimatedLogo />
            </Animated.View>
          </TouchableOpacity>
        )}
      </Animated.View>
    </Animated.View>
  );
};

export default function App({ navigation }) {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const animatedValue2 = React.useRef(new Animated.Value(0)).current;
  const sliderAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [...Array(inputRangeData.length).keys()];
  const [index, setIndex] = React.useState(0);

  const animate = (i) =>
    Animated.parallel([
      Animated.timing(sliderAnimatedValue, {
        toValue: i,
        duration: TEXT_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: false,
      }),
    ]);

  const onPress = async () => {
    animatedValue.setValue(0);
    animatedValue2.setValue(0);
    animate((index + 1) % 6).start();

    setIndex((index + 1) % 6);
  };

  animatedValue2.addListener(({ value }) => {
    if (value >= 0.98) {
      // The animation is almost complete, navigate to the next screen
      navigation.navigate("MatchScreen");
    }
  });

  return (
    <View style={{ flex: 1, justifyContent: "flex-start", paddingTop: 100 }}>
      <StatusBar hidden />
      <Circle
        index={index}
        onPress={onPress}
        inputRangeData={inputRangeData}
        animatedValue={animatedValue}
        animatedValue2={animatedValue2}
      />
      <Animated.View
        style={{
          flexDirection: "row",
          transform: [
            {
              translateX: sliderAnimatedValue.interpolate({
                inputRange,
                outputRange: inputRangeData.map((_, i) => -i * width * 2),
              }),
            },
          ],
          opacity: sliderAnimatedValue.interpolate({
            inputRange: [...Array(inputRangeData.length * 2 + 1).keys()].map(
              (i) => i / 2
            ),
            outputRange: [...Array(inputRangeData.length * 2 + 1).keys()].map(
              (i) => (i % 2 === 0 ? 1 : 0)
            ),
          }),
        }}
      ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    paddingBottom: 50,
  },
  paragraph: {
    margin: 12,
    fontSize: 24,
    textAlign: "center",

    color: "white",
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    backgroundColor: "turquoise",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
