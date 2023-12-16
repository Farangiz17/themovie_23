import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './People.scss'

export default function People() {
    const [people, setpeople] = useState([])
    useEffect(() => {
     async function people(){
        await axios.get(`${process.env.REACT_APP_BASE_URL_ALL}person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(ress => {
            console.log(ress);
            setpeople(ress.data.results)
        })
        .catch(err => {
            console.log(err);
        })
     }
     people()
    }, [])
    
  return (
  <>
    <div className='container-fluid'>
        <h2 className='popular_people_h2'>Popular People</h2>
       <div className="people_row">
       {
            (people) && people.map((item, index) =>{
                    return(
                        <div key={index} className="card">
                            <img className='people_card_img' src={`${process.env.REACT_APP_BASE_IMG_URL + item.profile_path}`} alt="popular_photo" />
                            <h5 className='card_people_name'>{item.name}</h5>
                            <p className='text-truncate card_people_p' style={{maxWidth:'100%'}}>{item.known_for[0].overview}</p>
                        </div>
                    )
            })
        }
       </div>
    </div>
  </>

  )
}
