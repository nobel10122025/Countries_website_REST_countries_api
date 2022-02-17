import React, { useState , createContext , useEffect} from 'react'
import { handleClickOfCountry , convertCity , handleChangeInput, handleFilterInput} from './context.utils'

export const countriesContext = createContext({
    dataCountries : [],
    countries : [],
    showDetail : true,
    singleCountry : {},
    darkTheme : false,
    isLoading : true
})


function CountriesProvider({children}) {
   
    const [data , setData] = useState([])
    const [countries , setCountries] = useState(data)
    const [showDetail , setShowDetail] = useState(true)
    const [singleCountry , setSingleCountry] = useState({})
    const [darkTheme , setDarkTheme] = useState(false)
    const [isLoading , setisLoading] = useState(false)
    
    const getDataFromApi = async () => {
      const url = "https://restcountries.com/v3.1/all"
        const response = await fetch(url)
        const data = await response.json() 
        setData(data);
        setCountries(data)
    }

    useEffect(()=>{
        getDataFromApi();
    },[])

    const toggleTheme = () => setDarkTheme(!darkTheme)
    const handleClick = ( data ,code ) =>{
      const [oneCountry , details] = handleClickOfCountry(data,code)
      setSingleCountry(oneCountry)
      setShowDetail(details)
    }

    const convertCodeToName = (data, code) =>  convertCity(data , code)

    const handleBack = () => {
      setShowDetail(true);
      setCountries(data)}

    const handleChange = (e) => setCountries(handleChangeInput(data ,e))

    const handleFilter = (e) => setCountries(handleFilterInput(data , e))
  return (
    <countriesContext.Provider
    value={{data,
        showDetail,
        singleCountry,
        darkTheme,
        isLoading,
        countries,
        toggleTheme, 
        handleClick,
        convertCodeToName,
        handleBack,
        handleChange, 
        handleFilter
    }}
    >
      {children}
    </countriesContext.Provider>
  )
}

export default CountriesProvider