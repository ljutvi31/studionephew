import React from 'react';
import { Play, Clock } from 'lucide-react';
import { Track } from '../types';

interface TrackListProps {
  tracks: Track[];
  onPlayTrack: (index: number) => void;
}

const TrackList: React.FC<TrackListProps> = ({ tracks, onPlayTrack }) => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tous les Morceaux</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Parcourez la collection complète des productions de Studio Nephews</p>
        </div>
        
        <div className="overflow-hidden shadow ring-1 ring-gray-800 rounded-lg">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-900">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-300 sm:pl-6">#</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Titre</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300 hidden md:table-cell">Date de Sortie</th>
                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-300">
                  <Clock className="inline-block h-4 w-4" />
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Jouer</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 bg-black">
              {tracks.map((track, index) => (
                <tr 
                  key={track.id}
                  className="hover:bg-gray-900/50 transition-colors duration-200"
                >
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-300 sm:pl-6">{index + 1}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <div className="flex items-center">
                      <img 
                        src={track.coverArt} 
                        alt={track.title} 
                        className="h-10 w-10 rounded mr-3 object-cover"
                      />
                      <div>
                        <div className="font-medium text-white">{track.title}</div>
                        <div className="text-gray-500">{track.artist}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400 hidden md:table-cell">
                    {new Date(track.releaseDate).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400 text-right">{track.duration}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button
                      onClick={() => onPlayTrack(index)}
                      className="text-purple-500 hover:text-purple-400 transition-colors"
                      aria-label={`Jouer ${track.title}`}
                    >
                      <Play className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TrackList;