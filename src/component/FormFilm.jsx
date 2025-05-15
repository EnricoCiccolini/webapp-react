import { useState } from "react";
import axios from 'axios';

function FormFilm() {

    const [isGood, setIsGood] = useState(false)
    const [isBaad, setIsBaad] = useState(false)
    const [message, setMessage] = useState(false)


    const defaultValue = {
        "title": "",
        "director": "",
        "genre": "",
        "relase_year": "",
        "abstract": "",
        "image": null
    };

    const [formdata, setFormData] = useState(defaultValue);


    // function changeFormObject(e) {
    //     const { name, value, type, files } = e.target;
    //     const newValue = type === "file" ? files[0] : value;
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: newValue
    //     }));
    // }


    // function sendForm(e) {
    //     e.preventDefault();
    //     let timer
    //     clearTimeout(timer)
    //     setMessage('')
    //     setIsBaad(false)
    //     setIsGood(false)

    //     const formDataToSend = new FormData();
    //     formDataToSend.append('title', formdata.title);
    //     formDataToSend.append('director', formdata.director);
    //     if (formdata.image) {
    //         formDataToSend.append('image', formdata.image);
    //     }
    //     formDataToSend.append('genre', formdata.genre);
    //     formDataToSend.append('relase_year', formdata.relase_year);
    //     formDataToSend.append('abstract', formdata.abstract);

    //     axios.post(`http://127.0.0.1:3004/films/`, formDataToSend, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     })
    //         .then(response => { setIsGood(true), setMessage('film caricato con successo') })
    //         .catch(err => {
    //             setIsBaad(true),
    //                 console.log(err),
    //                 setMessage(`c'è stato un problema nel caricamento del film `)
    //         });

    //     setFormData({ ...defaultValue, image: null });
    //     timer = setTimeout(() => {
    //         setIsBaad(false)
    //         setIsGood(false)
    //     }, 5000)

    // }

    function changeFormObject(e) {
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: value
        }));
    }


    function sendForm(e) {
        e.preventDefault();
        let timer
        clearTimeout(timer)
        setMessage('')
        setIsBaad(false)
        setIsGood(false)
        axios.post(`http://127.0.0.1:3004/films/`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => { setIsGood(true), setMessage('film caricato con successo') })
            .catch(err => {
                setIsBaad(true),
                    console.log(err),
                    setMessage(`c'è stato un problema nel caricamento del film `)
            });

        setFormData(defaultValue);
        timer = setTimeout(() => {
            setIsBaad(false)
            setIsGood(false)
        }, 5000)

    }



    return (
        <>
            <div className="container">

                {isBaad || isGood ? <div className={`alert ${isGood ? `alert-success` : `alert-danger`}`} role="alert">
                    {message}
                </div> : ''}


                <div className="card">
                    <div className="card-header">
                        <div>
                            <p>Inserisci i dati del nuovo film </p>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={sendForm}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    name="title"
                                    value={formdata.title}
                                    onChange={changeFormObject}
                                    className="form-control"
                                    placeholder="title"
                                />
                                <label htmlFor="floatingInput">inserisci il titolo </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    name="director"
                                    value={formdata.director}
                                    onChange={changeFormObject}
                                    className="form-control"
                                    placeholder="director"
                                />
                                <label htmlFor="floatingInput">inserisci il regista </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    name="genre"
                                    value={formdata.genre}
                                    onChange={changeFormObject}
                                    className="form-control"
                                    placeholder="genre"
                                />
                                <label htmlFor="floatingInput">inserisci il genere </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    name="relase_year"
                                    value={formdata.relase_year}
                                    onChange={changeFormObject}
                                    className="form-control"
                                    placeholder="anno di rilascio"
                                />
                                <label htmlFor="floatingInput">inserisci l 'anno di rilascio </label>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    name="abstract"
                                    value={formdata.abstract}
                                    onChange={changeFormObject}
                                    placeholder="descrizione"
                                    id="textform"
                                ></textarea>
                                <label htmlFor="floatingTextarea2">inserisci la descrizione </label>
                            </div>
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupFile01">carica</label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={changeFormObject}
                                    className="form-control"
                                />
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-primary me-md-2" type="submit"> invia</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormFilm;