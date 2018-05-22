import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../themes/colors";

class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent_color,
    padding: 16,
    borderRadius: 25,
    elevation: 3
  },
  text: {
    color: colors.text_primary_color
  }
});

export default Button;
