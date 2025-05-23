import { images } from "@/constant/images";
import { useRouter } from "expo-router";
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Animated,
    Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useEffect } from "react";
import { HospitalSection, ServiceType } from "@/types/types";
import { hospitalSections, serviceTypes } from "@/constant/const";
import Button from "@/components/Button";
import { useStore } from "@/store/useStore";

export default function Index() {
    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const {
        selectedSection,
        selectedServiceType,
        setSelectedSection,
        setSelectedServiceType,
    } = useStore();

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleSectionSelect = (section: HospitalSection) => {
        setSelectedSection(section);
    };

    const handleServiceSelect = (service: ServiceType) => {
        setSelectedServiceType(service);
    };

    const handleSkip = () => {
        router.push("/home");
    };

    const handleAction = () => {
        if (selectedServiceType?.name === "اسعاف") {
            Linking.openURL("tel:911");
        } else {
            router.push("/home");
        }
    };

    return (
        <View className="flex-1 h-full">
            <View className="w-full h-[45%] absolute top-20 z-0">
                <Image
                    source={images.welcome}
                    className="w-full h-full"
                    resizeMode="cover"
                />
            </View>
            <LinearGradient
                colors={[
                    "#ffffff00",
                    "#ffffff00",
                    "#ffffff00",
                    "#2E7D32ab",
                    "#1B5E20",
                ]}
                locations={[0, 0.4, 0.2, 0.55, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                className="flex-1 h-full flex justify-end"
            >
                <View className="h-[55%] px-10 pb-10">
                    <View className="flex-1 justify-end gap-2">
                        <Animated.View style={{ opacity: fadeAnim }}>
                            <Text className="text-center text-3xl font-900 text-white">
                                مرحبا بك
                            </Text>
                        </Animated.View>

                        {!selectedSection ? (
                            <Animated.View
                                style={{ opacity: fadeAnim }}
                                className="gap-3"
                            >
                                <Text className="text-center text-lg font-500 text-white mb-2">
                                    اختر القسم
                                </Text>
                                <View className="flex-row flex-wrap justify-center gap-3">
                                    {hospitalSections.map((section) => (
                                        <TouchableOpacity
                                            key={section.id}
                                            className="bg-white/20 p-4 rounded-xl w-[45%] items-center"
                                            onPress={() =>
                                                handleSectionSelect(section)
                                            }
                                        >
                                            <Text className="text-white text-center text-lg font-600">
                                                {section.name}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </Animated.View>
                        ) : !selectedServiceType ? (
                            <Animated.View
                                style={{ opacity: fadeAnim }}
                                className="gap-4"
                            >
                                <View className="bg-white/20 p-4 rounded-xl items-center">
                                    <Text className="text-white text-xl font-600 text-center mb-2">
                                        {selectedSection.name}
                                    </Text>
                                    <Text className="text-white/80 text-center mb-4">
                                        اختر نوع الخدمة
                                    </Text>
                                    <View className="flex-row justify-center gap-3">
                                        {serviceTypes.map((service) => (
                                            <TouchableOpacity
                                                key={service.id}
                                                className="bg-white/20 px-6 py-3 rounded-full"
                                                onPress={() =>
                                                    handleServiceSelect(service)
                                                }
                                            >
                                                <Text className="text-white text-center font-500">
                                                    {service.name}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                <TouchableOpacity
                                    className="flex-row justify-center items-center gap-1.5"
                                    onPress={() => setSelectedSection(null)}
                                >
                                    <Text className="text-white text-center text-base">
                                        تغيير القسم
                                    </Text>
                                </TouchableOpacity>
                            </Animated.View>
                        ) : (
                            <Animated.View
                                style={{ opacity: fadeAnim }}
                                className="gap-4"
                            >
                                <View className="bg-white/20 p-4 rounded-xl items-center">
                                    <Text className="text-white text-xl font-600 text-center">
                                        {selectedSection.name}
                                    </Text>
                                    <Text className="text-white/80 text-center mt-1">
                                        {selectedServiceType.name}
                                    </Text>
                                </View>
                                <Button
                                    variant={
                                        selectedServiceType.name === "اسعاف"
                                            ? "emergency"
                                            : "primary"
                                    }
                                    label={
                                        selectedServiceType.name === "اسعاف"
                                            ? "اتصال"
                                            : "ابدأ"
                                    }
                                    onPress={handleAction}
                                    showArrow={
                                        selectedServiceType.name !== "اسعاف"
                                    }
                                />
                                <TouchableOpacity
                                    className="flex-row justify-center items-center gap-1.5"
                                    onPress={() => setSelectedServiceType(null)}
                                >
                                    <Text className="text-white text-center text-base">
                                        تغيير الخدمة
                                    </Text>
                                </TouchableOpacity>
                            </Animated.View>
                        )}

                        <TouchableOpacity className="mt-4" onPress={handleSkip}>
                            <Text className="text-white/60 text-center text-base">
                                تخطي
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
