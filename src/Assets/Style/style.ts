import { DefaultColors, DefaultFonts } from 'styled-components';
import './fonts.css';

const colours: DefaultColors = {
        white: '#F8F8FF',
        black: '#161616',
        futureBlue: '#15abbe',
        neonBlue: '#04d9ff',
        neonFuchsia: '#fe4164',
        ultraViolet: '#6B5B95',
        galaxyBlue: '#2A4B7C'
};

const fonts: DefaultFonts = {
        regular: '"Fira Sans", sans-serif',
        code: '"Fira Code", monospace',
        pixel: '"Bungee Shade", cursive',
        pixelFlat: '"Bungee", cursive',
        pixelInline: '"Bungee Inline", cursive',
        pixelOutline: '"Bungee Outline", cursive',
        pixelHairline: '"Bungee Hairline", cursive'
}

const sizes = {
        headerHeight: '5em',
        footerHeight: '10em'
}

export {colours, fonts, sizes};