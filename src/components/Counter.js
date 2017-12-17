import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Button,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from "react-native";
import { connect } from "react-redux";
import { addValue, subValue, addValueAsync } from "../actions/numberActions";

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.counterView}>
        <Button onPress={() => this.props.subValue(1)} title="Sub" />
        <Text>Counter: {this.props.number}</Text>
        <Button onPress={() => this.props.addValueAsync(2)} title="Add" />
        {/* <Button onPress={this.onAdd} title="Add" /> */}
      </View>
    );
  }
}

Counter.defaultProps = {
  number: 1
};

const styles = StyleSheet.create({
  counterView: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
