import React, { useEffect, useState } from "react";

const TypingHeading = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const type = () => {
      if (index < text.length -1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        timeoutId = setTimeout(type, speed);
      }
    };

    type(); // start typing
    console.log("Hello");
    return () => clearTimeout(timeoutId); // clean up on unmount
  }, [text, speed]);

  return (
    <h1 className="font-['Poppins'] text-4xl sm:text-5xl font-bold text-white">
      {displayedText}
      <span className="animate-pulse text-orange-400">|</span>
    </h1>
  );
};

export default TypingHeading;