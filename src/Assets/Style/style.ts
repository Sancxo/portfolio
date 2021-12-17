import { DefaultColors, DefaultFonts } from 'styled-components';
import './fonts.css';

const colours: DefaultColors = {
        white: '#F8F8FF',
        black: '#161616',
        futureBlue: '#15abbe',
        neonBlue: '#04d9ff',
        neonFuchsia: '#fe4164',
};

const fonts: DefaultFonts = {
        regular: '"Fira Sans", sans-serif',
        pixel: '"Bungee Shade", cursive',
        pixelFlat: '"Bungee", cursive',
        pixelInline: '"Bungee Inline", cursive',
        pixelOutline: '"Bungee Outline", cursive',
        pixelHairline: '"Bungee Hairline", cursive'
}

const sizes = {
        headerHeight: '5em'
}

export {colours, fonts, sizes};