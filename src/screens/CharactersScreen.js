import Recat, {useEffect, useState} from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Dimensions } from 'react-native';
import axios from '../utils/axios';
import constants from '../utils/constants';
import Character from '../components/Character';

const {width, height} = Dimensions.get('screen');
const imageWidth = 130;
const imageMargin = imageWidth + 25;
const imageHeight = 200;

export const CharactersScreen = ({navigation, route}) =>{
    const {character} = route.params;

    const [setcharacter, setCharacter] = useState([]);

    useEffect(() => {
        axios
            .get(`characters/${character.id}/credits?api_key${constants.API_KEY}`)
            
            .then((res) => {
                setCharacter(res.data.setcharacter);
           
    })
    .catch((err) => console.log(err));
},[setCharacter]);


useEffect(() =>{
    navigation.setOptions({
        headerLeft: (props) => {
            return(
                <View></View>
            )
        }
    })
})
}