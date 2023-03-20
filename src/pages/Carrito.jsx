import { useNavigate } from "react-router-dom"




export default function Carrito() {

    const carrito = [];
    const navigate = useNavigate();
    return (
        <>
            <section className="container-nav-display">
                <article className="container-nav-button ">
                    <button className="btn btn-dark" onClick={() => navigate("/")}>
                        <i className="fa-regular fa-circle-left fa-1x"></i> Volver
                    </button>
                </article>
            </section>
            <section className="table-carrito-container">
                <div className="table-space">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Imágen</th>
                                <th scope="col">Tipo Pizza</th>
                                <th scope="col">Total tipo</th>
                                <th scope="col">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td><button className="btn btn-dark btn-sm" >-</button> 6 <button className="btn btn-dark btn-sm">+</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}