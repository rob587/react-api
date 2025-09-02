import React, { use } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {

 const [actors, setActors] = useState([])

 const fetchActors = () => {
  axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) =>{
    console.log(resp)
  })
 }

 useEffect(fetchActors, [])

  return (
    
      <h1>ciao</h1>

  )
}

export default App

