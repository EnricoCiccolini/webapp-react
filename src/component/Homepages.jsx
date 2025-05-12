
import { useEffect, useState } from "react"
import axios from "axios"
import CardComponent from "./CardComponent"




function Main() {


    const [films, setfilms] = useState([])
    const [resarc, setResarc] = useState("")

    function getfilms() {
        axios.get('http://127.0.0.1:3004/films', {
            params: {
                resarc
            }
        })
            .then(response => setfilms(response.data))
            .catch(err => console.log(err))
    }


    function sarchMovies(e) {
        e.preventDefault()
        getfilms()
    }

    useEffect(() => {
        getfilms()
    }, [])


    return (
        <>
            <div className="container">
                <h2>i nostri film</h2>

                <div>
                    <form className="row g-3" onSubmit={(e) => sarchMovies(e)} >

                        <div className="col-auto">

                            <input type="text" onChange={(e) => setResarc(e.target.value)} className="form-control" placeholder="ricerca" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">ricerca</button>
                        </div>
                    </form>
                </div>


            </div>

            <div className="container text-center">
                <div className="row">

                    {films ? films.map(ele => (<CardComponent key={ele.id} film={ele} />)) : <div> nessun film </div>}

                </div>
            </div>

        </>
    )
}

export default Main