import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle, Text, View, ScrollView } from "react-native"
import { NavigatorParamList } from "../../navigators"
import { Header, Screen } from "../../components"
import { spacing } from "../../theme"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"

const ROOT: ViewStyle = {
  flex: 1,
  // paddingBottom: 90,
  // maxHeight: 200,
}

const BOLD: TextStyle = { fontWeight: "bold" }

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  // paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
  color: "#2b2c28",
}

const TEST: ViewStyle = {
  flex: 1,
}

export const StoreScreen: FC<BottomTabScreenProps<NavigatorParamList, "home">> = observer(
  function StoreScreen() {
    return (
      <Screen style={ROOT} preset="scroll" statusBar="dark-content" backgroundColor="#fcedee">
        <Header headerTx="store.header" style={HEADER} titleStyle={HEADER_TITLE} />
        {/* <ScrollView style={TEST}> */}
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>

        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>

        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>

        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>

        <Text> Start </Text>
        <Text> END </Text>
        <Text> Start </Text>
        <Text> END </Text>

        <Text> Start </Text>
        <Text> END </Text>

        {/* </ScrollView> */}
      </Screen>
    )
  },
)
