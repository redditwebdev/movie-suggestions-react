import React from 'react';

/**
 * I am a stateless functional component
 * where props is passed in and text is
 * grabbed off it. I do not use setState
 * or really any other react things.
 */
export const Hero = ({text}) => (
  <h1 className="hero-title">
    {text}
  </h1>
);
