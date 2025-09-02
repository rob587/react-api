import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const actressesList = () => {


const App = () => {

        const [actresses, setActresses] = useState([])

        const [page, setPage] = useState(1)

        const fetchActors = () => {
        axios.get(`https://lanciweb.github.io/demo/api/actresses`).then((resp) =>{
            setActors(resp.data)
        
        })
        }

        useEffect(fetchActors, [page])

        const next = () => {
        setPage(page + 1)
        }

        const previous = () => {
        if(page !== 1){
            setPage(page - 1)
        }
        }
        return (
 
        <h1>ciao</h1>


  )
}
}

export default actressesList
