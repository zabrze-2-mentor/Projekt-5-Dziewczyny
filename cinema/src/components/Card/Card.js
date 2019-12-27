import React from 'react';
import './Card.css';
import Button from '../Button/Button'

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <img src="https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2019/11/harry-potter-kamie%C5%84-filozoficzny-premiera.jpg" alt="film" />
                <h2>Tytuł filmu który moze być długi albo krótki</h2>
                <hr />
                <p>
                    Gatunek filmu
                </p>

                <Button
                    type="Button"
                    onClick={e => this.props.wyswietlModal(e)}
                    buttonStyle="btn_blue"
                >Więcej</Button>

            </div>
        );
    }
}

export default Card;
