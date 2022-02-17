export const handleChangeInput = (data , e) => {
    const name = e.target.value;
    var newCountries = data.filter((country)=>(
      country.name.official.toLowerCase().includes(name.toLowerCase())
    ))
    return newCountries
}

export const handleFilterInput = (data , e) => {
    const continent = e.target.value;
    if(continent==="all"){
        return data
    }
    var newCountries = data.filter((country)=>(
      country.region.toLowerCase() === continent.toLowerCase())
    )
    return newCountries
  }

export const handleClickOfCountry = (countries , code) => {
    const newCountry = countries.filter((country)=> country.ccn3 === code)
    return [ newCountry[0] , false ]
}

export const convertCity = (data ,countryCode) => {
    const Fullname = data.find((country)=>
        (country.cca3===countryCode)?(country.name.common): null)
    return Fullname
}