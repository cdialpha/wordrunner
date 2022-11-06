import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, Pressable, View, Dimensions } from "react-native";

type ColumnProps = {
  cells: number;
  len: number;
  xpos: number;
};
let length;

const Column = ({ cells, len, xpos }: ColumnProps) => {
  let vert: number[];
  (vert = []).length = cells;
  vert.fill(0);
  xpos = xpos + len / 2;
  // console.log(cells, len, xpos);
  return (
    <View
      style={{
        display: "flex",
        position: "absolute",
        left: xpos,
        flexDirection: "column",
        backgroundColor: "rgba(200, 200, 255, 0.5)",
        borderWidth: 1,
        borderColor: "solid black",
      }}
    >
      {vert.map((x, i) => {
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
    </View>
  );
};

export default Column;
