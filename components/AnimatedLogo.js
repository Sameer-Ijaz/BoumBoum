import { MotiView, Image } from "moti";
function AnimatedLogo() {
  return (
    <MotiView>
      <Image
        style={{
          width: 100,
          height: 100,
          shadowColor: "white",

          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0,
          shadowRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
        from={{
          width: 70,
          height: 70,
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
          loop: true,
        }}
        source={require("../assets/boumlogo.png")}
      />
    </MotiView>
  );
}

export default AnimatedLogo;
