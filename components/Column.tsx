import React from "react";
import { StyleSheet, Text, Pressable, View, Dimensions } from "react-native";

type ColumnProps = {
  cells: number;
  len: number;
};
let length;

const Column = ({ cells, len }: ColumnProps) => {
  let vert: number[];
  (vert = []).length = cells;
  vert.fill(0);

  return (
    <View style={styles.gridContainer}>
      {vert.map((x, i) => {
        return (
          <View
            key={i}
            style={{
              height: len,
              width: len,
              backgroundColor: "gray",
              borderWidth: 1,
              borderColor: "solid black",
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    display: "flex",
    backgroundColor: "rgba(200, 200, 255, 0.5)",
    borderWidth: 1,
    borderColor: "solid black",
  },
});

export default Column;
