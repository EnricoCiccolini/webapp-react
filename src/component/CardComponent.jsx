import { Link } from "react-router-dom";

function CardComponent({ film }) {

    function star(vote) {

        const stelle = [];
        for (let index = 0; index < 5; index++) {
            if (index < vote) {
                stelle.push(<i key={index} className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>);
            } else {
                stelle.push(<i key={index} className="fa-regular fa-star"></i>);
            }
        }
        return stelle;
    }



    const { id, title, director, genre, release_year, abstract, review_vote, imagepath } = film;

    return (
        <>
            <div className="card col-4 p-4" >
                <img src={imagepath} className="w-50 mx-auto" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">regista: <strong>{director}</strong></p>
                    <p className="card-text">trama: {abstract}</p>
                    <p className="card-text">genere: {genre}</p>
                    <p className="card-text">anno di uscita: {release_year}</p>
                    <p className="card-text">voto medio: {star(review_vote)}</p>
                    <Link to={`/${id}`} className="btn btn-primary">vai al dettaglio </Link>
                </div>
            </div>

        </>
    )
}

export default CardComponent