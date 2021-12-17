// Thanks to Matt Gross for his glitch art animation walkthrough in pure CSS and his clip-path generator:
// Cyberpunk-style Glitch walkthrough: https://codepen.io/mattgrosswork/pen/VwprebG
// Randomly generated clip-path : https://codepen.io/mattgrosswork/pen/VwprebG

import keyframesGenerator from "./keyframes-generator";
import { blurGenerator, colorGenerator, fontGenerator, opacityGenerator, pathGenerator, positionGenerator } from "./properties-generators";

export const glitchAnimation = (prop: string, sign?: string): any => {
    let [keyframes, keyframesNone]: [number[], number[]] = keyframesGenerator(prop);

    switch (prop) {
        case 'path/opac':
            const pathCode: string[] = [], opacityCode: string[] = [];

            for (let i = 0; i < keyframes.length; i++) {
                pathCode.push(`${keyframes[i]}% { clip-path: polygon(${pathGenerator()}); }`);
                opacityCode.push(`${keyframes[i]}% { opacity: ${opacityGenerator()}; }`);
            }
            for (let i = 0; i < keyframesNone.length; i++) {
                pathCode.push(`${keyframesNone[i]}% { clip-path: none; }`);
                opacityCode.push(`${keyframesNone[i]}% { opacity: 0 }`);
            }

            // We return a list of stringified lists
            return [`${pathCode.join('\n')}`, `${opacityCode.join('\n')}`];
        
        case 'position':
            const positionCode: string[] = [];

            for (let i = 0; i < keyframes.length; i++) {
                const [top, left]: string[] = positionGenerator(String(sign));
                positionCode.push(`${keyframes[i]}% { top: ${top}}; left: ${left}} }`);
            }
            // We return a stringified list
            return `${positionCode.join('\n')}`;

        case 'font':
            const fontCode: string[] = [];

            for (let i = 0; i < keyframes.length; i++) {
                fontCode.push(`${keyframes[i]}% { 
                    font-family: ${fontGenerator()}; 
                    color: ${colorGenerator()}; 
                    filter: blur(${blurGenerator()}em); 
                }`);                
            }
            // We return a stringified list
            return `${fontCode.join('\n')}`;

        default:
            throw new Error(`CSS property "${prop}" is not handled by this glitch animation generator library. 
            \nPlease look at glitchAnimation function to find another one.`);
    }
}

// WIP
// This function allows to refresh the animations parameters by calling again the function after a certain time.
// 'function' param should be a function handled by generativeCodeAnimation library.
// 'interval' is a number of seconds (ex: 1 for 1s or 0.75 for 750ms).
export const foreverNew = (func: any, interval: number = 60): string => {
    let code: any = setInterval(func(), interval * 1000);

    return `${code}`;
}