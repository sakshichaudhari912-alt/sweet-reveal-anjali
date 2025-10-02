"use client";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function update() { setDimensions({ width: window.innerWidth, height: window.innerHeight }); }
    update();
    window.addEventListener("resize", update);
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => {
      window.removeEventListener("resize", update);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className={`page ${loaded ? "loaded" : ""}`}>
      <div className="card">
        {!open ? (
          <div className="intro">
            <h1 className="title">Objection, Your Honour ⚖️</h1>
            <p className="subtitle">
              I have a case pending in the court of your heart... <br />
              Only <span className="name">Advocate Anjali Talwar</span> can deliver the final judgment 💌
            </p>
            <button className="btn" onClick={() => setOpen(true)}>
              Open the Case File 📂
            </button>
          </div>
        ) : (
          <div className="reveal">
            <Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={220} recycle={false} />
            <h2 className="revealTitle">💖 Case Revealed 💖</h2>
            <TypeAnimation
              sequence={[
                'Case Title: Love vs. Distance 💌', 1000,
                'Courtroom: Your Smile ✨', 1000,
                'Verdict: Lifetime togetherness with romance, adventures, and a few funny cross-examinations ⚖️😍', 1800,
                'P.S. I promise not to appeal against your hugs 💖', 2000
              ]}
              wrapper="p"
              cursor={true}
              repeat={0}
              className="verdict"
            />
          </div>
        )}
      </div>
      <footer className="footer">Made with ❤️ — Case filed by *you*</footer>
    </main>
  );
}
