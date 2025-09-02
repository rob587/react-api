
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {

 const [actors, setActors] = useState([])

 const [page, setPage] = useState(1)

 const fetchActors = () => {
  axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) =>{
    setActors(resp.data)
   
  })
 }

 useEffect(fetchActors, [])

 const next = () => {
  setPage(page + 1)
 }

 const previous = () => {
  setPage(page - 1)
 }

  return (
    
      <div className="container">
        <div className="row gy-3">
          <div className="col-12">
            <h1 className='text-center mt-5'>Attori formidabili incredibili</h1>
          </div>

            {actors.map(act => {
              
              return (
                
              <div className="col-6" key={act.id}>
               <div className="character">
                  <img src={act.image} alt={act.name} />
                  
              

                  <div className="infos ms-4">
                    <h4>{act.name}</h4>
                    <p>{act.nationality}</p>
                    <p>{act.birth_year}</p>
                    <p>{act.biography}</p>
                    <p>{act.known_for + "" }</p>
                  </div>


                </div>
              </div>              
              )
            })}

            <div className="col-12 d-flex justify-content-end fixed-bottom">
              <button className='change' onChange={fetchActors}> <i class="fa-solid fa-arrow-left"></i> </button>
              <button className='change' onChange={}> <i class="fa-solid fa-arrow-right"></i> </button>
              
            </div>



        </div>
      </div>

      

  )
}

export default App

