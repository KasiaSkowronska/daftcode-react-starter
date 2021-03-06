import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';

import './styles/theme.sass';
import Counter from './components/counter';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    success: false,
  }


  timerSuccess() {
    this.setState(() => ({ success: true }));
    // console.log("Koniec odliczania");
  }

  resetTimer() {
    this.setState(() => ({ success: false }));
  }

  render() {
    const { success } = this.state;
    const successBoxStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      width: 100,
      height: 100,
      color: '#2ecc71',
      fontSize: 30,
      fontWeight: 600,
    };

    return (
      <main>
        <Home username="DaftCoder" />
        <Counter
          from={1}
          to={9}
          onSuccess={() => this.timerSuccess()}
          onReset={() => this.resetTimer()}
        />
        {success && <div style={successBoxStyle} >koniec</div>}
      </main>
    );
  }
}

export default hot(module)(App);
