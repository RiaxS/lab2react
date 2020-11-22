import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import axios from '../utils/axios';
import constants from '../utils/constants';
import Cocktail from '../components/Cocktail';

export const HomeScreen = ({ navigation, route }) => {
	const [cocktails, setCocktails] = React.useState([]);

	useEffect(() => {
		axios
			.get(`filter.php?a=Alcoholic`)
			.then((res) => {
                setCocktails(res.data.drinks);
                console.log(res.data);
			})
			.catch((err) => console.log(err));
	}, [setCocktails]);

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				data={cocktails}
				renderItem={({item}) => <Cocktail cocktail={item} navigation={navigation} />}
				keyExtractor={(item) => `${item.id}`}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: constants.COLORS.WHITE,
	},
	list: {
		
		paddingHorizontal: 25,
		paddingVertical: 30,
		
		
		
	},
	title:{
		color: constants.COLORS.WHITE,
	}
});