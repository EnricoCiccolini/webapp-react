
import { useEffect, useState } from "react"
import axios from "axios"
import CardComponent from "./CardComponent"




function Main() {


    const [films, setfilms] = useState([])

    function getfilms() {
        axios.get('http://127.0.0.1:3004/films')
            .then(response => setfilms(response.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getfilms()
    }, [])

    console.log(films)
    return (
        <>
            <h2>i nostri film</h2>
            <div class="container text-center">
                <div class="row">

                    {films ? films.map(ele => (<CardComponent key={ele.id} film={ele} />)) : <div> nessun film </div>}

                </div>
            </div>

        </>
    )
}

export default Main