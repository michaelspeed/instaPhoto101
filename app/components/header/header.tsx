import * as React from "react"
import { Text, TouchableOpacity, useWindowDimensions, View, ViewProps } from "react-native"
import tailwind from "tailwind-rn"
import { flatten } from "ramda"
import { Shadow4 } from "../../theme/shadow"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from "@react-navigation/native"
import { HeaderLogo } from "../header-logo/header-logo"
import { TopHeaderStyle } from "../../theme/styles"

export interface HeaderProps extends ViewProps {
  headerText?: string
  showBack: boolean
  icon?: React.ReactNode
}

export function Header(props: HeaderProps) {
  const { headerText, showBack } = props
  const { goBack } = useNavigation()
  const width = useWindowDimensions().width - 40
  return (
    <View style={flatten([tailwind("m-5"), Shadow4, { width }, TopHeaderStyle])}>
      <View
        style={flatten([tailwind("px-5 py-2 rounded-lg bg-indigo-50 border-blue-100 border-2 flex-row items-center")])}>
        {showBack && <TouchableOpacity onPress={() => goBack()} style={tailwind("rounded-full p-1")}>
          <FontAwesome5 name="arrow-left" solid style={flatten([tailwind("text-gray-500"), { fontSize: 18 }])} />
        </TouchableOpacity>}
        {props.icon}
        <Text style={tailwind("text-gray-700 font-bold ml-2")}>{headerText || <HeaderLogo />}</Text>
      </View>
    </View>
  )
}
