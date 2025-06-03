import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function Header() {
  return (
    <View className="w-full  flex-row flex justify-between items-center">
      <Pressable className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <Ionicons name="menu" size={20} color="black" />
      </Pressable>

      <View className="flex flex-col items-center justify-center">
        <Text className="text-sm text-center text-slate-800">Localização</Text>

        <View className="flex flex-row items-center gap-1 justify-between">
          <Feather name="map-pin" size={14} color="#ff0000" />
          <Text className="text-lg font-bold">São Paulo</Text>
        </View>
      </View>

      <Pressable className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <Feather name="bell" size={20} color="black" />
      </Pressable>
    </View>
  );
}