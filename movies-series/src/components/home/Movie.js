import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoadingMovieDetail } from '../../actions/searchActions';

import SpinnerMovieDetail from '../layout/SpinnerMovieDetail';

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoadingMovieDetail();
  }
  render() {
    const { loaddingMovieDetail, movie } = this.props;

    let movieInfo = (
      <div className="container mt-4">
        <div className="row p-4">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4 card-title" style={{color: '#fff'}}>{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row p-4">
          <div className="card card-body my-5 text-light" style={{backgroundColor: '#003060'}}>
            <div className="col-md-12 p-4">
              <h3 style={{fontWeight: 'bold'}}>About </h3>
              {movie.Plot}
              <hr />
              <Link to="/" className="btn btn-default text-light">
                Back
              </Link>
              <a
                href={'https://www.imdb.com/title/' + movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary ml-2"
              >
                View on IMDB
              </a>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loaddingMovieDetail ? <SpinnerMovieDetail /> : movieInfo;

    return (
      <>
        <div>{content}</div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  loaddingMovieDetail: state.movies.loaddingMovieDetail,
  movie: state.movies.movie
});

export default connect(mapStateToProps, { fetchMovie, setLoadingMovieDetail })(Movie);