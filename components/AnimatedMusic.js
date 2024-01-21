import { Image } from "moti";
import { StyleSheet, View } from "react-native";
import { Easing } from "react-native-reanimated";

function AnimatedMusic() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {[...Array(3).keys()].map((index) => {
        return (
          <Image
            key={index}
            style={[
              StyleSheet.absoluteFillObject,
              {
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "white",
                resizeMode: "contain",

                alignItems: "center",
                justifyContent: "center",
              },
            ]}
            from={{
              opacity: 0.7,
              scale: 0.2,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "timing",
              duration: 2000,
              easing: Easing.out(Easing.ease),
              repeatReverse: false,
              loop: true,
              delay: index * 400,
            }}
            source={require("../assets/music.png")}
          />
        );
      })}
    </View>
  );
}

export default AnimatedMusic;
