import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Pressable, Image, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from '../utils/axios';
import constants from '../utils/constants';
import Instructions from '../components/Instructions';

const { width, height } = Dimensions.get('screen');

const imageWidth = 130;
const imageMargin = imageWidth + 25;

const imageHeight = 200;

export const CocktailsScreen = ({ navigation, route }) => {
	const {cocktail} = route.params;

	const [strInstructions, setStrInstructions] = useState();

	useEffect(() => {
		axios
			.get(`lookup.php?i=${cocktail.idDrink}`)
			.then((res) => {
				setStrInstructions(res.data.drinks[0].strInstructions);
				console.log(res.data.drinks[0].strInstructions);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		navigation.setOptions({
			headerLeft: (props) => {
				return (
					<View style={styles.containerButtonIcon}>
						<MaterialCommunityIcons
							name="keyboard-backspace"
							size={24}
							color={constants.COLORS.BROWN}
							{...props}
						/>
					</View>
				);
			},
			headerRight: () => {
				return (
					<View style={styles.containerButtonIcon}>
						<MaterialCommunityIcons
							name="dots-horizontal"
							size={24}
							color={constants.COLORS.WHITE}
						/>
					</View>
				);
			},
		});
	});

	return (
		<ScrollView style={styles.container} stickyHeaderIndices={[0]}>
			<View style={styles.content}>
				<Image
					resizeMode="contain"
					style={styles.poster}
					source={{
						uri: `${cocktail.strDrinkThumb}`,
					}}
				/>
				<View style={{ flex: 1, marginLeft: imageMargin }}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>{cocktail.strDrink}</Text>
					</View>
				</View>
			</View>
			<View style={styles.content2}>
				<View style={styles.secondaryContent}>
					<Text style={styles.title}>Instructions</Text>
					<Text style={styles.paragraph}>{strInstructions}</Text>
				</View>
			</View>
			<View style={{ height: 500 }} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: constants.COLORS.GREEN,
		paddingTop: 100,
	},
	cover: {
		width: null,
		height: null,
	},
	backdrop: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: constants.COLORS.PRIMARY,
		opacity: 0.3,
		zIndex: 9,
	},
	content: {
		position: 'relative',
		width,
		padding: 25,
		backgroundColor: constants.COLORS.LIGHT,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		top: -25,
		zIndex: 11,
	},
	content2: {
		position: 'relative',
		width,
		paddingHorizontal: 25,
		backgroundColor: constants.COLORS.LIGHT,
		zIndex: 10,
		top: -25,
	},
	secondaryContent: {
		marginTop: 50,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	title: {
		color: constants.COLORS.WHITE,
		fontWeight: 'bold',
		flexGrow: 1,
		flexWrap: 'wrap',
		marginRight: 12,
		fontSize: 20,
	},
	poster: {
		position: 'absolute',
		width: imageWidth,
		height: imageHeight,
		borderRadius: 16,
		top: -50,
		left: 25,
	},
	paragraph: {
		marginTop: 25,
		fontSize: 16,
		fontWeight: '300',
		color: constants.COLORS.WHITE,
		lineHeight: 22,
	},
	containerButtonIcon: {
		backgroundColor: constants.COLORS.PRIMARY2,
		borderRadius: 20,
		width: 36,
		height: 36,
		marginHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
});