import * as React from "react"
import {
  StyleProp,
  Text,
  TouchableHighlight,
  View,
  ViewProps,
  ViewStyle,
} from "react-native"
import tailwind from "tailwind-rn"
import FastImage from 'react-native-fast-image'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { flatten } from "ramda"
import { Shadow2, Shadow4 } from "../../theme/shadow"
import { Image } from "../../models"

export interface CardProps extends ViewProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  item?: Image
  onPress?: () => void
  height: number
  width: number
}

/**
 * Describe your component here
 */
export function Card(props: CardProps) {
  const {item, style, onPress, width, height,  ...rest} = props
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={flatten([tailwind('flex-col rounded-md bg-white'), {width, height}, Shadow2, style])} {...rest}>
        <FastImage
          style={flatten([tailwind('rounded-md'), {height: height - 40}, Shadow4 as any])}
          source={{
            uri: item.previewURL,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={tailwind('px-1')}>
          <View style={tailwind('flex-row p-1')}>
            <FastImage
              style={flatten([tailwind('rounded-full mr-1'), {height: 15, width: 15}, Shadow4 as any])}
              source={{
                uri: item.userImageURL,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <Text style={tailwind('text-gray-700')}>{item.user ? item.user : ''}</Text>
          </View>
          <View style={tailwind('flex-row px-1 pb-1 items-center justify-end')}>
            <FontAwesome5 name="heart" solid style={flatten([tailwind('text-red-500'), {fontSize: 8}])}/>
            <Text style={flatten([tailwind('text-red-400 pl-1'), {fontSize: 8}])}>{item.favorites ? item.favorites: 0}</Text>
            <FontAwesome5 name="thumbs-up" solid style={flatten([tailwind('text-indigo-500 pl-2'), {fontSize: 8}])}/>
            <Text style={flatten([tailwind('text-indigo-400 pl-1'), {fontSize: 8}])}>{item.likes ? item.likes : 0}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}
