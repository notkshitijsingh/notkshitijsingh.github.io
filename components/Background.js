import { useState, useEffect } from "react";

const colors = [
  "#ff9a9e", "#fad0c4", "#ffdde1", "#fc6076", "#ff9a44",
  "#ff6a88", "#ff758c", "#c1c161", "#ffb199", "#a18cd1",
  "#fad0c4", "#ffecd2"
];

const getRandomColor = (exclude) => {
  let newColor;
  do {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  } while (newColor === exclude);
  return newColor;
};

const Background = () => {
  const [color1, setColor1] = useState(getRandomColor());
  const [color2, setColor2] = useState(getRandomColor(color1));
  const [prevGradient, setPrevGradient] = useState(
    `linear-gradient(45deg, ${color1}, ${color2})`
  );
  const [nextGradient, setNextGradient] = useState(prevGradient);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true); // Start fade-out animation (1.5s)

      setTimeout(() => {
        const newColor1 = getRandomColor(color1);
        setColor1(newColor1);
        setPrevGradient(nextGradient);
        setNextGradient(`linear-gradient(45deg, ${newColor1}, ${color2})`);
      }, 1500); // Switch colors after 1.5s

      setTimeout(() => {
        setIsFadingOut(false);
        setIsFadingIn(true); // Start fade-in animation (1.5s)
      }, 2000); // Fade-in overlaps with last 0.5s of fade-out

      setTimeout(() => {
        setIsFadingIn(false);
      }, 3500);
    }, 5000); // Full cycle every 5s

    return () => clearInterval(interval);
  }, [color1, color2, nextGradient]);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{opacity:"0.25", zIndex:"-1"}}>
      {/* Previous Gradient (Fades Out) */}
      <div
        className="absolute -inset-20 transition-opacity"
        style={{
          background: prevGradient,
          transition: "opacity 1.5s ease-in-out",
          opacity: isFadingOut ? 0 : 1,
        }}
      />
      {/* Next Gradient (Fades In after 1s delay) */}
      <div
        className="absolute -inset-20 transition-opacity"
        style={{
          background: nextGradient,
          transition: "opacity 1.5s ease-in-out",
          opacity: isFadingIn ? 1 : 0,
        }}
      />
    </div>
  );
};

export default Background;
