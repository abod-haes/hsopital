import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constant/icons";
import { Image, Text, View } from "react-native";

interface TabProps {
    focused: boolean;
    icon: any;
    title: string;
}

const Tab = ({ focused, icon, title }: TabProps) => {
    return (
        <View className="mt-2 flex-1 flex flex-col items-center">
            <Image
                source={icon}
                tintColor={focused ? "#2E7D32" : "#666876"}
                className="size-5"
                resizeMode="contain"
            />
            <Text
                className={`text-sm font-500 w-full text-center ${
                    focused ? "text-primary-300" : "text-black-200"
                }`}
            >
                {title}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    position: "absolute",
                    borderTopColor: "#2E7D321A",
                    borderTopWidth: 1,
                    minHeight: 65,
                    display: "flex",
                },
            }}
        >
            <Tabs.Screen
                name="home/index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Tab
                            title="الرئيسية"
                            focused={focused}
                            icon={icons.home}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="appointment/index"
                options={{
                    title: "Appointment ",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Tab
                            title="الحجوزات"
                            focused={focused}
                            icon={icons.appointment}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile/index"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Tab
                            title="حسابي"
                            focused={focused}
                            icon={icons.user}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
