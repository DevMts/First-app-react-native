import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
export function Search() {
  return (
    <View className="w-full flex-row border border-slate-500 h-14  rounded-full px-4 gap-2 items-center bg-transparent">
      <Feather name="search" size={24} color="#64748b" />

      <TextInput placeholder="Procure sua comida" placeholderTextColor="#64748b" className="w-full bg-transparent flex-1 h-full" />
    </View>
  )
}