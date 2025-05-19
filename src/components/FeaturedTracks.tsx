import React from 'react';
import { Play } from 'lucide-react';
import { Track } from '../types';

interface FeaturedTracksProps {
  tracks: Track[];
  onPlayTrack: (index: number) => void;
}

const FeaturedTracks: React.FC<FeaturedTracksProps> = ({ tracks, onPlayTrack }) => {
  const featuredTracks = tracks.filter(track => track.featured);
  
  return (
    <section id="music" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Morceaux en Vedette</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Découvrez les dernières créations musicales de Studio Nephews</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredTracks.map((track, index) => {
            const trackIndex = tracks.findIndex(t => t.id === track.id);
            
            return (
              <div 
                key={track.id}
                className="relative group overflow-hidden rounded-lg bg-gray-800 transition-transform duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src={track.coverArt} 
                    alt={track.title} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <button
                    onClick={() => onPlayTrack(trackIndex)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-black p-4 rounded-full transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-110"
                    aria-label={`Jouer ${track.title}`}
                  >
                    <Play className="h-8 w-8" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{track.title}</h3>
                  <p className="text-gray-400 mt-1">{track.artist}</p>
                  <p className="text-gray-500 text-sm mt-2">Sorti le {new Date(track.releaseDate).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="text-gray-300 mt-4">{track.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTracks;