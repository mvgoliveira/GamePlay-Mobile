import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function ButtonAdd({...rest } : TouchableOpacityProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.85} {...rest}>
            <MaterialCommunityIcons name="plus" size={24} color={theme.colors.heading} />
        </TouchableOpacity>
    );
}