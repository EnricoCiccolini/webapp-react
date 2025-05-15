import StarComponet from "./StarComponent"
import { DateTime } from "luxon"


function RewieuwsCard({ reviews }) {



    const { name, text, vote, updated_at } = reviews

    const formattedDate = DateTime.fromISO(updated_at).setLocale('ru').toLocaleString();

    return (
        <>

            <div className="card">

                <div className="card-header d-flex justify-content-between">
                    <div>
                        {name}
                    </div>
                    <div>
                        <StarComponet vote={vote} />
                    </div>
                </div>
                <div className="card-body">
                    <div className=" d-flex justify-content-between">
                        <p className="card-text">{text}</p>
                        <p className="card-text">aggiornata il: {formattedDate}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RewieuwsCard