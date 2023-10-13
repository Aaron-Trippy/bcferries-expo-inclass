import { StyleSheet } from "react-native";
import { COLOURS, SIZES } from "../constants/";

const stylesHome = StyleSheet.create({
    container: {
        width: '100%',
    },
    welcomeText: {
        fontWeight: 'bold',
        fontSize: SIZES.xxLarge,
        color: COLOURS.blue,
    },
    buttonArea: {
        width: SIZES.width,
        height: SIZES.height,
        backgroundColor: COLOURS.blue,
    }
});

export default stylesHome;