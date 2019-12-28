import React from 'react';
import axios from 'axios';
import './Cardwrapper.css';
import Card from '../Card/Card'

class Cardwrapper extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(posts => {
                return (
                    <Card
                        key={posts.id}
                        poster_path="https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"
                        title={posts.title}
                        vote_average={posts.body}
                        wyswietlModal={e => this.props.wyswietlModal(e)}>
                    </Card>
                )
            })
        ) : (<p>Brak informacji</p>)

        return (
            <div className="cardwrapper" >
                {postList}
            </div >
        )
    }
};

export default Cardwrapper;