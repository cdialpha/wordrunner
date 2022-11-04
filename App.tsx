import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import StartModal from "./components/StartModal";
import Gameboard from "./components/Gameboard";
import Timer from "./components/Timer";

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);
  const [ms, setMs] = useState(0);
  return (
    <View style={styles.centeredView}>
      <StartModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {modalVisible ? null : (
        <>
          <Timer gameTime={ms} setGameTime={setMs} />
          <Gameboard gameTime={ms} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(200, 200, 255, 0.5)",
    borderWidth: 1,
    borderColor: "solid black",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

//<Pressable
// style={[styles.button, styles.buttonOpen]}
// onPress={() => setModalVisible(true)}
// >
// <Text style={styles.textStyle}>Show Modal</Text>
// </Pressable>
