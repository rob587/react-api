
import axios from 'axios'
import { useState, useEffect } from 'react'


const App = () => {

 const [people, setPeople] = useState([])

 const [page, setPage] = useState(1)

 const fetchData = () => {

    const url = page === 1
    ? `https://lanciweb.github.io/demo/api/actors?page=1`
    : `https://lanciweb.github.io/demo/api/actresses?page=${page - 1}`
 
 
    axios.get(`https://lanciweb.github.io/demo/api/actors?page=${page}`).then((resp) =>{
    setPeople(resp.data.results || resp.data)
  })
 }

 useEffect(fetchActors, [page])

 const next = () => setPage(prev => prev + 1)
 

 const previous = () => setPage(prev => (prev > 1 ? prev - 1 : 1))

  return (
    
      <div className="container">
        <div className="row gy-3">
          <div className="col-12">
            <h1 className='text-center mt-5'> {page === 1 ? "Attori formidabili incredibili" : "Attrici formidabili incredibili"}</h1>
          </div>

            {people.map(act => {
              
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
              <button className='change' onClick={previous}> <i className="fa-solid fa-arrow-left"></i> </button>
              <button className='change' onClick={next}> <i className="fa-solid fa-arrow-right"></i> </button>
              
            </div>



        </div>
      </div>
      
      
    )
  }
  <ActressesList/>

export default App

