import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { images } from "@/constant/images";
import { useRouter } from "expo-router";

type Cards = {
    id: number;
    name: string;
    price: string;
    status: string;
    image: string;
    location: string;
    paymentType: string;
};

interface CardsProps {
    cards: Cards;
    onPress?: () => void;
}

const Card = ({ cards, onPress }: CardsProps) => {
    return (
        <TouchableOpacity
            className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
            onPress={onPress}
        >
            <Image source={images.house} className="w-full h-40 rounded-lg" />

            <View className="flex flex-col mt-2 gap-1.5">
                <Text className="text-base font-rubik-bold text-black-300 font-500 ">
                    {cards.name}
                </Text>
                <Text className="text-xs font-rubik text-black-200 font-500 ">
                    {cards.location}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
