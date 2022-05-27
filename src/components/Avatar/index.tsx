import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Image } from "react-native";

interface IProps {
    urlImage: string;
}

export function Avatar({ urlImage }: IProps) {
    const {secondary80, secondary100} = theme.colors;

    return (
        <LinearGradient style={styles.container} colors={[secondary80, secondary100]}>
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
    );
}