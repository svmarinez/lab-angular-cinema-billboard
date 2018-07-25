import { Injectable } from '@angular/core';
import { movies } from '../sample-movies';

interface movieInterface {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;
}

@Injectable()
export class MoviesService {
  movieList: Array<movieInterface>;

  constructor() {
    this.movieList = movies;
    console.log(this.movieList);
  }

  getMovies() {
    this.movieList;
  }

  getMovie(id: number) {
    this.movieList.filter(id => {
      return {movieInterface: id};
    });
  }
}
