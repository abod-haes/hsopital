import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constant/icons";
import { images } from "@/constant/images";
import { useStore } from "@/store/useStore";

interface Appointment {
    id: number;
    hospitalName: string;
    section: string;
    service: string;
    time: string;
    date: string;
    remainingTime: string;
    image: any;
}

const Appointment = () => {
    const { selectedSection, selectedServiceType } = useStore();
    const [appointments, setAppointments] = useState<Appointment[]>([
        {
            id: 1,
            hospitalName: "مستشفى الشام التخصصي",
            section: "عيادة القلب",
            service: "فحص",
            time: "10:00",
            date: "2024-03-20",
            remainingTime: "2 ساعة و 30 دقيقة",
            image: images.house,
        },
        {
            id: 2,
            hospitalName: "مستشفى دار الشفاء",
            section: "عيادة العيون",
            service: "فحص",
            time: "14:00",
            date: "2024-03-21",
            remainingTime: "1 يوم و 6 ساعات",
            image: images.house,
        },
    ]);

    const handleDeleteAppointment = (id: number) => {
        Alert.alert(
            "تأكيد الحذف",
            "هل أنت متأكد من حذف هذا الحجز؟",
            [
                {
                    text: "إلغاء",
                    style: "cancel",
                },
                {
                    text: "حذف",
                    onPress: () => {
                        setAppointments(
                            appointments.filter((app) => app.id !== id)
                        );
                    },
                    style: "destructive",
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <SafeAreaView
            className="flex-1 bg-gray-50"
            style={{ direction: "rtl" }}
        >
            <View className="bg-white p-4 border-b border-gray-200">
                <Text className="text-2xl font-600 text-black-300 text-right">
                    حجوزاتي
                </Text>
            </View>

            <ScrollView className="flex-1">
                {appointments.length === 0 ? (
                    <View className="flex-1 justify-center items-center p-4 mt-20">
                        <View className="bg-white p-8 rounded-2xl shadow-sm items-center">
                            <Image
                                source={icons.appointment}
                                className="size-32 mb-6"
                                tintColor="#666"
                            />
                            <Text className="text-gray-600 text-lg text-center mb-2">
                                لا توجد حجوزات حالياً
                            </Text>
                            <Text className="text-gray-500 text-center">
                                قم بحجز موعد جديد من خلال المستشفيات المتاحة
                            </Text>
                        </View>
                    </View>
                ) : (
                    <View className="p-4">
                        {appointments.map((appointment) => (
                            <View
                                key={appointment.id}
                                className="bg-white rounded-2xl mb-4 shadow-sm overflow-hidden"
                            >
                                <View className="relative">
                                    <Image
                                        source={appointment.image}
                                        className="w-full h-40"
                                        resizeMode="cover"
                                    />
                                    <TouchableOpacity
                                        onPress={() =>
                                            handleDeleteAppointment(
                                                appointment.id
                                            )
                                        }
                                        className="absolute top-3 left-3 bg-white/90 p-1.5 rounded-lg"
                                    >
                                        <Image
                                            source={icons.deleteIcon}
                                            className="size-3"
                                            tintColor="#DC2626"
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View className="p-5">
                                    <Text className="text-xl font-600 text-black-300  text-right">
                                        {appointment.hospitalName}
                                    </Text>
                                    <View className="mt-3 bg-primary-50  mb-3  pb-3 rounded-lg flex flex-row justify-end">
                                        <View className="flex-row-reverse items-center">
                                            <Text className="text-primary-300 text-sm font-500 mr-2">
                                                متبقي:{" "}
                                                {appointment.remainingTime}
                                            </Text>
                                            <Image
                                                source={icons.appointment}
                                                className="size-4"
                                                tintColor="#2E7D32"
                                            />
                                        </View>
                                    </View>
                                    <View className="gap-3 flex-row-reverse">
                                        <View className="flex-row justify-end items-center bg-gray-50 p-3 rounded-xl flex-1">
                                            <Text className="text-gray-700 mr-3 font-500">
                                                {appointment.section}
                                            </Text>
                                            <Image
                                                source={icons.location}
                                                className="size-5"
                                                tintColor="#666"
                                            />
                                        </View>

                                        <View className="flex-row justify-end items-center bg-gray-50 p-3 rounded-xl flex-1">
                                            <Text className="text-gray-700 mr-3 font-500">
                                                {appointment.service}
                                            </Text>
                                            <Image
                                                source={icons.appointment}
                                                className="size-5"
                                                tintColor="#666"
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Appointment;
