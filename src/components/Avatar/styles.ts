import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: 59,
        height: 59,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 22
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 8
    }
})