import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Child from './Child';

class App extends React.Component {
  
  state = {
    namedValue: ''
  }
  onSubmitFn = (e) => {
    e.preventDefault();
    const val = e.target.elements['name'].value;

    this.props.dispatch({
      type: 'SET',
      payload: val
    })
    console.log(val);
  }

  render() {
    return (
      <div className="App">
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <form onSubmit={this.onSubmitFn}>
            Adiniz: <input type="text" id="name" name="name" />
            <input type="submit" />
          </form>
        </div>
        <div>
          {this.props.namedValue && (<Child />)}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    namedValue: state.namedValue
  }
}

export default connect(mapStateToProps)(App);
