
import { useEffect, useState } from "react"
import axios from "axios"
import CardComponent from "./CardComponent"
import { GlobalContex } from "./contex/globalprovider"
import LoaderPage from "./LoaderPage"
import { useContext } from "react"








function Main() {
    const { loading, setLoading } = useContext(GlobalContex)


    const [films, setfilms] = useState([])
    const [resarc, setResarc] = useState("")

    function getfilms() {
        setLoading(true)
        axios.get('http://127.0.0.1:3004/films', {
            params: {
                resarc
            }
        })
            .then(response => setfilms(response.data, setLoading(false)))
            .catch(err => console.log(err), setLoading(false))




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

                    {!films ? <LoaderPage /> : films.map(ele => (<CardComponent key={ele.id} film={ele} />))}

                </div>
            </div>

        </>
    )
}

export default Main