import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="mt-5 mb-5 text-center">
        <div className="container">
          <form className="d-flex flex-row justify-content-center" id="searchForm" onSubmit={this.onSubmit}>
            <div className="d-flex flex-row justify-content-center border border-1 rounded-pill" style={{boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'}}>
              <i className="fa fa-search" />
                <input
                  type="text"
                  className="form-control ml-3 mr-3 border-0"
                  name="searchText"
                  placeholder="Search Movies, TV Series ..."
                  onChange={this.onChange}
                />
            </div>
            {/* <button type="submit" className="btn btn-primary btn-bg">
              Search
            </button> */}
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(mapStateToProps,{ searchMovie, fetchMovies, setLoading })(SearchForm);