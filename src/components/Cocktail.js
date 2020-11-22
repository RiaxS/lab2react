import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import constants from '../utils/constants';

const cardTop = 133 / 2 - 10;

const Cocktail = ({ cocktail, navigation }) => {
	const {strDrink, strCategory, strGlass, strInstructions, strDrinkThumb} = cocktail;

	const loadCocktail = () => {
		navigation.navigate(constants.SCREEN.COCKTAIL, {cocktail});
	};

	return (
		<Pressable style={styles.card} onPress={loadCocktail}>
			<Image
				resizeMode="contain"
				style={styles.img}
				source={{
					uri: `${strDrinkThumb}`,
				}}
			/>
			<View style={{ flex: 1, marginLeft: 115 }}>
				<View style={styles.titleContainer}>
					<Text numberOfLines={3} style={styles.title}>
						{strDrink}
					</Text>
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: constants.COLORS.LIGHT,
		marginTop: cardTop,
		paddingHorizontal: 20,
		paddingBottom: 20,
		paddingTop: 30,
		borderRadius: 20,
		flexDirection: 'row',
		alignItems: 'flex-end',
		position: 'relative',
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	title: {
		color: constants.COLORS.TEXT_COLOR,
		fontWeight: 'bold',
		flexGrow: 1,
		flexWrap: 'wrap',
		marginRight: 12,
		fontSize: 16,
	},
	img: {
		width: 110,
		height: 110,
		borderRadius: 16,
		position: 'absolute',
		bottom: 20,
		left: 20,
	},
});

export default Cocktail;