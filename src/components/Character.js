import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import constants from '../utils/constants';

const imageWidth = 99;
const imageMargin = imageWidth + 20;
const imageHeight = 133;
const cardTop = imageHeight / 2 - 10;

const Character = ({ character, navigation }) => {
    const {name, gender, race, realm} = character;

    const load = () =>{
        navigation.navigate(constants.SCREEN.HOME, {character});
    };

    return (
        <Pressable style={styles.card} onPress={load}>
            <Image
                resizeMode='cover'
                style={styles.imgHS}
                source={{
                    uri: `${image}`,
                }}
            />
            <View style={{flex:1, marginLeft: imageMargin}}>
                <View style={styles.nameContainer}>
                <Text numberOfLines={1} style={styles.name}>
						{name}
					</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card:{
        backgroundColor: constants.COLORS.WHITE,
        borderRadius: 20
    },
    imgHS:{
        width: imageWidth,
        height: imageHeight,
        borderRadius: 16,
    },
    nameContainer: {
        justifyContent: 'space-between'
    },
    name: {
        color: constants.COLORS.RED,
        marginRight: 12
    }
});

export default Character;