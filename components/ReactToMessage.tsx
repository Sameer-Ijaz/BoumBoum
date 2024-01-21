import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import AnimatedHeart from "./AnimatedHeart";
import { WINDOW_WIDTH } from "../utils/index";

function getUniqueID() {
  return Math.floor(Math.random() * Date.now()).toString();
}

interface ReactToMessageProps {
  size: string;
}

const ReactToMessage = (size: ReactToMessageProps) => {
  const [heartCount, setHeartCount] = useState(0);
  const [hearts, setHearts] = useState<{ id: string }[]>([]);

  const countAnimatedValue = useRef(new Animated.Value(0)).current;
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const handleCompleteAnimation = useCallback((id: string) => {
    setHearts((oldHearts) => {
      return oldHearts.filter((heart) => heart.id !== id);
    });
  }, []);

  const heartAnimation = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setHeartCount(heartCount + 1);
    setHearts((oldHearts) => [...oldHearts, { id: getUniqueID() }]);

    timeout.current = setTimeout(() => {
      Animated.spring(countAnimatedValue, {
        toValue: 0,
        speed: 48,
        useNativeDriver: true,
      }).start();
    }, 500);
    Animated.spring(countAnimatedValue, {
      toValue: -64,
      speed: 48,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setInterval(() => {
      heartAnimation();
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messageContainer}>
        <TouchableOpacity
          style={styles.loveButton}
          activeOpacity={1}
          onPress={heartAnimation}
        >
          {heartCount ? (
            <Image
              style={[styles.loveIcon]}
              source={require("../assets/heart.png")}
            />
          ) : (
            <Image
              style={styles.loveIcon}
              source={require("../assets/heart.png")}
            />
          )}
        </TouchableOpacity>

        {hearts.map(({ id }) => (
          <AnimatedHeart
            key={id}
            id={id}
            onCompleteAnimation={handleCompleteAnimation}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messageContainer: {
    flexDirection: "row",
  },
  messageAvatar: {
    width: 78,
    height: 78,
    borderRadius: 24,
    marginRight: 8,
  },
  messageContent: {
    width: WINDOW_WIDTH * 0.7,
    backgroundColor: "#178BF4",
    borderRadius: 8,
    padding: 8,
  },
  messageText: {
    fontSize: 20,
    color: "white",
  },
  messageSentTime: {
    color: "white",
    fontSize: 14,
    marginTop: 4,
  },
  loveButton: {
    width: 78,
    height: 78,
    justifyContent: "center",
    alignItems: "center",
  },
  loveCircle: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "white",
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: "grey",
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: {
          width: 0.5,
          height: 0.5,
        },
      },
    }),
  },
  loveIcon: {
    width: 58,
    height: 58,
  },
  loveCountCircle: {
    position: "absolute",
    bottom: -16,
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    right: -8,
    borderRadius: 16,
    backgroundColor: "orange",
    zIndex: 100,
  },
  loveCountText: {
    color: "white",
  },
});

export default ReactToMessage;
