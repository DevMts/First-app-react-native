import Constants from "expo-constants";
import { ScrollView, View } from "react-native";
import { Banner } from "../components/banner";
import { Header } from "../components/header";
import { Search } from "../components/search";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ paddingTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>
    </ScrollView>
  );
}
