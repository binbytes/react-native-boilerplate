import React, { Component } from "react";
import { View, Text } from "react-native";

import Button from "../components/button.component";
import styles from "../themes";

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Button title={"Click Here"} />
      </View>
    );
  }
}

export default Main;
