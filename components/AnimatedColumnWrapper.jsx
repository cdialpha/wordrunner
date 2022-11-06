import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import AnimatedColumn from "./AnimatedColumn";

const AnimatedColumnWrapper = ({ cells, len, xpos, time, speed }) => {
  return (
    <View
      style={{
        position: "absolute",
        left: xpos,
        height: 300,
        width: len,
        backgroundColor: "rgba(200, 200, 255, 0.5)",
        borderWidth: 1,
        borderColor: "solid black",
      }}
    >
      <AnimatedColumn cells={cells} len={len} time={time} speed={speed} />
    </View>
  );
};
export default AnimatedColumnWrapper;
