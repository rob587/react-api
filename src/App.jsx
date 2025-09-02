import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {

 const [actors, setActors] = ([])

 const fetchActors = () => {
  axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) =>{
    console.log(fetchActors)
    setActors(resp.data)
  })
 }

  return (
    
      <h1>ciao</h1>

  )
}

export default App

