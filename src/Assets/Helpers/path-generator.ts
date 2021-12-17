// Thanks to Matt Gross for his glitch art animation walkthrough in pure CSS and his clip-path generator:
// Cyberpunk-style Glitch walkthrough: https://codepen.io/mattgrosswork/pen/VwprebG
// Randomly generated clip-path : https://codepen.io/mattgrosswork/pen/VwprebG

import { colours, fonts } from "../Style/style";

const keyframesGenerator = (prop: string): [number[], number[]] => {
    let rand: number;
    const keyframes: number[] = [], keyframesNone: number[] = [];

    // We randomly generate the amount of steps in the keyframes:
    switch (prop) {
        case 'path/opac':
            // random number between 5 and 15
            rand = Math.round(Math.random() * 8) + 7;
            break;
    
        case 'position':
        case 'font':
            // random number between 2 and 5
            rand = Math.round(Math.random() * 10) + 5;
            break;

        default:
            throw new Error("This CSS property is not handled by this glitch animation generator. \nPlease look opacityCode to find another one.");
    }

    // We randomly generate the percentage for each step.
    // keyframeNone are the same percentage (+ 1, 2 or 3) to deactivate the effect.
    for (let i = 0; i < rand; i++) {
        let keyframe: number, keyframeNone: number;

        do {
            keyframe = Math.round(Math.random() * 100);
            let rand2 = keyframe + (Math.round(Math.random()) + 2);
            keyframeNone = rand2 <= 100 ? rand2 : 100;
        } while (keyframes.includes(keyframe));
        
        keyframes.push(keyframe);
        keyframesNone.push(keyframeNone);
    }
    // We sort the keyframes list to be in ascending order:
    keyframes.sort((a, b) => { return a - b} );
    keyframesNone.sort((a, b) => { return a - b} );
    
    return [keyframes, keyframesNone];
}

export const animationDurationGenerator = (min?: number, max?: number): string => {
    // min and max should be a number in seconds (ex: 1 for 1s, 0.75 for 750ms)
    min = min === undefined ? 1 : min * 100;
    max = max === undefined ? 500 : max * 100;
    const duration = (Math.floor(Math.random() * (max - min)) + min) / 100;
    return `${duration}s`;
}

export const pathGenerator = (): string => {
    // random number between 25 and 100
    const rand: number = Math.round(Math.random() * (Math.random() * 75)) + 25;
    const paths: string[] = [];
    let x: number, y: number;
    for (let i = 0; i < rand; i++) {
        x = Math.round(Math.random() * 100);
        y = Math.round(Math.random() * 100);
        paths.push(`${x}% ${y}%`);
    }
    return paths.join(', ');
}

export const opacityGenerator = (): string => {
    // random number between 0.33 and 1
    const opacity: string = String(Math.floor(Math.random() * 6.6 + 3.3) / 10);
    return opacity;
}

export const positionGenerator = (sign: string): string[] => {
    let positionTop: number, positionLeft: number;
    switch (sign) {
        case 'equal':
            // If 'equal' get rand num between 0 & 1, then if/else recursive func with param 'pos' or 'neg'
            // let rand = Math.round(Math.random());
            // rand === 0 ? positionGenerator('positive') : positionGenerator('negative');

            // position should be a value between -0.25em and 0.25em (0 excluded);
            // random number between 0.125 and 0.25
            positionTop = Math.floor((Math.random() * 20.5) + 12.5) / 100;
            positionLeft = Math.floor((Math.random() * 20.5) + 12.5) / 100;
            // position is randomly positive or negative 
            positionTop *= Math.round(Math.random()) ? 1 : -1;
            positionLeft *= Math.round(Math.random()) ? 1 : -1;
            break;
        
        case 'positive':
            // Top pos should be between 0.25 and 0.25
            positionTop = Math.floor((Math.random() * 20.5) + 12.5) / 100;
            // Left pos should be between 1.25 and 2.5
            positionLeft = Math.floor((Math.random() * 125) + 125) / 100;
            break;
            
        case 'negative':
            // pos top and left should be between -0.125 and -0.25
            positionTop = Math.floor((Math.random() * -20.5) - 12.5) / 100;
            positionLeft = Math.floor((Math.random() * -20.5) - 12.5) / 100;
            break;

        default:
            throw new Error("You must provide a sign as parameter ('positive', 'negative' or 'equal' to define if position should be on bottom/right, top/left or both");        
    }
    return [`${positionTop}em`, `${positionLeft}em`];
}

export const fontGenerator = (): string => {
    let font: string;
    // random number between 0 and 1
    const rand = Math.round(Math.random()) ;

    switch (rand) {
        case 1:
            font = fonts.pixelHairline; // good !
            break;
            
        // case 2:
        //     font = fonts.pixelInline;
        //     break;
        
        // case 3:
        //     font = fonts.pixelOutline;
        //     break;

        case 0:
        default:
            font = fonts.pixelFlat; // bof
            
            break;
    }
    return `${font}`;
}

export const colorGenerator = (): string => {
    let color: string;
    // Rand num between 0 and 2
    const rand: number = Math.round(Math.random() * 2);

    switch (rand) {
        case 1:
            color = colours.neonBlue;
            break;
    
        case 2:
            color = colours.neonFuchsia
            break;

        case 0:
        default:
            color = colours.white;
            break;
    }
    return `${color}`;
}

export const blurGenerator = (): string => {
    //rand numb between 0 and 0.125 em
    const blur = Math.round(Math.random() * 12.5) / 100
    return `${blur}`;
}

export const glitchAnimationCodeGenerator = (prop: string, sign?: string): any => {
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
            throw new Error("Error in glitch animation parameters");
    }
}