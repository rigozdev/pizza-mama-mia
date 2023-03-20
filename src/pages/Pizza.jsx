import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const promesaFake = () => new Promise((resolve) => setTimeout(resolve, 1000));


export default function Pizza() {
    const params = useParams();

    const navigate = useNavigate();

    const [infoPizza, setInfoPizza] = useState({});
    const [loading, setLoading] = useState(true);

    const getInfoPizza = async () => {
        await promesaFake();
        try {
            const peticionPizza = await fetch('/picsas.json');
            const dataPizza = await peticionPizza.json();
            dataPizza.map((item) => {
                if (item.id == params.id) {
                    setInfoPizza(item);
                }
            })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getInfoPizza();
    }, []);

    return (
        <>
            <section className="container-nav-display">
                <article className="container-nav-button ">
                    <button className="btn btn-dark" onClick={() => navigate("/")}>
                        <i className="fa-regular fa-circle-left fa-1x"></i> Volver
                    </button>
                </article>
            </section>
            {loading ?
                (<>
                    <div className="loading-container">
                        <p>Cargando ...</p>
                    </div>
                </>) :
                (<>

                    <section className="desc-pizza-info">
                        <article className="container-card">
                            <img src={infoPizza.img} alt="" className="img-pizza-desc"></img>
                            <div className="container-desc">
                                <h5 className="title-card">Pizza {infoPizza.name}🍕</h5>
                                <p className="text-card">{infoPizza.desc}</p>
                                <hr />
                                <p className="title-ingredients"><b>Ingredientes:</b></p>
                                <div className="container-ingredients">
                                    <ul className="un-list-ing">
                                        {infoPizza.ingredients.map(ingrediente => (
                                            <li className="elem-ingredients-list" key={ingrediente}><small className="text-muted">{ingrediente}</small></li>
                                        ))}
                                    </ul>
                                    <h5>Precio: ${infoPizza.price}</h5>
                                </div>
                            </div>
                        </article>
                    </section>

                </>)
            }
        </>
    )
}