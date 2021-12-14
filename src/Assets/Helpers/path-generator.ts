// min and max should be a number in seconds (ex: 1 for 1s, 0.75 for 750ms)
export const animationDurationGenerator = (min?: number, max?: number): string => {
    min = min === undefined ? 1 : min * 100;
    max = max === undefined ? 500 : max * 100;
    const duration = (Math.floor(Math.random() * (max - min)) + min) / 100;
    return `${duration}s`;
}

const keyframesGenerator = (prop: string): [number[], number[]] => {
    let rand: number;
    const keyframes: number[] = [], keyframesNone: number[] = [];

    switch (prop) {
        case 'path':
            rand = Math.round(Math.random() * (13 - 5)) + 5;
            break;
    
        case 'opacity':
        case 'position':
            rand = Math.round(Math.random() * (5 - 2)) + 2;
            break;

        default:
            throw new Error("This CSS property is not handled by this generator. Please look code to find another one.");
    }

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

export const glitchAnimationCodeGenerator = (prop: string): string => {
    // put this in switch case to have less steps for opacity
    let [keyframes, keyframesNone]: [number[], number[]] = [[], []];

    const code: string[] = [];
    let property: string, propertyNone: string;
    
    switch (prop) {
        case 'path':
            [keyframes, keyframesNone] = keyframesGenerator(prop);
            property = `clip-${prop}: polygon(${pathGenerator()});`;
            propertyNone = `clip-${prop}: none;`;
            break;
    
        case 'opacity':
            [keyframes, keyframesNone] = keyframesGenerator(prop);
            property = `${prop}: ${opacityGenerator()};`;
            propertyNone = `${prop}: 0;`;
            break;

        case 'position': 
            [keyframes, keyframesNone] = keyframesGenerator(prop);
            property = `${prop}: ${positionGenerator()};`;
            propertyNone = `${prop}: 0`;
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