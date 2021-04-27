import React from "react"
import { Card, Header, Screen } from "../../components"
import tailwind from "tailwind-rn"
import { SafeAreaView } from "react-native"
import { useSelector } from "react-redux"

export function InitScreen() {
  // Pull in one of our MST stores
  // const { imageStore } = useStores()
  const stateRed = useSelector(state => state)
  console.log(stateRed)

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={tailwind('bg-white flex-1')} preset="scroll">
      <SafeAreaView style={tailwind('flex-1')}>
        <Header/>
        <Card/>
      </SafeAreaView>
    </Screen>
  )
}
