import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Pressable, View, Dimensions } from "react-native";
import ColumnWrapper from "./AnimatedColumnWrapper";

const vertCells = 10;
const horizontalNum = 10;
const screenWidth = Dimensions.get("screen").width; // Pixel 4 = 411.42
const screenHeight = Dimensions.get("screen").height; // Pixel 4 = 914
const squareWidth = Math.floor(screenWidth / horizontalNum) - horizontalNum / 2;
const boardHeight = squareWidth * vertCells;
const speed = 10;
const initializeBoard = () => {
  let boardInit: colProps[];
  (boardInit = [{ xpos: 0 }]).length = horizontalNum; // + 1 if I want the board to have 1 more column than it can hold
  boardInit.fill({ xpos: 0 });
  boardInit = Array.from(boardInit, (x, i) => ({
    xpos: i * squareWidth,
  }));
  console.log("boardinit: ", boardInit);
  return boardInit;
};

const boardInit = initializeBoard();
const AddColPos = boardInit[horizontalNum - 1].xpos;
console.log("addcolpos: ", AddColPos);
type GameboardProps = {
  gameTime: number;
};
type colProps = {
  xpos: number;
};

const Gameboard = ({ gameTime }: GameboardProps) => {
  const [columns, setColumns] = useState<colProps[]>(initializeBoard());

  // useEffect(() => {  // presumably don't need this if I'm initializing board at top
  //   initializeBoard();
  // }, []);

  useEffect(() => {
    handleColumnTranslate(); // As a function of the timer Causes each column to move to the left by speed variable.
    // gameTime % 10 == 0 ? handleAddColumn() : null;
  }, [gameTime]);

  const handleColumnTranslate = () => {
    console.log("translating", columns);
    if (columns[0].xpos <= -squareWidth) {
      let newColumns = [...columns] as colProps[];
      newColumns?.shift(); // don't need to assign to variable, presumably?
      const endOfLastCol: number =
        columns[horizontalNum - 1].xpos + squareWidth - 10;
      newColumns.push({ xpos: endOfLastCol });
      setColumns(newColumns);
    }

    columns.forEach((x) => {
      x.xpos -= speed;
    });
  };

  return (
    <>
      <View style={styles.gridContainer}>
        {columns.map((x, i) => (
          <ColumnWrapper
            key={i}
            xpos={x.xpos}
            cells={vertCells}
            len={squareWidth}
            time={gameTime}
            speed={speed}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    display: "flex",
    width: screenWidth + squareWidth,
    height: boardHeight,
    flexDirection: "row",
    backgroundColor: "rgba(200, 200, 255, 0.5)",
    borderWidth: 5,
    borderColor: "solid gray",
  },
});

export default Gameboard;
