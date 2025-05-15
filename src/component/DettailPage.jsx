import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import CardFilm from "./CardFilm"
import RewieuwsCard from "./RewiuwsCard"
import FormReviuws from "./FormReviuws"
import { GlobalContex } from "./contex/globalprovider"
import LoaderPage from "./LoaderPage"
import { useContext } from "react"



function DettailPage() {
    const { loading, setLoading } = useContext(GlobalContex)


    const { id } = useParams()

    const [film, setFilm] = useState()

    function getfilm() {

        setLoading(true)
        axios.get('http://127.0.0.1:3004/films/' + id)
            .then(response => setFilm(response.data), setLoading(false))

            .catch(err => console.log(err)), setLoading(false)

    }

    useEffect(() => {
        getfilm()
    }, [id])





    return (
        <>
            <div className="container ">
                {loading ? <LoaderPage /> : <CardFilm film={film} />}

                {loading && film.reviews ? film.reviews.map(ele => (<RewieuwsCard key={ele.id} reviews={ele} />)) : <div><h2>Nessun commento disponibile</h2></div>}

            </div>
            <div className="container">
                <FormReviuws id={id} reload={getfilm} />
            </div>
        </>
    )
}

export default DettailPage