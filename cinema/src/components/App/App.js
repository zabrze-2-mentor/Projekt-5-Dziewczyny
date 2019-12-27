import React from 'react';
import './App.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

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
        <Button
          type="Button"
          onClick={this.openModalHandler}
          buttonStyle="btn_blue"
        >Temporary modal button</Button>
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