import 'styled-components';

declare module 'styled-components' {
    export interface DefaultColors {
        white: string;
        black: string;
        futureBlue: string,
        neonBlue: string,
        neonFuchsia: string
    };

    export interface DefaultFonts {
          regular: string;
          pixel: string;
          pixelFlat: string;
          pixelInline: string;
          pixelOutline: string;
          pixelHairline: string;
    };
}