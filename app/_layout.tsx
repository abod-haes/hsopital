import { SplashScreen, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { I18nManager, Platform } from "react-native";
import { VariableProvider } from "@/context/use-variable";
import scalingPoints from "@/utils/vwSize";

// Force RTL at the module level
if (Platform.OS !== "web") {
    I18nManager.forceRTL(true);
    I18nManager.allowRTL(true);
}

export default function Layout() {
    const [fontsLoad] = useFonts({
        "Tajawal-ExtraLight": require("../assets/fonts/Tajawal/Tajawal-ExtraLight.ttf"),
        "Tajawal-Light": require("../assets/fonts/Tajawal/Tajawal-Light.ttf"),
        "Tajawal-Regular": require("../assets/fonts/Tajawal/Tajawal-Regular.ttf"),
        "Tajawal-Medium": require("../assets/fonts/Tajawal/Tajawal-Medium.ttf"),
        "Tajawal-ExtraBold": require("../assets/fonts/Tajawal/Tajawal-ExtraBold.ttf"),
        "Tajawal-Bold": require("../assets/fonts/Tajawal/Tajawal-Bold.ttf"),
        "Tajawal-Black": require("../assets/fonts/Tajawal/Tajawal-Black.ttf"),
    });

    useEffect(() => {
        // Ensure RTL is set on web platform
        if (Platform.OS === "web") {
            document.documentElement.dir = "rtl";
            document.documentElement.lang = "ar";
        }

        if (fontsLoad) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoad]);

    if (!fontsLoad) return null;
    return (
        <SafeAreaProvider>
            <VariableProvider variables={scalingPoints}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                        animation: "slide_from_right",
                        contentStyle: { direction: "rtl" },
                    }}
                />
            </VariableProvider>
        </SafeAreaProvider>
    );
}
