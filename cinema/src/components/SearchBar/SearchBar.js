import React from 'react';
import './SearchBar.css'


class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }


    render() {
        return (
            <div id="search" className="search-bar container-fluid">
                <div className="ui centered">
                    <form onSubmit={this.onFormSubmit} className="ui form centered two column grid">
                        <div className="column">
                            <div className="field">
                                <h2>Wyszukiwarka filmów</h2>
                                <div className="ui icon input">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Wyszukaj..."
                                        value={this.state.term}
                                        onChange={e => this.setState({ term: e.target.value })} />
                                    <i aria-hidden="true" className="search icon"></i>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >

        );
    }
}

export default SearchBar;