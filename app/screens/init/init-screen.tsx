import React from "react"
import { Card, Header, Screen } from "../../components"
import tailwind from "tailwind-rn"
import { FlatList, SafeAreaView, View } from "react-native"
import { useSelector } from "react-redux"
import { RootStore, useStores } from "../../models"
import { useNavigation } from "@react-navigation/native"

export function InitScreen() {
  // Pull in one of our MST stores
  const images = useSelector((state: RootStore) => state.imageStore.images)
  const {imageStore} = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={tailwind('bg-indigo-500 flex-1')} preset="fixed">
      <SafeAreaView style={tailwind('flex-1')}>
        <View>
          <FlatList data={images} style={tailwind('pt-20')}
                    keyExtractor={(item, index) => `${item.id}${index}`}
          onEndReachedThreshold={0.7}
          onEndReached={() => imageStore.getNextPageData()}
                    renderItem={item => <View style={tailwind('m-1')}>
            <Card key={item.item.id} item={item.item as any} onPress={() => navigation.navigate('details', {item: item.item})}/>
          </View>} numColumns={2}/>
        </View>
        <Header showBack={false}/>
      </SafeAreaView>
    </Screen>
  )
}
