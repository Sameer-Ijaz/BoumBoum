import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from "react-native";
import AnimatedLogo from "../components/AnimatedLogo";
import { Image } from "moti";
import ReactToMessage from "../components/ReactToMessage";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import AnimatedMusic from "../components/AnimatedMusic";
import AnimatedVinyl from "../components/AnimatedVinyl";

function MatchScreen() {
  const height = Dimensions.get("screen").height;
  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/vinyl.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    playSound();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Match.png")}
        style={styles.imgStyle}
      >
        <View style={{ alignItems: "center", marginTop: 64 }}>
          <AnimatedLogo />
          <Text style={{ fontSize: 24 }}>Your hearts Boum Boum!</Text>
          <Text style={{ fontSize: 13, textAlign: "center", opacity: 0.6 }}>
            Its a match!
          </Text>
        </View>

        <View
          style={{
            right: 60,
            top: 40,
          }}
        >
          <ReactToMessage />
        </View>

        <View
          style={{
            left: 40,
            top: 130,
            transform: [
              { scale: 0.6 }, // Note the use of curly braces inside the array
              { rotate: "50deg" },
            ],
          }}
        >
          <ReactToMessage size={"small"} />
        </View>

        {/* Music Left */}

        <View
          style={{
            left: 40,
            top: 80,
            transform: [
              { scale: 0.6 }, // Note the use of curly braces inside the array
              { rotate: "-30deg" },
            ],
          }}
        >
          <AnimatedMusic />
        </View>
        {/* Muic Right */}
        <View
          style={{
            left: 220,
            top: 70,
          }}
        >
          <AnimatedMusic />
        </View>

        {/* <MotiView
          style={{
            position: "absolute",
            top: height * 0.35,
            right: 100,
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            from={{
              width: 0,
              height: 0,
            }}
            animate={{
              width: 47,
              height: 47,
            }}
            transition={{
              type: "spring",
              duration: 2000,
              loop: true,
            }}
            source={require("../assets/music.png")}
          />
        </MotiView> */}

        {/*      
        <MotiView
          style={{
            position: "absolute",
            top: height * 0.35,
            left: 100,
            transform: [{ rotateX: "6deg" }, { rotateZ: "-30deg" }],
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            from={{
              width: 0,
              height: 0,
            }}
            animate={{
              width: 47,
              height: 47,
            }}
            transition={{
              type: "timing",
              duration: 1000,
              loop: true,
            }}
            source={require("../assets/heart.png")}
          />
        </MotiView>

       
        <MotiView
          style={{
            position: "absolute",
            top: height * 0.45,
            right: 150,
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            from={{
              width: 0,
              height: 0,
            }}
            animate={{
              width: 27,
              height: 27,
            }}
            transition={{
              type: "timing",
              duration: 1000,
              loop: true,
            }}
            source={require("../assets/heart.png")}
          />
        </MotiView> */}

        <View
          style={{
            position: "absolute",
            top: height * 0.5,
            left: -30,
          }}
        >
          <AnimatedVinyl />
        </View>

        <View
          style={{
            position: "absolute",
            top: height * 0.5,
            right: -30,
          }}
        >
          <AnimatedVinyl />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    height: "100%",
    width: "100%",
    zIndex: 1000,
  },
});

export default MatchScreen;
