import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import CardFilm from "./CardFilm"
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
    }, [])





    console.log(film)
    return (
        <>
            {film ? <CardFilm film={film} /> : <div><h2>caricamento in corso </h2></div>}

        </>
    )
}

export default DettailPage