import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityBase, View } from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

interface IProps {
    title: string;
}

export function ButtonIcon({ title } : IProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.85}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}