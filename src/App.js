import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app-container" style={{ minHeight: '100vh' }}>
        <SearchBox />  
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
