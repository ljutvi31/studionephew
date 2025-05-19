import React, { useState } from 'react';
import { tracks } from './data/tracks';
import { artists } from './data/artists';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import FeaturedTracks from './components/FeaturedTracks';
import TrackList from './components/TrackList';
import AboutSection from './components/AboutSection.tsx';
import ContactSection from './components/ConctactSection.tsx';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPLayer.tsx';

function App() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const startPlaying = () => {
    setCurrentTrackIndex(0);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero startPlaying={startPlaying} />
      <FeaturedTracks tracks={tracks} onPlayTrack={handlePlayTrack} />
      <TrackList tracks={tracks} onPlayTrack={handlePlayTrack} />
      <AboutSection artists={artists} />
      <ContactSection />
      <Footer />
      <MusicPlayer
        tracks={tracks}
        currentTrackIndex={currentTrackIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentTrackIndex={setCurrentTrackIndex}
      />
    </div>
  );
}

export default App;