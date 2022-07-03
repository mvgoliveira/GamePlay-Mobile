import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { Appointment } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export function Home() {
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleSelectCategory(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>

            <View>
                <CategorySelect categorySelected={category} setCategory={handleSelectCategory}/>
            </View>

            <View style={styles.content}>
                <View style={styles.listHeader}>
                    <Text style={styles.listHeaderTitle}>
                        Partidas Agendadas
                    </Text>

                    <Text style={styles.listHeaderSubtitle}>
                        Total 6
                    </Text>
                </View>

                <FlatList 
                    style={styles.matches}
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Appointment data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider/>}
                />
            </View>
        </View>
    );
}