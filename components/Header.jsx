import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Daily Task App</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00A551",
    padding: 20,
  },
  headerText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
});
