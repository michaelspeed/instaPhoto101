import * as React from "react"
import { ActivityIndicator, Text, useWindowDimensions, View } from "react-native"
import tailwind from "tailwind-rn"
import { Card } from "../card/card"
import { useSelector } from "react-redux"
import { RootStore, useStores } from "../../models"
import { useNavigation } from "@react-navigation/native"
import { useRef } from "react"
import { FlatGrid } from "react-native-super-grid"
import uuid from "react-native-uuid"

export interface FlatListProps {
  images: any[]
}


export function FlatList({ images, ...rest }: FlatListProps) {
  const initialLoader = useSelector((state: RootStore) => state.imageStore.initLoading)
  const error = useSelector((state: RootStore) => state.imageStore.error)
  const { imageStore } = useStores()
  const { width, height } = useWindowDimensions()
  const navigation = useNavigation()
  const landscapeFlatListRef = useRef()
  const cardHeightLandscape = width / 3 - 40
  const cardHeightPortrait = width / 2 - 20
  return (
    <View>
      <FlatGrid
        ref={landscapeFlatListRef}
        data={images}
        style={tailwind("pt-20 pb-40")}
        ListHeaderComponent={<View>
          {initialLoader && <ActivityIndicator size={"large"} color="#ffffff" />}
        </View>}
        itemDimension={width > height ? cardHeightLandscape : cardHeightPortrait}
        spacing={0}
        ListFooterComponent={<View>
          {error !== "" && <View style={tailwind("bg-red-500 p-3 m-3 rounded-md")}>
            <Text style={tailwind("text-white font-bold")}>{error}</Text>
          </View>}
        </View>}
        keyExtractor={(item, index) => `${item.id}-${uuid.v4()}`}
        onEndReachedThreshold={0.7}
        initialNumToRender={10}
        onEndReached={() => imageStore.getNextPageData()}
        renderItem={item => <View style={tailwind("m-1")}>
          <Card key={item.item.id} item={item.item as any}
                height={width > height ? cardHeightLandscape : cardHeightPortrait}
                width={width > height ? cardHeightLandscape : cardHeightPortrait}
                onPress={() => navigation.navigate("details", { item: item.item })} />
        </View>} {...rest} />
    </View>
  )
}
