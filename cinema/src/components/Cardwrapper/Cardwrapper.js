import React from 'react';
import axios from 'axios';
import './Cardwrapper.css';
import Card from '../Card/Card'

class Cardwrapper extends React.Component {
    state = {
        movies: []
    }
    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=7577499825866d024e32d6b01e43a95f&language=en-US&query=breaking&page=1&include_adult=false')
            .then(res => {
                console.log(res)
                this.setState({
                    movies: res.data.results
                })
            })
    }

    render() {
        const { movies } = this.state;
        const movieList = movies.length ? (
            movies.map(movies => {
                return (
                    <Card
                        key={movies.id}
                        poster_path="https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"
                        title={movies.title}
                        vote_average={movies.vote_average}
                        showModal={e => this.props.showModal(e)}>
                    </Card>
                )
            })
        ) : (<p>Brak informacji</p>)

        return (
            <div className="cardwrapper" >
                {movieList}
            </div >
        )
    }
};

export default Cardwrapper;