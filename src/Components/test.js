import React, { useState, useEffect } from "react";
function Clock({ ...props }) {


    const [productos, setProductos] = useState(
        [
            {
                id: 0,
                title: "",
                price: 0.00,
                description: "asd",
                category: "",
                image: "",
                rating: {
                    rate: 0.0,
                    count: 0
                }

            },
            {
                id: 0,
                title: "",
                price: 0.00,
                description: "asd",
                category: "",
                image: "",
                rating: {
                    rate: 0.0,
                    count: 0
                }

            },
        ]

    );

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products/');
            const data2 = await response.json();
            setProductos(data2);

        }
        fetchData();
    }, []);




   /* const test=(id)=>{
        console.log("hola", id)
        redirect localhost/producto/+id
        /products/+id
    }
    ç
    const delete=(id)=>{
       popup

       peticion de elimianr 



    }*/

    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>price</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td><button onClick={()=>test(item.id)}>editar</button></td>
                            <td><button onClick={()=>delete(item.id)}>editar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )

}


export default Clock;