import React from 'react';
import { View, StyleSheet } from 'react-native';
import constants from '../utils/constants';

const Instructions = ({instructions}) => {

	return (
		<View>
			<Text style={styles.paragraph}>{instructions}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	paragraph: {
		marginTop: 25,
		fontSize: 14,
		fontWeight: '300',
		color: constants.COLORS.GRAY,
		lineHeight: 22,
	},
});

export default Instructions;