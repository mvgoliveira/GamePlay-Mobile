import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { 
    Image,
    Text, 
    View 
} from "react-native";

import { styles } from "./styles";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            
            <Image source={IllustrationImg} style={styles.image} resizeMode="stretch"/>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize{`\n`}
                    suas jogatinas{`\n`}
                    facilmente
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon title="Entrar com discord"/>
            </View>           
        </View>
    );
}