import datas from "../../datas/datas.json"
import {useParams} from 'react-router-dom'
import './styles/house.css'


function House(){
    const {id} = useParams();
    for(let data of datas){    
        if(data.id == id){
            return (
                <div>
                    <div className="carrousel">
                        {data.pictures && data.pictures.map((picture) => (
                        <img src={picture}/>
                        ))}
                        <button><i class="fa-solid fa-chevron-up"></i></button>
                        <button><i class="fa-solid fa-chevron-up"></i></button>
                    </div>
                  <h1>{data.title}</h1>
                  <h2>{data.location}</h2>
                  {data.tags && data.tags.map((tag) => (
                    <button>{tag}</button>
                  ))}
                  <div>
                  <p>{data.host.name}</p>
                  <img src={data.host.picture}/>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <button>description<i class="fa-solid fa-chevron-up"></i></button>
                    <p>{data.description}</p>
                  </div>
                        <div>
                            <button>equipment <i class="fa-solid fa-chevron-up"></i></button>
                            <div className="equipment">
                                {data.equipments && data.equipments.map((equipment) => (
                                <p>{equipment}</p>
                                ))}
                            </div>
                        </div>    
                </div>
            )
        }
    }
    
}
export default  House