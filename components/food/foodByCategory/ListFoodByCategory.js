import React from "react";
import { FlatList, View} from "react-native";
import { getFoodByCategory } from "../../../data/fakeApi";
import FoodCard from '../foodCard';


const ListFoodByCategory = (props) => {

    const categoryId = props.route.params.categoryId;

    return (
        <View style={{ backgroundColor: 'white' }}>
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={getFoodByCategory(categoryId)}
                renderItem={(item) => {
                    return <FoodCard item={item} navigation={props.navigation} />;
                  }}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    );

}
export default ListFoodByCategory;
