import { ScrollView } from "react-native";
import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

type TProps = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({categorySelected, setCategory}: TProps) {
    return(
        <ScrollView 
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => 
                    <Category 
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id == categorySelected}
                        onPress={() => setCategory(category.id)}
                    />
                )
            }
        </ScrollView>
    );
}