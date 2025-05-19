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
});
