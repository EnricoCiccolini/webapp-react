import StarComponet from "./StarComponent";

function RewieuwsCard({ tags }) {


    const { name, text, vote } = tags


    console.log(tags)

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
                <div class="card-body">

                    <p class="card-text">{text}</p>
                </div>
            </div>
        </>
    )
}

export default RewieuwsCard