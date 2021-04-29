import * as React from "react"
import { Text, TextProps, View } from "react-native"
import tailwind from "tailwind-rn"

export interface HeaderLogoProps extends TextProps {

}

export function HeaderLogo(props: HeaderLogoProps) {

  return (
    <View style={tailwind('flex-row items-center')}>
      <Text style={tailwind('text-indigo-400 font-bold')}>Insta</Text>
      <Text style={tailwind('text-gray-500 font-bold')}>PHOTO</Text>
    </View>
  )
}
