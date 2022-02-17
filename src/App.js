import React, {useContext} from 'react'

import CountriesPreview from './components/countries-preview/CountriesPreview'
import Header from './components/header/Header'
import CountryDetail from './components/countries-details/CountryDetail'
import Loading from './components/loading/Loading';

import { countriesContext } from './components/context/countries.provider';

import './App.scss';

function App() {

  const {data, showDetail , darkTheme} = useContext(countriesContext)
 
  return (
    (data.length === 0) ? 
      ( <Loading />) : (
      <div className={ `container ${darkTheme? 'dark':''}`}>
        <Header />
      {  showDetail ? <CountriesPreview />:<CountryDetail /> }
      </div>
    )
  )
}

export default App
