import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Pressable, View, Dimensions } from "react-native";
import Column from "./Column";

const vertCells = 10;
const horizontalNum = 10;
const screenWidth = Dimensions.get("screen").width; // Pixel 4 = 411.42
const screenHeight = Dimensions.get("screen").height; // Pixel 4 = 914
const squarewidth = screenWidth / 10;

type GameboardProps = {
  gameTime: number;
};
type colProps = {
  html: HTMLElement;
  xpos: number;
};

const Gameboard = ({ gameTime }: GameboardProps) => {
  let initColumns: colProps[] = [];
  const [columns, setColumns] = useState(initColumns);

  useEffect(() => {
    gameTime % 10 == 0 ? handleAddColumn() : null;
  }, [gameTime]);

  const column = <Column cells={vertCells} len={squarewidth} />;

  const handleAddColumn = () => {
    console.log("add col!");
    const newCol: colProps = {
      html: column,
      xpos: 411,
    };
    setColumns((prevState) => prevState.push(newCol));
    console.log(columns);
  };

  return (
    <View>
      <View></View>
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

// (initColsXPos = []).length = horizontalNum;
// initColsXPos.fill(0);
// console.log(initColsXPos);
