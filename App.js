import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
  View,
  SafeAreaView,
} from "react-native";

export default function App() {
  let clickNumber = 0;
  const clicked = () => {
    console.log(`the text has been clicked ${clickNumber++}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={clicked}>
        Hello from Sam 👋
      </Text>
      <TouchableNativeFeedback onPress={clicked}>
        <View style={styles.view}></View>
      </TouchableNativeFeedback>
      <Image
        fadeDuration={2000}
        source={{
          uri: "https://picsum.photos/id/2/200/300",
          width: 200,
          height: 300,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    width: 200,
    height: 70,
    backgroundColor: "dodgerblue",
  },
});
