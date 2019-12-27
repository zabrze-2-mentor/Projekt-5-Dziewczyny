import React from 'react';
import './App.css';
import Modal from '../Modal/Modal';
import Cardwrapper from '../Cardwrapper/Cardwrapper';

class App extends React.Component {

  state = {
    isShowing: false
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
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
        <h1>
          U mnie działa
      </h1>
        <Cardwrapper wyswietlModal={this.openModalHandler}></Cardwrapper>
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}>
        </Modal>
      </div>
    );
  }
}

export default App;