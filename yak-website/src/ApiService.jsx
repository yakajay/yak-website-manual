import { useState, useEffect } from "react"


const ApiService = () => {
    const [productList, setProductList] = useState([])
    const urlLink = "https://fakestoreapi.com/products"

    const demoDataHandler = async () => {
        try {
            const response = await fetch(urlLink)
            const data = await response.json()
            // console.log("data", data);
            setProductList(data)
            console.log("productList", productList);
        } catch (error) {
            console.log(error);
            ;
        }
    }
    useEffect(() => {
        demoDataHandler()
    }, []) 
    return (
        <div>
            Fetching the api response for testing.
            {productList.map( (item) => {
                return (
                    <div>
                       <h1>{item.title}</h1>
                       <h2>{item.price}</h2>
                       <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default ApiService