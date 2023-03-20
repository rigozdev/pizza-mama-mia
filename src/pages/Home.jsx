import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {


    const [datos, setDatos] = useState([]);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const callData = await fetch('pizzas.json');
            const res = await callData.json();
            setDatos(res);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const handleDetalleBoton = (id) => {
        navigate("/pizza/" + id);
    }

    return (
        <>
            <header className="header-home-component">
                <h1 className="title-pizzeria">¡Pizzería Mamma Mia!</h1>
                <h6 className="subtitle-pizzeria">¡Tenemos las mejores pizzas que podrás encontrar!</h6>
                <hr />
            </header>
            <section className="galerry-container">
                {datos.map(pizza => (
                    <div className="card" key={pizza.id} style={{ width: '18rem' }}>
                        <img src={pizza.img} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"><b>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</b></h5>
                            <p className="card-text">Ingredientes:</p>
                        </div>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">🧀  -{pizza.ingredients[0].charAt(0).toUpperCase() + pizza.ingredients[0].slice(1)}</li>
                            <li className="list-group-item">🍕  -{pizza.ingredients[1].charAt(0).toUpperCase() + pizza.ingredients[1].slice(1)}</li>
                            <li className="list-group-item">🍕  -{pizza.ingredients[2].charAt(0).toUpperCase() + pizza.ingredients[2].slice(1)}</li>
                            <li className="list-group-item">🍕  -{pizza.ingredients[3].charAt(0).toUpperCase() + pizza.ingredients[3].slice(1)}</li>
                            <div className="price-card"><h5 className="price-text">Precio: ${pizza.price}</h5></div>
                        </ul>

                        <div className="card-button-cont">
                            <button type="button" className="btn btn-primary" onClick={() => handleDetalleBoton(pizza.id)}>Ver más 👀</button>{/* este botón lleva al detalle de cada pizza */}
                            <button type="button" className="btn btn-success" onClick={() => navigate("/carrito")}>Agregar 🛒</button>
                        </div>
                    </div>
                ))}
            </section >
        </>)
}