import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
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
      <View styke={styles.targeta}>
        <View styke={styles.cajaTexto}>
          <TextInput
            placeholder="correo@gmail.com"
            style={{ paddingHorizontal: 15 }}
          />
        </View>
        <View styke={styles.cajaTexto}>
          <TextInput placeholder="Password" style={{ paddingHorizontal: 15 }} />
        </View>
        <View style={styles.PadreBoton}>
          <TouchableOpacity style={styles.cajaBoton}>
            <Text style={styles.TextoBoton}>Iniciar Sesion</Text>
          </TouchableOpacity>
        </View>
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
  targeta: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cajaTexto: {
    paddingVertical: 20,
    backgroundColor: "#ccccc40",
    borderRadius: 30,
    marginVertical: 10,
  },
  PadreBoton: {
    palignItems: "center",
  },

  cajaBoton: {
    backgroundColor: "#525FE1",
    borderRadius: 30,
    paddingVertical: 15,
    width: 160,
    marginTop: 20,
  },
  TextoBoton: {
    textAlign: "center",
    color: "white",
  },
});
