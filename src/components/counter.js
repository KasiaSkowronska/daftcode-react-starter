import { hot } from 'react-hot-loader';
import * as React from 'react';

class Counter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    setTimeout(() => this.incrementCounter(), 1000);
    this.state = {
      count: this.props.from,
    };
  }



  incrementCounter() {
    const { count } = this.state;
    const { to } = this.props;

    this.setState(state => ({ count: state.count + 1 }));
    if (this.state.count < to) {
      setTimeout(() => this.incrementCounter(), 1000);
    } else {
      this.props.onSuccess();
    }
  }

  resetTimer() {
    this.setState(() => ({ count: this.props.from }));
    this.props.onReset();
  }

  render() {
    const { count } = this.state;

    const { from } = this.props;
    const { to } = this.props;

    const resetButtonStyle = {
      padding: 15,
      backgroundColor: '#2ecc71',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
    };

    const counterStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
    }

    return (
      <div>
        <span > Start: { from} </span>
        <span> Koniec: { to} </span>
        <button style={resetButtonStyle} onClick={() => this.resetTimer()}>Resetuj licznik</button>
        <div style={counterStyle}> { count }</div>
      </div>
    );
  }
}

export default hot(module)(Counter);
