import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Pressable, View, Dimensions } from "react-native";

const verticalNum = 15;
const horizontalNum = 10;

let vert: number[];
(vert = []).length = horizontalNum;
vert.fill(0);

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const squarewidth = screenWidth / 10;

const Gameboard = () => {
  return (
    <View>
      <View>
        <Column />
      </View>
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
  rowContainer: {
    display: "flex",
    flexDirection: "row",
  },
  gridItem: {
    height: squarewidth,
    width: squarewidth,
    backgroundColor: "gray",
    borderWidth: 1,
    borderColor: "solid black",
  },
});

export default Gameboard;

// first attempt
// let horz: number[];
// (horz = []).length = horizontalNum;
// horz.fill(0);
// console.log(horz);

// second attempt
// const Boxes = (num: Number) => {
//   const arrayLike: any = { length: num };
//   return Array.from(arrayLike, (_, index) => {
//     return <View style={styles.gridItem} key={index} />;
//   });
// };
// const grid = Boxes(horizontalNum);
//
// returns an array of Views....
