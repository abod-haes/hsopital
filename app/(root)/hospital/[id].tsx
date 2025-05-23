import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    doctors,
    hospitals,
    hospitalSections,
    serviceTypes,
} from "@/constant/const";
import { icons } from "@/constant/icons";
import { images } from "@/constant/images";
import Select from "@/components/select/CustomSelect";
import { Doctor } from "@/types/types";
import { useStore } from "@/store/useStore";

export default function HospitalDetails() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const {
        selectedSection,
        selectedServiceType,
        setSelectedSection,
        setSelectedServiceType,
    } = useStore();

    const hospital = hospitals.find((h) => h.id.toString() === id);

    if (!hospital) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text>المشفى غير موجود</Text>
            </View>
        );
    }

    const handleBookAppointment = () => {
        if (!selectedTime) {
            return;
        }
        router.push("/(root)/(tabs)/appointment");
    };

    const timeOptions = [
        { id: 1, name: "09:00" },
        { id: 2, name: "10:00" },
        { id: 3, name: "11:00" },
        { id: 4, name: "12:00" },
        { id: 5, name: "13:00" },
        { id: 6, name: "14:00" },
        { id: 7, name: "15:00" },
        { id: 8, name: "16:00" },
    ];

    return (
        <SafeAreaView className="flex-1 bg-white" style={{ direction: "rtl" }}>
            <ScrollView className="flex-1">
                <View className="relative">
                    <Image
                        source={images.house}
                        className="w-full h-64"
                        resizeMode="cover"
                    />
                    <TouchableOpacity
                        className="absolute top-4 left-4 bg-white/80 p-2 rounded-full"
                        onPress={() => router.back()}
                    >
                        <Image
                            source={icons.close}
                            className="size-6"
                            tintColor="#000"
                        />
                    </TouchableOpacity>
                </View>

                <View className="p-4">
                    <Text className="text-2xl font-600 text-black-300 mb-2 text-right">
                        {hospital.name}
                    </Text>
                    <View className="flex w-full justify-between items-center flex-row-reverse">
                        <View className="flex-row items-center mb-4 justify-end">
                            <Text className="text-gray-600 ml-2">
                                {hospital.location}
                            </Text>
                            <Image
                                source={icons.location}
                                className="size-5"
                                tintColor="#666"
                            />
                        </View>

                        <View className="flex-row items-center justify-between mb-6">
                            <View className="flex-row items-center">
                                <Text className="text-gray-600 ml-2">
                                    {doctors.length} أطباء
                                </Text>
                                <Image
                                    source={icons.user}
                                    className="size-4"
                                    tintColor="#666"
                                />
                            </View>
                        </View>
                    </View>

                    {/* الأقسام المتاحة */}
                    <View className="mb-6">
                        <Text className="text-lg font-600 text-black-300 mb-4 text-right">
                            الأقسام المتاحة
                        </Text>
                        <View className="flex-row flex-wrap gap-3 justify-end">
                            {hospitalSections.map((section) => (
                                <TouchableOpacity
                                    key={section.id}
                                    className={`px-4 py-2 rounded-full flex-row items-center ${
                                        selectedSection?.id === section.id
                                            ? "bg-primary-300"
                                            : "bg-gray-100"
                                    }`}
                                    onPress={() => setSelectedSection(section)}
                                >
                                    <Text
                                        className={`text-right ${
                                            selectedSection?.id === section.id
                                                ? "text-white"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {section.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* الخدمات المتاحة */}
                    <View className="mb-6">
                        <Text className="text-lg font-600 text-black-300 mb-4 text-right">
                            الخدمات المتاحة
                        </Text>
                        <View className="flex-row flex-wrap gap-3 justify-end">
                            {serviceTypes.map((service) => (
                                <TouchableOpacity
                                    key={service.id}
                                    className={`px-4 py-2 rounded-full flex-row items-center ${
                                        selectedServiceType?.id === service.id
                                            ? "bg-primary-300"
                                            : "bg-gray-100"
                                    }`}
                                    onPress={() =>
                                        setSelectedServiceType(service)
                                    }
                                >
                                    <Text
                                        className={`text-right ${
                                            selectedServiceType?.id ===
                                            service.id
                                                ? "text-white"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {service.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* معلومات الاتصال */}
                    <View className="mb-6">
                        <Text className="text-lg font-600 text-black-300 mb-4 text-right">
                            معلومات الاتصال
                        </Text>
                        <View className="bg-gray-100 p-4 rounded-xl">
                            <View className="flex-row items-center mb-3 justify-end">
                                <Text className="text-gray-600 ml-3">
                                    0123456789
                                </Text>
                                <Image
                                    source={icons.phone}
                                    className="size-5"
                                    tintColor="#2E7D32"
                                />
                            </View>
                        </View>
                    </View>

                    {/* الأوقات المتاحة */}
                    <View className="mb-6">
                        <Text className="text-lg font-600 text-black-300 mb-4 text-right">
                            الأوقات المتاحة
                        </Text>
                        <View className="flex-row flex-wrap gap-3 justify-end">
                            {timeOptions.map((time) => (
                                <TouchableOpacity
                                    key={time.id}
                                    className={`px-4 py-2 rounded-full flex-row items-center ${
                                        selectedTime === time.name
                                            ? "bg-primary-300"
                                            : "bg-gray-100"
                                    }`}
                                    onPress={() => setSelectedTime(time.name)}
                                >
                                    <Text
                                        className={`text-right ${
                                            selectedTime === time.name
                                                ? "text-white"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {time.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View className="p-4 border-t border-gray-200">
                <TouchableOpacity
                    className={`w-full py-4 rounded-xl flex-row justify-center items-center ${
                        !selectedTime ? "bg-gray-200" : "bg-primary-300"
                    }`}
                    onPress={handleBookAppointment}
                    disabled={!selectedTime}
                >
                    <Text
                        className={`text-lg font-600 ${
                            !selectedTime ? "text-gray-500" : "text-white"
                        }`}
                    >
                        حجز الموعد
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
