import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import NoTodo from "./components/NoTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { task: "React Orebi Project", key: 1 },
    { task: "React Native Tutorials", key: 2 },
    { task: "Practice React Reducer Hooks", key: 3 },
  ]);

  const deleteTodo = (id) => {
    const filteredData = todos.filter((todo) => todo.key !== id);
    setTodos(filteredData);
  };

  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, { task: todo, key: Math.random().toString() }];
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header />
          <Input addTodo={addTodo} />
          <View style={styles.todos}>
            {todos.length == 0 ? (
              <NoTodo />
            ) : (
              todos.map((item, i) => (
                <TodoItem item={item} key={i} deleteTodo={deleteTodo} />
              ))
            )}
          </View>

          {/* <StatusBar style="auto" /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todos: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
});
