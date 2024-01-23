import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import AnimatedLogo from "../components/AnimatedLogo";
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
            transform: [{ scale: 0.6 }, { rotate: "50deg" }],
          }}
        >
          <ReactToMessage size={"small"} />
        </View>

        {/* Music Icon Left */}
        <View
          style={{
            left: 40,
            top: 80,
            transform: [{ scale: 0.6 }, { rotate: "-30deg" }],
          }}
        >
          <AnimatedMusic />
        </View>
        {/* Music Icon Right */}
        <View
          style={{
            left: 220,
            top: 70,
          }}
        >
          <AnimatedMusic />
        </View>

        {/* Vinyl Left */}
        <View
          style={{
            position: "absolute",
            top: Platform.OS === "android" ? height * 0.5 : height * 0.54,
            left: -30,
          }}
        >
          <AnimatedVinyl />
        </View>

        {/* Vinyl Right */}
        <View
          style={{
            position: "absolute",
            top: Platform.OS === "android" ? height * 0.5 : height * 0.54,
            right: -30,
          }}
        >
          <AnimatedVinyl />
        </View>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            marginTop: 250,
          }}
        >
          <ImageBackground
            imageStyle={{
              height: 200,
            }}
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            source={require("../assets/Btn.png")}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                position: "absolute",
                top: 62,
              }}
            >
              Login With Spotify
            </Text>
          </ImageBackground>
        </TouchableOpacity>
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
