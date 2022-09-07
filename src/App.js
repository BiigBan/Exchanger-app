import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './nullstyle.css';
import Header from './Components/Header/Header';
import Loader from './Components/@Loader/Loader';
import Footer from './Components/Footer/Footer';
import ExchangerContainer from './Components/Exchanger/ExchangerContainer';

function App() {

  const [cache, setCache] = useState(undefined);

  useEffect(() => {
    axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(
      response => {
        let res = response.data.filter(el => el.cc === 'EUR' || el.cc === 'USD' ? true : false);
        setCache(res)
      }
    )

  }, [])

  
  if (!cache) {
    return <Loader />
  } else {
    return (
      <>
        <div className="App">
          <Header cache={cache} />
          <ExchangerContainer />
        </div>
        <Footer/>
      </>
    )
  }
}

export default App;
