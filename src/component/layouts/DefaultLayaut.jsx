import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { GlobalContex } from "../contex/globalprovider"
import LoaderPage from "../LoaderPage"
import { useContext } from "react"
function DefaultLayaut() {
    const { loading } = useContext(GlobalContex)

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid d-flex justify-content-space-beetween">
                        <Link className="navbar-brand" to={"/"}>Movies</Link>

                        <Link className="navbar-brand" to={"/addfilm"}>add movies</Link>
                    </div>
                </nav>
            </header>

            <main>
                {loading ? <LoaderPage /> : ""}
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayaut