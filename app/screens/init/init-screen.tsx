import React from "react"
import { Card, Header, Screen } from "../../components"
import tailwind from "tailwind-rn"
import { FlatList, SafeAreaView, View } from "react-native"
import { useSelector } from "react-redux"
import { RootStore } from "../../models"

export function InitScreen() {
  // Pull in one of our MST stores
  const images = useSelector((state: RootStore) => state.imageStore.images)

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={tailwind('bg-white flex-1')} preset="fixed">
      <SafeAreaView style={tailwind('flex-1')}>
        <Header/>
        <View>
          <FlatList data={images} renderItem={item => <View style={tailwind('m-1')}>
            <Card key={item.item.id} item={item.item as any}/>
          </View>} numColumns={2}/>
        </View>
      </SafeAreaView>
    </Screen>
  )
}
