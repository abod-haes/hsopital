import { Link } from "expo-router";
import { Text, View } from "react-native";

const Profile = () => {
    return (
        <View>
            <Link href="/(auth)/sign-in" className="pt-10">
                سيب
            </Link>
        </View>
    );
};

export default Profile;
