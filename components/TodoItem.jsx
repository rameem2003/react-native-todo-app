import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TodoItem = ({ item, deleteTodo }) => {
  return (
    <TouchableOpacity style={styles.list} onPress={() => deleteTodo(item.key)}>
      <Text style={styles.listText}>{item.task}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#00A551",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderColor: "white",
    borderWidth: 2,
    borderStyle: "dashed",
  },

  listText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
