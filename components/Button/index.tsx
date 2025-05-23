import { TouchableOpacity, Text, Image } from "react-native";
import { icons } from "@/constant/icons";

interface ButtonProps {
    variant?: "primary" | "emergency";
    label: string;
    onPress: () => void;
    showArrow?: boolean;
    className?: string;
    disabled?: boolean;
}

const Button = ({
    variant = "primary",
    label,
    onPress,
    showArrow = true,
    className = "",
    disabled = false,
}: ButtonProps) => {
    const getBackgroundColor = () => {
        if (disabled) return "bg-black-100";
        return variant === "primary" ? "bg-primary-300" : "bg-danger";
    };

    return (
        <TouchableOpacity
            className={`${getBackgroundColor()} rounded-xl py-4 px-6 flex-row justify-center items-center ${className}`}
            onPress={onPress}
            disabled={disabled}
        >
            {showArrow && (
                <Image
                    source={icons.arrow}
                    className="size-5 ml-2"
                    tintColor="#fff"
                />
            )}
            <Text className="text-white text-lg font-600 text-center">
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
