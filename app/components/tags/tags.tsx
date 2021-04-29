import * as React from "react"
import { Text, View, ViewProps } from "react-native"
import tailwind from "tailwind-rn"
import { flatten } from "ramda"

export interface TagsProps extends ViewProps{
  text?: string
}

export function Tags(props: TagsProps) {
  const {text, ...rest} = props

  return (
    <View style={flatten([tailwind('bg-indigo-100 rounded-full px-2 py-1 border-blue-200 border-2 mx-1'), rest.style])} {...rest}>
      <Text style={tailwind('text-gray-600 text-xs')}>{text}</Text>
    </View>
  )
}
