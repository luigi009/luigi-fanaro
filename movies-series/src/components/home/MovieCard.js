import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5 border-radius-4">
        <div className="card card-body text-center h-100 movieCard">
          <img className="card-img w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <div className="pl-2 pr-2">
            <h5 className="card-title">
              {movie.Title}
            </h5>
          </div>
          <Link className="w-100" to={'/movie/' + movie.imdbID}>
              Details
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;