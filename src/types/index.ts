export interface Track {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  audioSrc: string;
  duration: string;
  releaseDate: string;
  description?: string;
  featured?: boolean;
}

export interface Artist {
  id: string;
  name: string;
  photo: string;
  bio: string;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    bandlab?: string;
    youtube?: string;
  };
}