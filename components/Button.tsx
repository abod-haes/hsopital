import { TouchableOpacity, Text, Image, View } from "react-native";
import { icons } from "@/constant/icons";

interface ButtonProps {
    variant?: "primary" | "emergency";
    label: string;
    onPress: () => void;
    showArrow?: boolean;
    className?: string;
    disabled?: boolean;
}

export default function Button({
    variant = "primary",
    label,
    onPress,
    showArrow = true,
    className = "",
}: ButtonProps) {
    const isEmergency = variant === "emergency";

    return (
        <TouchableOpacity
            className={`flex-row justify-center items-center gap-1.5 rounded-full py-3.5 ${
                isEmergency ? "bg-red-500" : "bg-white"
            } ${className}`}
            onPress={onPress}
        >
            <Text
                className={`text-center text-xl font-500 ${
                    isEmergency ? "text-white" : "text-primary-300"
                }`}
            >
                {label}
            </Text>
            {showArrow && !isEmergency && (
                <Image
                    source={icons.arrow}
                    className="size-3"
                    tintColor={isEmergency ? "#fff" : "#2E7D32"}
                    resizeMode="contain"
                />
            )}
        </TouchableOpacity>
    );
}
