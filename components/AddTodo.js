import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        onPress={() => {
          submitHandler(text);
          setText((prev) => "");
        }}
        title="add todo"
        color="coral"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
