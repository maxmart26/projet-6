import "../../style.css"

function Baniere({photo,alt,titre}){
    return(
        <div className='banner'>
            <img className="image-Banner" src={photo} alt={alt}/>
            <span className='text'>{titre}</span>
        </div>
    )
}
export default Baniere