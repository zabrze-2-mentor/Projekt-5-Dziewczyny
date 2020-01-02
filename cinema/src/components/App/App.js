import React from 'react';
import axios from 'axios';

import './App.css';
import Modal from '../Modal/Modal';
import Cardwrapper from '../Cardwrapper/Cardwrapper';

class App extends React.Component {

  state = {
    isShowing: false,
    movie: [],
    genreName: [],
  }

  openModalHandler = (movieId) => {
    this.setState({
      isShowing: true
    });
    //alert(movieId);
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=7577499825866d024e32d6b01e43a95f`)
      .then(res => {
        this.setState({
          movie: res.data
        })

        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=7577499825866d024e32d6b01e43a95f`)
          .then(res => {
            console.log(this.state.movie.genres);
            let genreName = []
            this.state.movie.genres.forEach(genre => {
              genreName.push(genre.name)
            });
            this.setState({
              genreName: genreName.join(", ")
            })
          })

      });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  render() {
    return (
      <div>
        <Cardwrapper showModal={this.openModalHandler}></Cardwrapper>
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
          text={this.state.movie.overview}
          release_date={this.state.movie.release_date}
          poster={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${this.state.movie.poster_path}`}
          title={this.state.movie.title}
          original_title={this.state.movie.original_title}
          genre={this.state.genreName}
          original_language={this.state.movie.original_language}>
        </Modal>
      </div>
    );
  }
}

export default App;