import React from 'react';
// import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
      <Header/>
      
      <Route path="/todos" component={TodoFeature}/>
      <Route path="/albums" component={AlbumFeature}/>

    </div >
  );
}
export default App;