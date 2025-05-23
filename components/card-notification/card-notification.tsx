import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constant/images";

type NotificationCard = {
    title: string;
    message: string;
    time: string;
};
type NotificationCardProps = {
    notification: NotificationCard;
};

const CardNotification = ({ notification }: NotificationCardProps) => {
    return (
        <View className="flex-row-reverse items-center gap-3 bg-primary-100 p-4 rounded-xl mb-3 mx-5">
            <Image
                source={images.logo}
                className="size-20 rounded-full"
                resizeMode="contain"
            />

            <View className="flex-1">
                <Text className="text-primary-300 font-600 text-xl ">
                    {notification.title}
                </Text>
                <Text className="text-black-100 font-500 text-base mt-1 ">
                    {notification.message}
                </Text>
                <Text className="text-black-200 font-500 text-sm mt-2 ">
                    {notification.time}
                </Text>
            </View>
        </View>
    );
};

export default CardNotification;
