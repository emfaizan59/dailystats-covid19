import React from 'react';
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import SearchBar from './Components/SearchBar/SearchBar'
import CountryList from './Components/CountryList/CountryList'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <SearchBar />
      <CountryList />
      <Footer />
    </div>
  );
}

export default App;
