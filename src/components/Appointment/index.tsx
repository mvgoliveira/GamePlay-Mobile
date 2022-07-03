import { View, TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import PlayerSVG from "../../assets/player.svg"
import CalendarSVG from "../../assets/calendar.svg"

export type TGuildProps = {
    id: string;
    name: string;
    icon: null | string,
    owner: boolean;
}

export type TAppointmentProps = {
    id: string;
    guild: TGuildProps;
    category: string;
    date: string;
    description: string;
}

type TProps = TouchableOpacityProps & {
    data: TAppointmentProps;
}

export function Appointment({data, ...rest}: TProps) {
    const [category] = categories.filter(item => item.id === data.category);
    const { primary, on } = theme.colors;

    return(
        <TouchableOpacity activeOpacity={0.85} style={styles.container} {...rest}>
            <View style={styles.container}>
                <GuildIcon />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                           {data.guild.name} 
                        </Text>

                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSVG/>

                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>
                    
                        <View style={styles.playersInfo}>
                            <PlayerSVG fill={data.guild.owner ? primary : on}/>

                            <Text style={[
                                styles.player, { color: data.guild.owner ? primary : on}
                            ]}>
                                {data.guild.owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>    
    );
}