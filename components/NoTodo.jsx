import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NoTodo = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.err}>No Todo Available</Text>
    </View>
  );
};

export default NoTodo;

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 500,
    backgroundColor: "#00A551",
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  err: {
    fontSize: 22,
    color: "white",
    fontWeight: "700",
  },
});
