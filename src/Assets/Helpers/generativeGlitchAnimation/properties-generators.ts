import { colours, fonts } from "../../Style/style";

export const animationDuration = (min: number = 1, max: number = 60): string => {
    // min and max should be numbers in seconds (ex: 1 for 1s, 0.75 for 750ms)
    const duration = (Math.floor(Math.random() * (max - min)) + min);
    return `${duration}s`;
}

export const pathGenerator = (): string => {
    // random number between 30 and 60
    const rand: number = Math.round(Math.random() * (Math.random() * 30)) + 30;
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
    let topPosition: number, leftPosition: number;
    switch (sign) {
        case 'equal':
            // position should be a value between -0.25em and 0.25em (0 excluded);
            // random number between 0.125 and 0.25
            topPosition = Math.floor((Math.random() * 12.5) + 12.5) / 100;
            leftPosition = Math.floor((Math.random() * 12.5) + 12.5) / 100;
            // position is randomly positive or negative 
            topPosition *= Math.round(Math.random()) ? 1 : -1;
            leftPosition *= Math.round(Math.random()) ? 1 : -1;
            break;
        
        case 'positive':
            // Top pos should be between 0.125 and 0.25
            topPosition = Math.floor((Math.random() * 12.5) + 12.5) / 100;
            // Left pos should be between 0 and .21
            leftPosition = Math.floor((Math.random() * 21)) / 100;
            break;
            
        case 'negative':
            // pos top and left should be between -0.125 and -0.25
            topPosition = Math.floor((Math.random() * -12.5) - 12.5) / 100;
            leftPosition = Math.floor((Math.random() * -12.5) - 12.5) / 100;
            break;

        default:
            throw new Error("You must provide a sign as parameter ('positive', 'negative' or 'equal' to define if position should be on bottom/right, top/left or both");        
    }
    return [`${topPosition}em`, `${leftPosition}em`];
}

export const fontGenerator = (): string => {
    // random number between 0 and 1
    const rand = Math.round(Math.random());

    let font: string = rand === 0 ? fonts.pixelOutline : fonts.pixelHairline;

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