
const Card=(movie)=>{
   
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
            <div className="movie">
                <img src={img_path+movie.info.poster_path} className="poster" alt=""/>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;