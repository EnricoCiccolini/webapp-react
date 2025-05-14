import { useState } from "react";
import StarComponet from "./StarComponent";
import axios from 'axios';

function FormReviuws({ id, reload }) {


    console.log(id)
    const defaultValue = {
        "name": "",
        "vote": 5,
        "text": ""
    };

    const [formdata, setFormData] = useState(defaultValue);

    function changeFormObject(e) {
        const value = e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: value
        }));
    }

    function sendForm(e) {
        e.preventDefault();

        axios.post(`http://127.0.0.1:3004/films/${id}/reviews`, formdata)
            .then(response => console.log(response.data))
            .catch(err => console.log(err));

        setFormData(defaultValue);
        reload()
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div>
                        <p>Scrivi una recensione</p>
                    </div>
                </div>
                <div className="card-body">
                    <form onSubmit={sendForm}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                name="name"
                                value={formdata.name}
                                onChange={changeFormObject}
                                className="form-control"
                                id="nameform"
                                placeholder="nome"
                            />
                            <label htmlFor="floatingInput">inserisci il tuo nome </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                name="vote"
                                value={formdata.vote}
                                min={1}
                                max={5}
                                onChange={changeFormObject}
                                className="form-control"
                                id="voteform"
                                placeholder="il tuo voto "
                            />
                            <label htmlFor="floatingInput">inserisci il tuo voto da 1 a 5 </label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control"
                                name="text"
                                value={formdata.text}
                                onChange={changeFormObject}
                                placeholder="scrivi un commento qui "
                                id="textform"
                            ></textarea>
                            <label htmlFor="floatingTextarea2">inserisci il tuo commento </label>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className="btn btn-primary me-md-2" type="submit"> invia</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormReviuws;