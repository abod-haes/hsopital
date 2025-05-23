import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert,
    ScrollView,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/Button";
import { useState } from "react";

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        if (!email.trim()) {
            Alert.alert("خطأ", "الرجاء إدخال البريد الإلكتروني");
            return false;
        }
        if (!password.trim()) {
            Alert.alert("خطأ", "الرجاء إدخال كلمة المرور");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            Alert.alert("خطأ", "الرجاء إدخال بريد إلكتروني صحيح");
            return false;
        }
        return true;
    };

    const handleSignIn = async () => {
        if (!validateForm()) return;

        try {
            setIsLoading(true);
            // TODO: Implement actual sign in logic here
            // For now, we'll just simulate a delay
            await new Promise((resolve) => setTimeout(resolve, 1000));
            router.push("/home");
        } catch (error) {
            Alert.alert("خطأ", "حدث خطأ أثناء تسجيل الدخول");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <LinearGradient
                    colors={["#2E7D32", "#1B5E20"]}
                    className="flex-1 justify-center"
                >
                    <View className="px-10">
                        <View className="flex-1 justify-center gap-4">
                            <Text className="text-center text-3xl font-900 text-white mb-6">
                                تسجيل الدخول
                            </Text>

                            <View className="bg-white/20 p-6 rounded-xl">
                                <View className="mb-4">
                                    <Text className="text-white text-lg mb-2">
                                        البريد الإلكتروني
                                    </Text>
                                    <TextInput
                                        className="bg-white/20 rounded-xl px-4 py-3 text-white"
                                        placeholder="أدخل بريدك الإلكتروني"
                                        placeholderTextColor="rgba(255,255,255,0.6)"
                                        value={email}
                                        onChangeText={setEmail}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                    />
                                </View>

                                <View className="mb-6">
                                    <Text className="text-white text-lg mb-2">
                                        كلمة المرور
                                    </Text>
                                    <TextInput
                                        className="bg-white/20 rounded-xl px-4 py-3 text-white"
                                        placeholder="أدخل كلمة المرور"
                                        placeholderTextColor="rgba(255,255,255,0.6)"
                                        secureTextEntry
                                        value={password}
                                        onChangeText={setPassword}
                                        autoCapitalize="none"
                                        autoComplete="password"
                                    />
                                </View>

                                <Button
                                    variant="primary"
                                    label="تسجيل الدخول"
                                    onPress={handleSignIn}
                                    showArrow={false}
                                />
                            </View>

                            <View className="flex-row justify-center items-center gap-2">
                                <Text className="text-white">
                                    ليس لديك حساب؟
                                </Text>
                                <Link
                                    href="/(auth)/sign-up"
                                    className="text-white font-600"
                                >
                                    إنشاء حساب
                                </Link>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
