import { Link } from "react-router-dom";
import StarComponet from "./StarComponent";

function CardComponent({ film }) {





    const { id, title, director, genre, release_year, abstract, review_vote, imagepath } = film;

    return (
        <>
            <div className="card col-sm-12 col-md-6 col-lg-4 p-4" >
                <img src={imagepath} className="w-50 mx-auto" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">regista: <strong>{director}</strong></p>
                    <p className="card-text">trama: {abstract}</p>
                    <p className="card-text">genere: {genre}</p>
                    <p className="card-text">anno di uscita: {release_year}</p>
                    <p className="card-text">voto medio: {<StarComponet vote={review_vote} />}</p>
                    <p className="card-text">voto medio: {review_vote}</p>
                    <Link to={`/${id}`} className="btn btn-primary">vai al dettaglio </Link>
                </div>
            </div>

        </>
    )
}

export default CardComponent