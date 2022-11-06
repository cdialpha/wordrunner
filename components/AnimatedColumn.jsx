import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";

const AnimatedColumn = ({ cells, len, time, speed }) => {
  const xPos = useRef(new Animated.Value(0)).current;
  console.log("time is:", time);

  const startAnimation = () => {
    return Animated.timing(xPos, {
      toValue: -speed, // speed from parent component
      duration: 1000, // one second, needs to match game timer --> 10px/sec
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  };

  useEffect(() => {
    startAnimation();
  }, [time]);

  // initialize array of zeros to map over.
  let vert;
  let length;
  (vert = []).length = cells;
  vert.fill(0);

  return (
    <Animated.View
      style={{
        left: 0,
        display: "flex",
        transform: [{ translateX: xPos }],
        flexDirection: "column",
      }}
    >
      {vert.map((x, i) => {
        // do keys need to be unique?
        // let newKey = key.toString() + i.toString();
        // console.log(newKey);
        return (
          <View
            key={i}
            style={{
              height: len,
              width: len,
              backgroundColor: "green",
              borderWidth: 1,
              borderColor: "solid black",
            }}
          />
        );
      })}
    </Animated.View>
  );
};

export default AnimatedColumn;
