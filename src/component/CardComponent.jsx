import { Link } from "react-router-dom";

function CardComponent({ film }) {

    console.log(film)

    const { id, title, director, genre, release_year, abstract, review_vote, imagepath } = film;

    return (
        <>
            <div className="card col-4" >
                <img src={imagepath} className="w-50 mx-auto" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><strong>{director}</strong></p>
                    <p className="card-text">{abstract}</p>
                    <p className="card-text">{genre}</p>
                    <p className="card-text">{release_year}</p>
                    <p className="card-text">{review_vote}</p>
                    <Link to={`/${id}`} className="btn btn-primary">vai al dettaglio </Link>
                </div>
            </div>

        </>
    )
}

export default CardComponent