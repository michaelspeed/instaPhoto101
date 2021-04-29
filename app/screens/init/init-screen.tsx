import React from "react"
import { Header, FlatList, Screen } from "../../components"
import tailwind from "tailwind-rn"
import { ActivityIndicator, SafeAreaView, Text, useWindowDimensions, View } from "react-native"
import { useSelector } from "react-redux"
import { RootStore } from "../../models"
import { flatten } from "ramda"
import { BottomLoadingIndicatorStyle } from "../../theme/styles"

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
        {progressLoader && error === "" && <View style={flatten([tailwind('bg-white mb-10 mx-10 rounded-lg p-5'), {width: width - 80}, BottomLoadingIndicatorStyle])}>
          <ActivityIndicator size={"large"} color="#4F46E5" />
          <View style={tailwind('flex-row justify-center')}>
            <Text style={tailwind('text-indigo-500 font-bold')}>Getting More Images ...</Text>
          </View>
        </View>}
      </SafeAreaView>
    </Screen>
  )
}
