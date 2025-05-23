import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    FlatList,
    Image,
} from "react-native";
import { icons } from "@/constant/icons";

interface Option {
    id: number;
    name: string;
}

interface CustomSelectProps {
    value: Option | null;
    options: Option[];
    placeholder: string;
    onChange: (option: Option) => void;
    title: string;
}

const Select = ({
    value,
    options,
    placeholder,
    onChange,
    title,
}: CustomSelectProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <TouchableOpacity
                className="flex-1 bg-white px-4 py-2.5 rounded-xl border border-gray-200"
                onPress={() => setShowModal(true)}
            >
                <Text className="text-black-300 ">
                    {value?.name || placeholder}
                </Text>
            </TouchableOpacity>

            <Modal
                visible={showModal}
                transparent
                animationType="slide"
                onRequestClose={() => setShowModal(false)}
            >
                <TouchableOpacity
                    className="flex-1 bg-black/50 justify-end"
                    activeOpacity={1}
                    onPress={() => setShowModal(false)}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={(e) => e.stopPropagation()}
                    >
                        <View className="bg-white rounded-t-3xl p-6">
                            <View className="flex-row justify-between items-center mb-4">
                                <TouchableOpacity
                                    onPress={() => setShowModal(false)}
                                >
                                    <Image
                                        source={icons.close}
                                        className="size-6"
                                        tintColor="#000"
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                <Text className="text-black-300 text-xl font-600 ">
                                    {title}
                                </Text>
                            </View>
                            <FlatList
                                data={options}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        className={`p-4 rounded-xl mb-2 ${
                                            value?.id === item.id
                                                ? "bg-primary-300"
                                                : "bg-gray-100"
                                        }`}
                                        onPress={() => {
                                            onChange(item);
                                            setShowModal(false);
                                        }}
                                    >
                                        <Text
                                            className={`text-lg font-500  ${
                                                value?.id === item.id
                                                    ? "text-white"
                                                    : "text-black-300"
                                            }`}
                                        >
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </>
    );
};

export default Select;
