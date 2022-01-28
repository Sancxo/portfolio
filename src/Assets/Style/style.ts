import { 
        BreakPoints, 
        DefaultColors, 
        DefaultFonts, 
        DefaultSizes, 
        MediaQueries 
} from 'styled-components';
import './fonts.css';

const colours: DefaultColors = {
        white: '#F8F8FF',
        black: '#161616',
        futureBlue: '#15abbe',
        neonBlue: '#04d9ff',
        neonFuchsia: '#fe4164',
        neonGreen: '#39ff14',
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

const sizes: DefaultSizes = {
        headerHeight: '5em',
        footerHeight: '10em'
}

const breakPoints: BreakPoints = {
        mobile: '480px',
        mobileLandscape: '655px',
        tablet: '992px',
        tabletLandscape: '1535px'
}

function mediaQuery(cond: string): string {
        return `(max-width: ${cond})`;
}

const mediaQueries: MediaQueries = {
        mobile: mediaQuery(breakPoints.mobile),
        mobileLandscape: mediaQuery(breakPoints.mobileLandscape),
        tablet: mediaQuery(breakPoints.tablet),
        tabletLandscape: mediaQuery(breakPoints.tabletLandscape)
}

export {colours, fonts, sizes, mediaQueries};