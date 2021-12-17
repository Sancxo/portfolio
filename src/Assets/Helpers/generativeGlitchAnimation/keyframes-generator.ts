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
            throw new Error(`CSS property "${prop}" is not handled by this glitch animation generator library. 
            \nPlease look at keyframesGenerator function to find another one.`);
    }

    // We randomly generate the percentage for each step.
    // keyframeNone are the same percentage (+ 1, 2 or 3) to deactivate the effect if needed.
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

export default keyframesGenerator;