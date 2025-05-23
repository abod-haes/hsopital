import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constant/icons";
import { useRouter } from "expo-router";

const HeadPage = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <View className="flex items-center flex-row-reverse justify-between">
      <Text className="text-center text-xl font-600 text-black-300">
        {title}
      </Text>
      <TouchableOpacity className="size-4" onPress={() => router.back()}>
        <Image
          source={icons.arrow}
          className="size-full -rotate-180"
          resizeMode="contain"
          tintColor={"#191D31"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeadPage;
