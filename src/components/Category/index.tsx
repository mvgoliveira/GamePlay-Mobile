import { LinearGradient } from "expo-linear-gradient";
import { View, TouchableOpacity, TouchableOpacityProps, Image, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type TProps = TouchableOpacityProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
}

export function Category({title, icon: Icon, checked = false, ...rest}: TProps) {
    const {secondary80, secondary100} = theme.colors;

    return(
        <TouchableOpacity activeOpacity={0.85} style={styles.container} {...rest}>
            <LinearGradient style={styles.container} colors={[secondary80, secondary100]}>
                <View style={[ styles.content, { 
                        opacity: checked ? 1 : 0.4, 
                        borderColor: checked ? theme.colors.secondary30 : "", 
                        borderWidth: checked ? 1 : 0
                    } ]}
                >
                    <View style={checked ? styles.checked : styles.check}>
                    </View>
                    
                    <Icon width={48} height={48}/>

                    <Text style={styles.title}>
                        { title }
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}