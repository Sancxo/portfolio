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

// Créer une deuxième liste de keyframes dont la valeur de chaque 
// entrée === keyframes[i] + 1/2 ou 3 (random) afin de mettre none au clip-path
const keyframesGenerator = (): [number[], number[]] => {
    const rand: number = Math.round(Math.random() * 13) + 2;
    const keyframes: number[] = [];
    const keyframesNone: number[] = [];

    for (let i = 0; i < rand; i++) {
        let keyframe: number;
        let keyframeNone: number;

        do {
            keyframe = Math.round(Math.random() * 100);
            keyframeNone = keyframe + (Math.round(Math.random() * 2) + 1);
        } while (keyframes.includes(keyframe));
        
        keyframes.push(keyframe);
        keyframesNone.push(keyframeNone);
    }
    keyframes.sort((a, b) => { return a - b} );
    keyframesNone.sort((a, b) => { return a - b} );
    // console.log('keyframes', keyframes);
    // console.log('keyframesNone', keyframesNone);
    return [keyframes, keyframesNone];
}

export const glitchAnimationCodeGenerator = (): string => {
    const [keyframes, keyframesNone] = keyframesGenerator();

    const code: string[] = [];

    for (let i = 0; i < keyframes.length; i++) {
        let lineOfCode: string = `${keyframes[i]}% { clip-path: polygon(${pathGenerator()}); }`;
        code.push(lineOfCode);
    }
    for (let i = 0; i < keyframesNone.length; i++) {
        let lineOfCode: string = `${keyframesNone[i]}% { clip-path: none; }`;
        code.push(lineOfCode);
    }
    return `${code.join('\n')}`;
}