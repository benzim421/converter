import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  Text,
  View,
} from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("0");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView style={styles.view}>
      <Image
        source={{
          uri: "https://i.ytimg.com/vi/ggNcDtUhgq8/maxresdefault.jpg",
        }}
        style={{ width: 350, height: 200 }}
      />
      <Text style={{ color: "#777", fontSize: 30 }}>
        {" "}
        Lets convert feet to inches!!!
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="number to convert"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={"" + text * 12}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  view: {
    alignItems: "center",
    backgroundColor: "#34e5eb",
    height: "100%",
  },
});

export default UselessTextInput;
