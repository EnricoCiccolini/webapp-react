import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import CardFilm from "./CardFilm"
import RewieuwsCard from "./RewiuwsCard"
function DettailPage() {

    const { id } = useParams()

    const [film, setFilm] = useState()

    function getfilm() {
        axios.get('http://127.0.0.1:3004/films/' + id)
            .then(response => setFilm(response.data))

            .catch(err => console.log(err))
    }

    useEffect(() => {
        getfilm()
    }, [id])





    return (
        <>
            <div className="container">
                {film ? <CardFilm film={film} /> : <div><h2>caricamento in corso </h2></div>}

                {film && film.reviews ? film.reviews.map(ele => (<RewieuwsCard key={ele.id} reviews={ele} />)) : <div><h2>Nessun commento disponibile</h2></div>}
            </div>
        </>
    )
}

export default DettailPage