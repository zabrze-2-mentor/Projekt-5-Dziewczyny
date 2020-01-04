import React from 'react';

import './Cardwrapper.css';
import Card from '../Card/Card'

class Cardwrapper extends React.Component {


    render() {
        const { movies } = this.props;
        const movieList = movies.length ? (
            movies.map(movies => {
                return (
                    <Card
                        key={movies.id}
                        id={movies.id}
                        poster_path={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movies.poster_path}`}
                        title={movies.title}
                        vote_average={movies.vote_average}
                        showModal={e => this.props.showModal(movies.id)}>
                    </Card>
                )
            })
        ) : (<p>Loading...</p>)

        if (movies.length < 1) {
            return (
                <div className="container">
                    <p>Nie znaleziono filmu. Spróbuj jeszcze raz.</p>
                </div >
            )
        }

        return (
            <div className="cardwrapper" >
                {movieList}
            </div >
        )
    }
};

export default Cardwrapper;