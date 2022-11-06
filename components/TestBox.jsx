import React, { useEffect, useRef, useState } from "react";
import { View, Animated } from "react-native";

let length;

const Box = ({ cells, len, xpos, speed, time }) => {
  const initXPos = useRef(new Animated.Value(xpos)).current;
  console.log("initial x ref: ", initXPos, "xpos", xpos);

  const startAnimation = () => {
    Animated.timing(initXPos, {
      toValue: xpos - speed, // speed from parent component
      duration: 2000, // two seconds, needs to match game timer --> 10px/sec
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    startAnimation();
    console.log(`rerun animation from${xpos} to ${xpos - 10}`);
  }, [time]);

  let vert;
  (vert = []).length = cells;
  vert.fill(0);
  xpos = xpos + len / 2;
  // console.log(cells, len, xpos);
  return (
    <Animated.View
      style={{
        display: "flex",
        position: "absolute",
        left: initXPos,
        flexDirection: "column",
        height: len,
        width: len,
        transform: [{ translateX: xpos }],
        backgroundColor: "green",
        borderWidth: 1,
        borderColor: "solid black",
      }}
    ></Animated.View>
  );
};

export default Box;
