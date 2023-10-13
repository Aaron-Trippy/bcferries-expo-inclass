import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const COLOURS = {
    // base colors
    blue: '#0000FF',
    red: '#FF0000',
};

const SIZES = {
    small: 12,
    medium: 16,
    large: 20,
    xxLarge: 44,
    height,
    width
};

export { COLOURS, SIZES };