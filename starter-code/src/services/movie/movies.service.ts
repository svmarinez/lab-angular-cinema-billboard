import { Injectable } from '@angular/core';
import { movies } from 'sample-movies';

export interface movieInterface {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  showingTimes: Array<string>;
  room: number;
}

@Injectable()
export class MoviesService {
  movieList: Array<movieInterface>;

  constructor() {
    this.movieList = movies;
    // console.log(this.movieList);
  }

  getMovies() {
    return this.movieList;
  }

  getMovie(id: number) {
    console.log(this.movieList.filter(m => (m.id==id))[0])
    return this.movieList.filter(m => (m.id==id))[0];
  }
}
