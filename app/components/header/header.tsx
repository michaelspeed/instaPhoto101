import * as React from "react"
import { Text, TouchableOpacity, useWindowDimensions, View, ViewProps, TextInput } from "react-native"
import tailwind from "tailwind-rn"
import { flatten } from "ramda"
import { Shadow4 } from "../../theme/shadow"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from "@react-navigation/native"
import { HeaderLogo } from "../header-logo/header-logo"
import { TopHeaderStyle } from "../../theme/styles"
import { useState } from "react"
import { RootStore, useStores } from "../../models"
import { useSelector } from "react-redux"

export interface HeaderProps extends ViewProps {
  headerText?: string
  showBack: boolean
  icon?: React.ReactNode,
  showSearch: boolean
}

export function Header(props: HeaderProps) {
  const [searchText, setSearchText] = useState('')
  const search = useSelector((state: RootStore) => state.imageStore.search)
  const {imageStore} = useStores()
  const { headerText, showBack, showSearch } = props
  const { goBack } = useNavigation()
  const width = useWindowDimensions().width - 40
  return (
    <View style={flatten([tailwind("m-4"), Shadow4, { width }, TopHeaderStyle])}>
      <View
        style={flatten([tailwind("px-2 py-2 rounded-lg bg-indigo-50 border-blue-100 border-2 flex-row items-center")])}>
        {showBack && <TouchableOpacity onPress={() => goBack()} style={tailwind("rounded-full p-1")}>
          <FontAwesome5 name="arrow-left" solid style={flatten([tailwind("text-gray-500"), { fontSize: 18 }])} />
        </TouchableOpacity>}
        {props.icon}
        <Text style={tailwind("text-gray-700 font-bold ml-2")}>{headerText || <HeaderLogo />}</Text>
        {showSearch && <View style={tailwind('flex-1 flex-row items-center')}>
          <TextInput style={tailwind('flex-1 bg-indigo-100 rounded-md p-1 mx-2')} value={searchText} onChangeText={text => setSearchText(text)}/>
          <TouchableOpacity onPress={() => {
            imageStore.setSearchTrigger(searchText)
          }}>
            <FontAwesome5 name="search" solid style={flatten([tailwind("text-gray-500 ml-2"), { fontSize: 15 }])} />
          </TouchableOpacity>
        </View>}
      </View>
      {search !== "" && showSearch && <View>
        <View style={flatten([tailwind('bg-indigo-100 rounded-md mt-2 px-2 py-1 border-blue-200 border-2 mx-1 flex-row justify-between ')])}>
          <Text style={tailwind('text-gray-600 text-xs')}>Searching for <Text style={tailwind('font-bold')}>{search}</Text></Text>
          <TouchableOpacity onPress={() => {
            imageStore.resetSearch()
            setSearchText("")
          }}>
            <FontAwesome5 name="times" solid style={flatten([tailwind("text-gray-500 ml-2"), { fontSize: 15 }])} />
          </TouchableOpacity>
        </View>
      </View>}
    </View>
  )
}
