import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
function DefaultLayaut() {


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}>Movies</Link>


                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayaut