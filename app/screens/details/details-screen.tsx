import React, { useState } from "react"
import { Header, Screen, Tags } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import tailwind from "tailwind-rn"
import { NavigationProp, RouteProp } from "@react-navigation/native"
import { flatten } from "ramda"
import { Shadow4 } from "../../theme/shadow"
import FastImage from "react-native-fast-image"
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface DetailsScreenProps {
  route: RouteProp<any, any>
  navigation: NavigationProp<any>
}

export function DetailsScreen(props: DetailsScreenProps) {
  const [loading, setLoading] = useState(true)
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const tags = props.route.params.item.tags.split(",")
  return (
    <Screen style={tailwind('bg-indigo-500 flex-1')} preset="fixed">
      <SafeAreaView>
        <FastImage
          style={flatten([{height: '50%', marginTop: 70}, Shadow4 as any])}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          source={{
            uri: props.route.params.item.largeImageURL,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View>
          {loading && <ActivityIndicator size={"large"} color="#ffffff" style={tailwind('my-10')}/>}
        </View>
        <View style={flatten([Shadow4, tailwind('bg-white mx-2 rounded-lg p-2')])}>
          <View style={tailwind('flex-row')}>
            {tags.map((tag, index) => (<Tags key={index} text={tag}/>))}
          </View>
          <View style={tailwind('flex-row px-1 pb-1 items-center justify-start mt-4')}>
            <FontAwesome5 name="comments" solid style={flatten([tailwind('text-purple-500'), {fontSize: 20}])}/>
            <Text style={flatten([tailwind('text-purple-400 ml-2'), {fontSize: 20}])}>{props.route.params.item.comments ? props.route.params.item.comments: 0}</Text>
            <FontAwesome5 name="heart" solid style={flatten([tailwind('text-red-500  ml-2'), {fontSize: 20}])}/>
            <Text style={flatten([tailwind('text-red-400 ml-2'), {fontSize: 20}])}>{props.route.params.item.favorites ? props.route.params.item.favorites: 0}</Text>
            <FontAwesome5 name="thumbs-up" solid style={flatten([tailwind('text-indigo-500 pl-2'), {fontSize: 20}])}/>
            <Text style={flatten([tailwind('text-indigo-400 ml-2'), {fontSize: 20}])}>{props.route.params.item.likes ? props.route.params.item.likes : 0}</Text>
          </View>
        </View>
        <Header headerText={props.route.params.item.user} showBack={true} icon={<FastImage
          style={flatten([tailwind('rounded-full ml-4'), {height: 24, width: 24}])}
          source={{
            uri: props.route.params.item.userImageURL,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />}/>
      </SafeAreaView>
    </Screen>
  )
}
