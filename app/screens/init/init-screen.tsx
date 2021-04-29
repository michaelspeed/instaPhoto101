import React from "react"
import { Header, FlatList, Screen } from "../../components"
import tailwind from "tailwind-rn"
import { ActivityIndicator, SafeAreaView, useWindowDimensions, View } from "react-native"
import { useSelector } from "react-redux"
import { RootStore } from "../../models"
import { flatten } from "ramda"

export function InitScreen() {
  const images = useSelector((state: RootStore) => state.imageStore.images)
  const progressLoader = useSelector((state: RootStore) => state.imageStore.progressLoading)
  const error = useSelector((state: RootStore) => state.imageStore.error)
  const {width} = useWindowDimensions()
  return (
    <Screen style={tailwind("bg-indigo-500 flex-1")} preset="fixed">
      <SafeAreaView style={tailwind("flex-1")}>
        <View>
          <FlatList images={images}/>
        </View>
        <Header showBack={false} />
        {progressLoader && error === "" && <View style={flatten([tailwind('bg-white mb-10 mx-10 rounded-lg p-5'), {position: "absolute", bottom: 0, width: width - 80}])}>
          <ActivityIndicator size={"large"} color="#4F46E5" />
        </View>}
      </SafeAreaView>
    </Screen>
  )
}
