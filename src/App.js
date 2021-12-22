import React, {useState , useEffect} from 'react'
import CountriesPreview from './components/countries-preview/CountriesPreview'
import Header from './components/header/Header'
import CountryDetail from './components/countries-details/CountryDetail'
import './App.scss';
function App() {
  const [dataCountries,setDataCountries] = useState([])
  const [countries , setCountries] = useState([])
  const [showDetail , setShowDetail] = useState(true)
  const [singleCountry , setSingleCountry] = useState({})
  const [darkTheme , setDarkTheme] = useState(true)

  const getDatafromApi = async() => {
    const url = "https://restcountries.com/v3.1/all"
    const response = await fetch(url)
    const data = await response.json() 
    setCountries(data)
    setDataCountries(data)
  }
  
  useEffect(()=>{
    getDatafromApi()
  },[])

  const handleChange = (e) => {
    const name = e.target.value;
    var newCountries = dataCountries.filter((country)=>(
      country.name.official.toLowerCase().includes(name.toLowerCase())
    ))
    setCountries(newCountries)
  }

  const handleFilter = (e) => {
    const continent = e.target.value;
    if(continent==="all"){
      return setCountries(dataCountries)
    }
    var newCountries = dataCountries.filter((country)=>(
      country.region.toLowerCase() === continent.toLowerCase())
    )
    setCountries(newCountries)
  }

  const handleClick = (code) => {
      const newCountry = dataCountries.filter((country)=> 
      country.ccn3 === code)
      setSingleCountry(newCountry[0])
      setShowDetail(false)
  }

  const convertCodeToName = (countryCode) => {
    
    const Fullname = dataCountries.find((country)=>
        (country.cca3===countryCode)?(country.name.common): null)
    // console.log(Fullname)
    return Fullname
}

  return (
    <div className={ `container ${darkTheme? 'dark':''}`}>
    <Header 
    setTheme={()=>{setDarkTheme(!darkTheme)}}
    darkTheme={darkTheme}
    />
    {
      showDetail ?
      <CountriesPreview 
        countries={countries} 
        handleChange={handleChange}
        handleFilter={handleFilter}
        handleClick = {handleClick}
        darkTheme={darkTheme}
        />:
        <CountryDetail 
        key={singleCountry.ccn3}
        country={singleCountry}
        handleClick = {handleClick}
        convertCodeToName={convertCodeToName}
        handleBack={()=>{
          setShowDetail(true);
          setCountries(dataCountries);
        }}
        />
    }
    </div>
  )
}

export default App