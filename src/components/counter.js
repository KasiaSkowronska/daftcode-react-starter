import { hot } from 'react-hot-loader';
import * as React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    onSuccess: PropTypes.func,
    onReset: PropTypes.func,
  }

  static defaultProps = {
    onSuccess: () => null,
    onReset: () => null,
  }

  constructor(props) {
    super(props);
    setTimeout(() => this.incrementCounter(), 1000);
    this.state = {
      count: this.props.from,
      isCountdownCompleted: false,
    };
  }


  incrementCounter() {
    const { to } = this.props;
    const { isCountdownCompleted } = this.state;
    this.setState(state => ({ count: state.count + 1 }));

    if (this.state.count < to) {
      setTimeout(() => this.incrementCounter(), 1000);
    } else {
      this.setState(() => ({ isCountdownCompleted: true }));
      this.props.onSuccess();
    }
  }

  resetTimer() {
    const { isCountdownCompleted } = this.state;
    this.setState(() => ({ count: this.props.from }));
    this.props.onReset();

    if (isCountdownCompleted) {
      setTimeout(() => this.incrementCounter(), 1000);
      this.setState(() => ({ isCountdownCompleted: false }));
    }
  }

  render() {
    const { count } = this.state;
    const { isCountdownCompleted } = this.state;
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
    };

    return (
      <div>
        <span > Start: { from } </span>
        <span> Koniec: { to } </span>
        <button
          style={resetButtonStyle}
          onClick={() => this.resetTimer()}
        >{isCountdownCompleted ? 'Nowe odliczanie' : 'Resetuj licznik'}
        </button>
        <div style={counterStyle}> { count }</div>
      </div>
    );
  }
}

export default hot(module)(Counter);
