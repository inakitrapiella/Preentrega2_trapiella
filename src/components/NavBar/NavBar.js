import CardWidget from "../CardWidget/CardWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Formula Race</h3>
            <div>
                <button>Cascos</button>
                <button>Remeras</button>
                <button>Guantes</button>
                <button>Monos</button>
            </div>
            <CardWidget/>
        </nav>
    )
}

export default NavBar