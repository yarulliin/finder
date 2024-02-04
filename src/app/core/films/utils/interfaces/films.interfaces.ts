export interface Film {
  name: string;
  year: string;
  genres: string[];
  directedBy: string[];
  description: string;
  movieImages: MovieImages;
}

export interface MovieImages {
  backdrops: Image[];
  posters: Image[];
}

export interface Image {
  file_path: string
}

export interface FilmEvent {
  filmName: string;
  method: UpdateFilmMethod;
}

export type UpdateFilmMethod = 'like' | 'unlike';
