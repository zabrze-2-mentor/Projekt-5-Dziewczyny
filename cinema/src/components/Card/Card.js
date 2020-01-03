import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Button from '../Button/Button'
import {useSelector, useDispatch} from 'react-redux'
import {modalAction} from '../../actions'
import {connect} from 'react-redux'

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <img src={this.props.poster_path} alt="film" />
                <h2>{this.props.title}</h2>
                <hr />
                <p>
                    Średnia ocena: <br />
                    <b>{this.props.vote_average}</b>
                </p>

                <Button
                    type="Button"
                    onClick={e => this.props.showModal(this.props.id)
                    }
                    buttonStyle="btn_blue"
                >Więcej</Button>

            </div>
        );
    }
}
/*                <Button onClick={e=> useDispatch(modalAction())}>+</Button>
 */
Card.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
}

Card.defaultProps = {
    poster_path: "https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png",
    title: "Nie podano tytułu",
    vote_average: "-",
}

export default Card;
//export default connect(mapStateToProps)()
