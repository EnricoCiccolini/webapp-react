import StarComponet from "./StarComponent";

function CardFilm({ film }) {





    const { id, title, director, genre, release_year, abstract, review_vote, imagepath } = film[0];

    return (
        <>

            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imagepath} className="img-fluid rounded-start w-100" alt={title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex">
                            <div>
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">regista: <strong>{director}</strong></p>
                                <p className="card-text">trama: {abstract}</p>
                                <p className="card-text">genere: {genre}</p>
                                <p className="card-text">anno di uscita: {release_year}</p>

                            </div>
                            <p className="card-text"> <strong>voto medio:</strong> {<StarComponet vote={review_vote} />}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFilm