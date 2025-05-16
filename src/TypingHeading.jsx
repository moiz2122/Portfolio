import React, { useEffect, useState } from "react";

const TypingHeading = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState(text);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < text.length - 1) {
//         setDisplayedText((prev) => prev + text[index]);
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, speed);
//     return () => clearInterval(interval);
//   }, [text, speed]);

  console.log("Text:", displayedText);
  console.log("Text1qweqweqwe:",text[1] );

  return (
    <h1 className="text-4xl sm:text-5xl font-bold text-white">
      {displayedText}
      {/* <span className="animate-pulse">|</span> */}
    </h1>
  );
};

export default TypingHeading;
