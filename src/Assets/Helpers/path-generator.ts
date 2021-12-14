// min and max should be a number in seconds (ex: 1 for 1s, 0.75 for 750ms)
export const animationDurationGenerator = (min?: number, max?: number): string => {
    min = min === undefined ? 1 : min * 100;
    max = max === undefined ? 500 : max * 100;
    const duration = (Math.floor(Math.random() * (max - min)) + min) / 100;
    return `${duration}s`;
}

// pass parameter to make a different amount of steps depending of the css
// property (use switch, same as GlitchAnimationCodeGenerator())
const keyframesGenerator = (prop: string): [number[], number[]] => {
    let rand: number;
    const keyframes: number[] = [];
    const keyframesNone: number[] = [];

    switch (prop) {
        case 'path':
            rand = Math.round(Math.random() * (13 - 5)) + 5;
            break;
    
        case 'opacity':
            rand = Math.round(Math.random() * (5 - 2)) + 2;
            break;
        default:
            throw new Error("This CSS property is not handled by this generator. Please look code to find another one.");
    }

    for (let i = 0; i < rand; i++) {
        let keyframe: number;
        let keyframeNone: number;

        do {
            keyframe = Math.round(Math.random() * 100);
            let rand2 = keyframe + (Math.round(Math.random() * 2) + 1);
            keyframeNone = rand2 <= 100 ? rand2 : 100;
        } while (keyframes.includes(keyframe));
        
        keyframes.push(keyframe);
        keyframesNone.push(keyframeNone);
    }
    keyframes.sort((a, b) => { return a - b} );
    keyframesNone.sort((a, b) => { return a - b} );
    return [keyframes, keyframesNone];
}

export const pathGenerator = (): string => {
    const rand: number = Math.round(Math.random() * (Math.random() * 100)) + 1;
    const paths: string[] = [];
    let x, y: number;
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

export const glitchAnimationCodeGenerator = (prop: string): string => {
    // put this in switch case to have less steps for opacity
    let [keyframes, keyframesNone] = [[NaN], [NaN]];

    const code: string[] = [];
    let property: string;
    let propertyNone: string;
    
    switch (prop) {
        case 'path':
            [keyframes, keyframesNone] = keyframesGenerator('path');
            property = `clip-path: polygon(${pathGenerator()});`;
            propertyNone = 'clip-path: none;';
            break;
    
        case 'opacity':
            [keyframes, keyframesNone] = keyframesGenerator('opacity');
            property = `opacity: ${opacityGenerator()};`;
            propertyNone = 'opacity: 0;';
            break;

        default:
            throw new Error("Error in glitch animation parameters");
    }

    for (let i = 0; i < keyframes.length; i++) {
        let lineOfCode: string = `${keyframes[i]}% { ${property} }`;
        code.push(lineOfCode);
    }
    for (let i = 0; i < keyframesNone.length; i++) {
        let lineOfCode: string = `${keyframesNone[i]}% { ${propertyNone} }`;
        code.push(lineOfCode);
    }
    return `${code.join('\n')}`;
}