import { View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constant/icons";

interface SearchProp {
    value: string;
    onChangeText: (text: string) => void;
    onSubmit?: (text: string) => void;
}

const Search = ({ value, onChangeText, onSubmit }: SearchProp) => {
    const [inputValue, setInputValue] = useState(value);

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(inputValue);
        }
    };

    return (
        <View className="flex flex-row-reverse items-center rounded-full bg-primary-100 px-6 p-2">
            <TouchableOpacity onPress={handleSubmit}>
                <Image
                    source={icons.search}
                    className="size-4"
                    tintColor={"#2E7D32"}
                />
            </TouchableOpacity>
            <TextInput
                value={inputValue}
                className="mx-1 flex-1 font-300 text-sm outline-none placeholder:text-black-200 focus:outline-none"
                placeholder="ابحث في المستشفيات المتاحة"
                onChangeText={setInputValue}
                onSubmitEditing={handleSubmit}
                returnKeyType="search"
            />
            <TouchableOpacity onPress={handleSubmit}>
                <Image
                    source={icons.filter}
                    className="size-4"
                    tintColor={"#2E7D32"}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Search;
