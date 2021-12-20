import React, {useState , useEffect} from 'react'
import CountriesPreview from './components/countries-preview/CountriesPreview'
import Header from './components/header/Header'
import CountryDetail from './components/countries-details/CountryDetail'
function App() {
  const [dataCountries,setDataCountries] = useState([])
  const [countries , setCountries] = useState([])
  const [showDetail , setShowDetail] = useState(true)
  const [singleCountry , setSingleCountry] = useState({})

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
  return (
    <>
    <Header />
    {
      showDetail ?
      <CountriesPreview 
        countries={countries} 
        handleChange={handleChange}
        handleFilter={handleFilter}
        handleClick = {handleClick}
        />:
        <CountryDetail 
        country={singleCountry}
        handleBack={()=>{
          setShowDetail(true);
          setCountries(dataCountries);
        }}
        />
    }
    </>
  )
}

export default App
