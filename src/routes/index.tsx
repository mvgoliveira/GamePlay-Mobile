import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Background } from "../components/Background";
import { theme } from "../global/styles/theme";

export function Routes() {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent'
        },
    }

    return (
        <NavigationContainer theme={navTheme}>
            <AuthRoutes />
        </NavigationContainer>
    )
}