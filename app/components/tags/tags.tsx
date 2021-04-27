import * as React from "react"
import { StyleProp, Text, View, ViewStyle } from "react-native"
import tailwind from "tailwind-rn"

export interface TagsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  text?: string
}

/**
 * Describe your component here
 */
export function Tags(props: TagsProps) {
  const {text} = props

  return (
    <View style={tailwind('bg-blue-50 rounded-full px-2 py-1 border-blue-100 border-2 mx-1')}>
      <Text style={tailwind('text-gray-500 text-xs')}>{text}</Text>
    </View>
  )
}
