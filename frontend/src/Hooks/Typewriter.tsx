import '../styles/Hooks/Typewriter.css'

import { useState, useEffect, type JSX } from 'react';
// NOTE:
// React Hook that simulates a Typewriter effect
// Main use for webpage is the Home section
//
// Inputs are text(sentence in this case) to be typed & speed at which they chars of text will be typed
// 'displayedText' is the State Var representing text
// 'index' is the State Var representing char of text will rendered on next tick of JS Timeout
//
// Logic is that the useEffect function loops (on each re-render of typewriter component) until it hits the end of text
// where on each iteration it appends the displayed text with the next Char to be displayed from text input

// Define w/ interface that the Typewriter component accepts a single props object with fields text & speed of the respective types
interface TypewriterProps {
    text: string;
    speed: number;
    needCursor: boolean;
    onDone?: () => void;
}

//“Typewriter component expects a props object with text, speed, and needCursor keys of respective types”
function Typewriter({ text, speed, needCursor, onDone }: TypewriterProps): JSX.Element {
    const [displyedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    const done = index >= text.length;  // flag for if the cursor should be solid or blinking

    const [cursor, setCursor] = useState(true); // flag for if the cursor should stay after line is done writing

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prevText => prevText + text[index]);
                setIndex(prevIndex => prevIndex + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }

        if (index === text.length && needCursor) {
            onDone?.();
        }
        else if (index === text.length && (!needCursor)) {
            setCursor(false);
            onDone?.();
        }

    }, [index, speed, text]);

    // returning current state of displayed text to <Typewriter/> in Home.tsx
    if (cursor) {
        return <span> {displyedText}<span className={`cursor ${done ? 'blink' : 'solid'}`}>█</span> </span>;
    }
    return <span> {displyedText}<span className={`cursor ${done ? 'blink' : 'solid'}`}></span> </span>;
};

export default Typewriter;
