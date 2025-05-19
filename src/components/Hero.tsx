import React from 'react';
import { Play } from 'lucide-react';
import '../styles/Hero.css';

interface HeroProps {
  startPlaying: () => void;
}

const Hero: React.FC<HeroProps> = ({ startPlaying }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-background-image"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="block">Découvrez le Son de</span>
          <span className="block mt-2 text-purple-500">Studio Nephews</span>
        </h1>
        <p className="hero-subtitle">
          Production musicale innovante de BandLab à EiffelStudio
        </p>
        <div className="mt-10 animate-fade-in-delayed-more">
          <button onClick={startPlaying} className="hero-button">
            <Play className="h-5 w-5 mr-2 group-hover:animate-pulse" />
            Écouter les Derniers Morceaux
          </button>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <a href="#music">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;