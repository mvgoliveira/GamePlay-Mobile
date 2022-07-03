import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    header: {
        width: "100%",
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
    },

    content: {
        marginTop: 42
    },

    listHeader: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },

    listHeaderTitle: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18
    },

    listHeaderSubtitle: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13
    },

    matches: {
        marginTop: 24,
        marginLeft: 24,
        
    }
})