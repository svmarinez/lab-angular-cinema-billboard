import { Component, OnInit } from "@angular/core";
import { MoviesService } from "services/movie/movies.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"],
  providers: [MoviesService]
})
export class MovieComponent implements OnInit {
  movie: any;
  movieId: number;

  constructor(public service: MoviesService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => (this.movieId = Number(params['id']))
    );
  }

  ngOnInit() {
    this.movie = this.service.getMovie(this.movieId);
  }
}
