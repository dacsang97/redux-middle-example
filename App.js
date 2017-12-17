import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CounterContainer from "./src/containers/CounterContainer";
import { Provider } from "react-redux";
import configureStore from "./src/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { AppLoading } from "expo";

const { store, persistor } = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<AppLoading />}>
          <View style={styles.container}>
            <CounterContainer />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDE9DF",
    alignItems: "center",
    justifyContent: "center"
  }
});
