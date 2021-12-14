// Thanks to Matt Gross for his glitch art animation walkthrough in pure CSS and his clip-path generator:
// Cyberpunk-style Glitch walkthrough: https://codepen.io/mattgrosswork/pen/VwprebG
// Randomly generated clip-path : https://codepen.io/mattgrosswork/pen/VwprebG

export const animationDurationGenerator = (min?: number, max?: number): string => {
    // min and max should be a number in seconds (ex: 1 for 1s, 0.75 for 750ms)
    min = min === undefined ? 1 : min * 100;
    max = max === undefined ? 500 : max * 100;
    const duration = (Math.floor(Math.random() * (max - min)) + min) / 100;
    return `${duration}s`;
}

const keyframesGenerator = (prop: string): [number[], number[]] => {
    let rand: number;
    const keyframes: number[] = [], keyframesNone: number[] = [];

    // We randomly generate the amount of steps in the keyframes:
    switch (prop) {
        case 'path/pos':
            // random number between 5 and 10
            rand = Math.round(Math.random() * 5) + 5;
            break;
    
        case 'opacity':
            // random number between 2 and 5
            rand = Math.round(Math.random() * 2) + 2;
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
            let rand2 = keyframe + (Math.round(Math.random() * 2) + 1);
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

export const pathGenerator = (): string => {
    const rand: number = Math.round(Math.random() * (Math.random() * 100)) + 1;
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
    // random number between 0.2 and 1
    const opacity: string = String(Math.floor(Math.random() * (10 - 2) + 2) / 10);
    return opacity;
}

export const positionGenerator = (): string => {
    // position should be a value between -0.33em and 0.33em (0 excluded);
    // random number between 0.1 and 0.5
    let position: number = Math.floor(Math.random() * (33 - 1) + 1) / 100;
    // position is randomly positive or negative 
    position *= Math.round(Math.random()) ? 1 : -1;
    return `${position}em`;
}

export const glitchAnimationCodeGenerator = (prop: string): any => {
    let [keyframes, keyframesNone]: [number[], number[]] = [[], []];
    const pathsAndPositionKeyframes: [number[], number[]] = keyframesGenerator(prop);

    let property: string, propertyNone: string;
    
    switch (prop) {
        case 'path/pos':
            const pathPosCode: [string[], string[]] = [[], []];

            [keyframes, keyframesNone] = pathsAndPositionKeyframes;
            let pathProperty: string = `clip-${prop}: polygon(${pathGenerator()});`;
            let pathPropertyNone: string = `clip-${prop}: none;`;
            let positionProperty: string = `${prop}: ${positionGenerator()};`;
            let positionPropertyNone: string = `${prop}: 0`;

            for (let i = 0; i < keyframes.length; i++) {
                pathPosCode[0].push(`${keyframes[i]}% { ${pathProperty} }`);
                pathPosCode[1].push(`${keyframes[i]}% { ${positionProperty} }`);
            }
            for (let i = 0; i < keyframesNone.length; i++) {
                pathPosCode[0].push(`${keyframesNone[i]}% { ${pathPropertyNone} }`);
                pathPosCode[1].push(`${keyframesNone[i]}% { ${positionPropertyNone} }`);
            }

            // What do we return ????
            return pathPosCode;
    
        case 'opacity':
            const opacityCode: string[] = [];

            [keyframes, keyframesNone] = keyframesGenerator(prop);
            property = `${prop}: ${opacityGenerator()};`;
            propertyNone = `${prop}: 0;`;

            for (let i = 0; i < keyframes.length; i++) {
                opacityCode.push(`${keyframes[i]}% { ${property} }`);
            }
            for (let i = 0; i < keyframesNone.length; i++) {
                opacityCode.push(`${keyframesNone[i]}% { ${propertyNone} }`);
            }

            // We return a stringified list
            return `${opacityCode.join('\n')}`;

        default:
            throw new Error("Error in glitch animation parameters");
    }

   
}

// Paths and Opacity should have the same keyframes !