import React from 'react'; 
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
   words: [
    "Yo, moi c'est lucas",
    "mec-qui-aime-le-street",
    "<mais le code encore plus />",
   ],
   loop:true,
   delaySpeed: 2000,

    });



  return (
    <div>
        <h1> {text}</h1>
    </div>
  )
}

export default Hero