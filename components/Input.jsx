import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Input = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const submitTodo = () => {
    addTodo(todo);
    setTodo("");
  };
  return (
    <View style={styles.form}>
      <TextInput
        value={todo}
        style={styles.input}
        placeholder="Add New Todo......"
        onChangeText={(e) => setTodo(e)}
      />
      <Button onPress={() => submitTodo()} title="add" color={`#00A551`} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 5,
    flex: 1,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 2,
    borderColor: "#00A551",
    marginBottom: 20,
  },
});
