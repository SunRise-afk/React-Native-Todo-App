import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";
import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/Header";
import { TodoItem } from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy cofee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the ps", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text) {
      setTodos((prev) => [...prev, { text: text, key: Date.now() }]);
    } else {
      Alert.alert("What do you want to do?");
    }
  };
  return (
    <TouchableNativeFeedback
      onPress={() => {
        Keyboard.dismiss;
      }}
    >
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
