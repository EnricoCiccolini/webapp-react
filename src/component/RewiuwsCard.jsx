import StarComponet from "./StarComponent";

function RewieuwsCard({ reviews }) {


    const { name, text, vote } = reviews




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

                    <p className="card-text">{text}</p>
                </div>
            </div>
        </>
    )
}

export default RewieuwsCard