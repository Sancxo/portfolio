/// <reference types="react-scripts" />

// allows img files imports
declare module '*.JPG' {
    const value: string;
    export = value;
}