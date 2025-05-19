import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import { Artist } from '../types';

interface AboutSectionProps {
  artists: Artist[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ artists }) => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">À Propos des Artistes</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Découvrez les talentueux producteurs derrière la musique</p>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {artists.map((artist) => (
            <div key={artist.id} className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-full md:w-1/3">
                <img 
                  src={artist.photo} 
                  alt={artist.name} 
                  className="w-full h-auto rounded-lg shadow-xl object-cover aspect-square"
                />
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-white">{artist.name}</h3>
                
                <div className="mt-6 space-y-4 text-gray-300">
                  <p className="leading-relaxed">{artist.bio}</p>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-3">Outils de Production</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-purple-900/40 border border-purple-800 text-purple-300 rounded-full text-sm">BandLab</span>
                    <span className="px-3 py-1 bg-blue-900/40 border border-blue-800 text-blue-300 rounded-full text-sm">EiffelStudio</span>
                    <span className="px-3 py-1 bg-green-900/40 border border-green-800 text-green-300 rounded-full text-sm">Production Digitale</span>
                    <span className="px-3 py-1 bg-orange-900/40 border border-orange-800 text-orange-300 rounded-full text-sm">Musique Électronique</span>
                  </div>
                </div>
                
                <div className="mt-8 flex space-x-4">
                  {artist.socialLinks.instagram && (
                    <a 
                      href={artist.socialLinks.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  )}
                  {artist.socialLinks.twitter && (
                    <a 
                      href={artist.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  )}
                  {artist.socialLinks.youtube && (
                    <a 
                      href={artist.socialLinks.youtube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;