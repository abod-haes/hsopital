import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Keyboard,
    ScrollView,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/Button";
import { useState } from "react";

export default function SignUp() {
    const router = useRouter();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        if (!fullName.trim()) {
            Alert.alert("خطأ", "الرجاء إدخال الاسم الكامل");
            return false;
        }
        if (!email.trim()) {
            Alert.alert("خطأ", "الرجاء إدخال البريد الإلكتروني");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            Alert.alert("خطأ", "الرجاء إدخال بريد إلكتروني صحيح");
            return false;
        }
        if (!phone.trim()) {
            Alert.alert("خطأ", "الرجاء إدخال رقم الهاتف");
            return false;
        }
        if (!/^[0-9]{10}$/.test(phone.replace(/\D/g, ""))) {
            Alert.alert("خطأ", "الرجاء إدخال رقم هاتف صحيح");
            return false;
        }
        if (!password.trim()) {
            Alert.alert("خطأ", "الرجاء إدخال كلمة المرور");
            return false;
        }
        if (password.length < 6) {
            Alert.alert("خطأ", "كلمة المرور يجب أن تكون 6 أحرف على الأقل");
            return false;
        }
        return true;
    };

    const handleSignUp = async () => {
        if (!validateForm()) return;

        try {
            setIsLoading(true);
            // TODO: Implement actual sign up logic here
            // For now, we'll just simulate a delay
            await new Promise((resolve) => setTimeout(resolve, 1000));
            router.push("/home");
        } catch (error) {
            Alert.alert("خطأ", "حدث خطأ أثناء إنشاء الحساب");
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
                                إنشاء حساب
                            </Text>

                            <View className="bg-white/20 p-6 rounded-xl">
                                <View className="mb-4">
                                    <Text className="text-white text-lg mb-2">
                                        الاسم الكامل
                                    </Text>
                                    <TextInput
                                        className="bg-white/20 rounded-xl px-4 py-3 text-white"
                                        placeholder="أدخل اسمك الكامل"
                                        placeholderTextColor="rgba(255,255,255,0.6)"
                                        value={fullName}
                                        onChangeText={setFullName}
                                        autoCapitalize="words"
                                    />
                                </View>

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

                                <View className="mb-4">
                                    <Text className="text-white text-lg mb-2">
                                        رقم الهاتف
                                    </Text>
                                    <TextInput
                                        className="bg-white/20 rounded-xl px-4 py-3 text-white"
                                        placeholder="أدخل رقم هاتفك"
                                        placeholderTextColor="rgba(255,255,255,0.6)"
                                        value={phone}
                                        onChangeText={setPhone}
                                        keyboardType="phone-pad"
                                        autoComplete="tel"
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
                                    label="إنشاء حساب"
                                    onPress={handleSignUp}
                                    showArrow={false}
                                />
                            </View>

                            <View className="flex-row justify-center items-center gap-2">
                                <Text className="text-white">
                                    لديك حساب بالفعل؟
                                </Text>
                                <Link
                                    href="/(auth)/sign-in"
                                    className="text-white font-600"
                                >
                                    تسجيل الدخول
                                </Link>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
