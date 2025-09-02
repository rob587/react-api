
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {

 const [actors, setActors] = useState([])

 const fetchActors = () => {
  axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) =>{
    console.log(resp)
    setActors(resp.data)
   
  })
 }

 useEffect(fetchActors, [])

  return (
    
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className='text-center mt-5'>Attori formidabili incredibili</h1>
          </div>

            {actors.map(act => {
              return (
                
              <div className="col-6" key={act.id}>
               <div className="character">
                  <img src={act.image} alt={act.name} />
                  
                  <div className="actor-text">
                    <h3>{act.name}</h3>
                  </div>

                  <div className="infos">
                    <p>{act.nationality}</p>
                    <p>{act.birth_year}</p>
                    <p>{act.biography}</p>
                    <p>{act.known_for}</p>
                  </div>


                </div>
              </div>              
              )
            })}
        </div>
      </div>

  )
}

export default App

