import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const {isLoading, isLogged } = useGlobalContext();

  if(!isLoading && isLogged ) return <Redirect href="/home"/>
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[260px] h-[168px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Get the best home according to your needs with{" "}
              <Text className="text-secondary-200">Real Estate App</Text>
            </Text>
            {/* <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode='contain'
            /> */}
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Find homes at best rates!
          </Text>

          <CustomButton 
            title="Continue with email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
