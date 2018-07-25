import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'services/movie/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MoviesService]
})
export class HomeComponent implements OnInit {
  movie: Object;
  constructor(public Movie: MoviesService) { }
  movies: Array<Object> = this.Movie.getMovies();

  ngOnInit() {
  }

}
