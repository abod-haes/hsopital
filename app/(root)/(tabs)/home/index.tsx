import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    FlatList,
    Image,
    Text,
    View,
    TouchableOpacity,
    Modal,
    Keyboard,
} from "react-native";
import { hospitals, locations } from "@/constant/const";
import Card from "@/components/cards/card";
import Search from "@/components/search/search";
import { Link } from "expo-router";
import { images } from "@/constant/images";
import { icons } from "@/constant/icons";
import { Location } from "@/types/types";
import { useStore } from "@/store/useStore";
import Select from "@/components/select/CustomSelect";
import { useRouter } from "expo-router";

const Home = () => {
    const [search, setSearch] = useState<string>("");
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(
        null
    );
    const [showLocationModal, setShowLocationModal] = useState(false);
    const {
        serviceTypes: storeServiceTypes,
        sections,
        selectedSection,
        selectedServiceType,
        setSelectedSection,
        setSelectedServiceType,
    } = useStore();
    const router = useRouter();

    const handleSearchSubmit = (text: string) => {
        setSearch(text);
        Keyboard.dismiss();
    };

    const handleLocationSelect = (location: Location) => {
        setSelectedLocation(location);
        setShowLocationModal(false);
    };

    const filteredHospitals = hospitals.filter((hospital) => {
        const matchesSearch = hospital.name
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesLocation =
            !selectedLocation || hospital.location === selectedLocation.name;
        return matchesSearch && matchesLocation;
    });
    return (
        <SafeAreaView className="h-full bg-white">
            <View className="flex-1">
                <FlatList
                    data={filteredHospitals}
                    numColumns={2}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="none"
                    ListHeaderComponent={() => (
                        <View className="py-2.5 px-5">
                            <View className="flex flex-row justify-between items-center mb-5">
                                <Link href={"/profile"} className="size-12">
                                    <Image
                                        source={images.avatar}
                                        className="w-full h-full"
                                        resizeMode="contain"
                                    />
                                </Link>
                                <Text className=" font-600 text-xl text-black-300">
                                    المستشفيات المتاحة
                                </Text>
                            </View>
                            <View className="flex-row items-center gap-2 mb-4">
                                <TouchableOpacity
                                    className="bg-primary-300 px-4 py-2.5 rounded-full flex-row items-center"
                                    onPress={() => setShowLocationModal(true)}
                                >
                                    <Text className="text-white ml-2">
                                        {selectedLocation?.name || "الموقع"}
                                    </Text>
                                    <Image
                                        source={icons.location}
                                        className="size-5"
                                        tintColor="#fff"
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                <View className="flex-1">
                                    <Search
                                        value={search}
                                        onChangeText={() => {}}
                                        onSubmit={handleSearchSubmit}
                                    />
                                </View>
                            </View>
                            <View className="flex-row items-center gap-2 mb-4">
                                <Select
                                    value={selectedServiceType}
                                    options={sections}
                                    placeholder="اختر الخدمة"
                                    onChange={setSelectedServiceType}
                                    title="اختر الخدمة"
                                />
                                <Select
                                    value={selectedSection}
                                    options={storeServiceTypes}
                                    placeholder="اختر القسم"
                                    onChange={setSelectedSection}
                                    title="اختر القسم"
                                />
                            </View>
                        </View>
                    )}
                    renderItem={({ item }) => (
                        <Card
                            cards={item}
                            onPress={() => {
                                router.push({
                                    pathname: "/(root)/hospital/[id]",
                                    params: { id: item.id },
                                });
                            }}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerClassName="pb-24"
                    columnWrapperClassName="flex gap-5 py-2.5 px-5"
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <Modal
                visible={showLocationModal}
                transparent
                animationType="slide"
                onRequestClose={() => setShowLocationModal(false)}
            >
                <View className="flex-1 bg-black/50 justify-end">
                    <View className="bg-white rounded-t-3xl p-6">
                        <View className="flex-row justify-between items-center mb-4">
                            <TouchableOpacity
                                onPress={() => setShowLocationModal(false)}
                            >
                                <Image
                                    source={icons.close}
                                    className="size-6"
                                    tintColor="#000"
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <Text className="text-black-300 text-xl font-600 ">
                                اختر المحافظة
                            </Text>
                        </View>
                        <FlatList
                            data={locations}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    className={`p-4 rounded-xl mb-2 ${
                                        selectedLocation?.id === item.id
                                            ? "bg-primary-300"
                                            : "bg-gray-100"
                                    }`}
                                    onPress={() => handleLocationSelect(item)}
                                >
                                    <Text
                                        className={`text-lg font-500  ${
                                            selectedLocation?.id === item.id
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
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default Home;
