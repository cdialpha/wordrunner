import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const Timer = () => {
  const [ms, setMs] = useState(0);
  let gameTimerId;
  const interval: number = 1000;

  useEffect(() => {
    gameTimerId = setInterval(() => {
      setMs((time: number) => time + 1);
    }, interval);
  }, []);
  return (
    <View style={styles.score}>
      <Text> Score: {ms} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  score: {
    position: "absolute",
    top: 20,
    backgroundColor: "rgba(200, 200, 255, 0.5)",
    borderWidth: 1,
    borderColor: "solid black",
  },
});

export default Timer;
