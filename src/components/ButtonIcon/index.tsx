import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

type IProps = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest } : IProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.85} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}