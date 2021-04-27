import * as React from "react"
import { StyleProp, Text, View, ViewStyle } from "react-native"
import tailwind from "tailwind-rn"
import { Tags } from "../tags/tags"
import FastImage from 'react-native-fast-image'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export interface CardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export function Card(props: CardProps) {

  return (
    <View style={tailwind('flex-col m-2 rounded-2xl border-2 border-blue-200')}>
      <FastImage
        style={tailwind('w-full rounded-xl h-96')}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={tailwind('px-2')}>
        <View style={tailwind('p-2')}>
          <Text style={tailwind('text-gray-700')}>User</Text>
        </View>
        <View style={tailwind('flex-row pb-1')}>
          {['some', "some2", 'style'].map(item => (<Tags text={item} key={item}/>))}
        </View>
        <View style={tailwind('flex-row px-2 pb-2 items-center justify-end')}>
          <FontAwesome5 name="heart" solid style={tailwind('text-red-500')}/>
          <Text style={tailwind('text-red-400 pl-1')}>1000</Text>
          <FontAwesome5 name="thumbs-up" solid style={tailwind('text-indigo-500 pl-2')}/>
          <Text style={tailwind('text-indigo-400 pl-1')}>1000</Text>
        </View>
      </View>
    </View>
  )
}
