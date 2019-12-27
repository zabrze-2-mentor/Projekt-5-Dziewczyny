import React from 'react';
import './Cardwrapper.css';
import Card from '../Card/Card'

class Cardwrapper extends React.Component {
    render() {
        return (
            <div className="cardwrapper" >
                <Card wyswietlModal={e => this.props.wyswietlModal(e)}></Card>
                <Card wyswietlModal={e => this.props.wyswietlModal(e)}></Card>
                <Card wyswietlModal={e => this.props.wyswietlModal(e)}></Card>
                <Card wyswietlModal={e => this.props.wyswietlModal(e)}></Card>
                <Card wyswietlModal={e => this.props.wyswietlModal(e)}></Card>
                <Card wyswietlModal={e => this.props.wyswietlModal(e)}></Card>
                <Card wyswietlModal={e => this.props.wyswietlModal(e)}></Card>
            </div >
        )
    }
};

export default Cardwrapper;