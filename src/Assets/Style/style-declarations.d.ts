import 'styled-components';

declare module 'styled-components' {
    export interface DefaultColors {
        white: string;
        black: string;
        futureBlue: string,
        neonBlue: string,
        neonGreen: string,
        neonFuchsia: string,
        ultraViolet: string,
        galaxyBlue: string
    };

    export interface DefaultFonts {
          regular: string;
          code: string;
          pixel: string;
          pixelFlat: string;
          pixelInline: string;
          pixelOutline: string;
          pixelHairline: string;
    };

    export interface DefaultSizes {
        headerHeight: string,
        footerHeight: string,
        pagePadding: string,
        pageMarginTop: string
    };

    export interface BreakPoints {
        mobile: string,
        mobileLandscape: string,
        tablet: string,
        tabletLandscape: string
    };

    export interface MediaQueries {
        mobile: string,
        mobileLandscape: string,
        tablet: string,
        tabletLandscape: string
    }

}