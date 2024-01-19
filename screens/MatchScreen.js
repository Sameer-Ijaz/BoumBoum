import {
  Text,
  View,
  Dimensions,
  Button,
  ImageBackground,
  StyleSheet,
} from "react-native";
import AnimatedLogo from "../components/AnimatedLogo";
import { Image, MotiView } from "moti";
import ReactToMessage from "../components/ReactToMessage";

function MatchScreen() {
  const height = Dimensions.get("screen").height;
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
            left: 60,
            top: 130,
          }}
        >
          <ReactToMessage size={"small"} />
        </View>

        {/* Music Left */}
        <MotiView
          style={{
            position: "absolute",
            top: height * 0.45,
            left: 120,
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
              width: 27,
              height: 27,
            }}
            transition={{
              type: "spring",
              duration: 2000,
              loop: true,
            }}
            source={require("../assets/music.png")}
          />
        </MotiView>

        {/* Music Right */}
        <MotiView
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
        </MotiView>

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
          <Image
            style={{
              width: 247,
              height: 247,
            }}
            from={{
              width: 0,
              height: 0,
              borderRadius: 50,
            }}
            animate={{
              width: 200,
              height: 200,
              borderRadius: 60,
            }}
            transition={{
              type: "timing",
              duration: 1000,
              repeat: 1,
            }}
            source={require("../assets/vinyl.png")}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: height * 0.5,
            right: -30,
          }}
        >
          <Image
            style={{
              width: 347,
              height: 347,
            }}
            from={{
              width: 0,
              height: 0,
              borderRadius: 50,
            }}
            animate={{
              width: 200,
              height: 200,
              borderRadius: 60,
            }}
            transition={{
              type: "timing",
              duration: 1000,
              repeat: 1,
            }}
            source={require("../assets/vinyl.png")}
          />
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
