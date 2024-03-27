import React, { useEffect } from 'react';
// import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import Header from './components/Header';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      
      <Header/>
      
      <Route path="/todos" component={TodoFeature}/>
      <Route path="/albums" component={AlbumFeature}/>

    </div >
  );
}
export default App;