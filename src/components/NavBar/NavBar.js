import CardWidget from "../CardWidget/CardWidget"
import {NavLink, Link} from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <h3>Ecommerce</h3>
            </Link>
            <div className="Categorias">
                <NavLink to={"/category/Ropa"} className={({isActive}) => isActive ? "ActiveOption": "Option"} />
                <NavLink to={"/category/Juguetes"} className={({isActive}) => isActive ? "ActiveOption": "Option"} />
                <NavLink to={"/category/Perfumeria"} className={({isActive}) => isActive ? "ActiveOption": "Option"} />
            </div>
            <CardWidget/>
        </nav>
)
}

export default NavBar
