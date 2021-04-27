import React from "react"
import { observer } from "mobx-react-lite"
import { Header, Screen } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import tailwind from "tailwind-rn"
import { SafeAreaView } from "react-native"

export const InitScreen = observer(function InitScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={tailwind('bg-white flex-1')} preset="scroll">
      <SafeAreaView style={tailwind('flex-1')}>
        <Header/>
      </SafeAreaView>
    </Screen>
  )
})
