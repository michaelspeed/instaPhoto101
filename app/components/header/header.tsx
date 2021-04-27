import * as React from "react"
import { StyleProp, Text, View, ViewStyle } from "react-native"
import tailwind from "tailwind-rn"

export interface HeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export function Header(props: HeaderProps) {

  return (
    <View style={tailwind('m-5 p-5 rounded-2xl bg-blue-50 border-blue-100 border-2')}>
      <Text style={tailwind('text-gray-500 font-bold')}>InstaPhoto</Text>
    </View>
  )
}
