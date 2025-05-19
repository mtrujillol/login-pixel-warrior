import { Text, StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";

export default function Login() {
  return (
    <View style={styles.padre}>
      <View>
        <Image
          source={require("../assets/profile2.jpg")}
          style={styles.profile}
        />
      </View>
      <View styke={styles.targeta}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "white",
  },
  targeta: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
