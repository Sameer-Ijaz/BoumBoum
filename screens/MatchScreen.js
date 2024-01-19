import { Text, View, Dimensions, Button } from "react-native";
import AnimatedLogo from "../components/AnimatedLogo";
import { Image, MotiView } from "moti";

function MatchScreen() {
  const height = Dimensions.get("screen").height;
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 62 }}
    >
      <AnimatedLogo />
      <Text style={{ fontSize: 24 }}>Your hearts Boum Boum!</Text>
      <Text style={{ fontSize: 13, textAlign: "center", opacity: 0.6 }}>
        Its a match!
      </Text>
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
            width: 120,
            height: 120,
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
            width: 247,
            height: 247,
          }}
          from={{
            width: 0,
            height: 0,
            borderRadius: 50,
          }}
          animate={{
            width: 120,
            height: 120,
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
    </View>
  );
}

export default MatchScreen;
