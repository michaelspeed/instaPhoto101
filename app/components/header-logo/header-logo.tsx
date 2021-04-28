import * as React from "react"
import { Text, TextProps, View } from "react-native"
import tailwind from "tailwind-rn"

export interface HeaderLogoProps extends TextProps{

}

/**
 * Describe your component here
 */
export function HeaderLogo(props: HeaderLogoProps) {

  return (
    <View style={tailwind('flex-row items-center')}>
      <Text style={tailwind('text-indigo-400 font-bold text-xl')}>Insta</Text>
      <Text style={tailwind('text-gray-500 font-bold text-xl')}>PHOTO</Text>
    </View>
  )
}
