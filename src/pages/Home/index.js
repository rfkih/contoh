import React,{useState, useEffect} from 'react'
import ListProduct from './components/ListProduct'
import ProductManager from './components/ProductManager'


function Index() {

    const init =[
        {
        "id": 1,
        "productName": "Kaos Hitam Polos",
        "price": 50000,
        "productImage": "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/1ccc62f925118a5e2a54f9ca1b0eac4b197477ba_xxl-1.jpg",
        "description": "Round-necked T-shirt in soft cotton jersey.",
        "category": "kaos"
      },
      {
        "id": 2,
        "productName": "Kaos Putih Polos",
        "price": 23000,
        "productImage": "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/1ccc62f925118a5e2a54f9ca1b0eac4b197477ba_xxl-1.jpg",
        "description": "Round-necked T-shirt in soft cotton jersey.",
        "category": "kaos"
      },
      {
        "id": 3,
        "productName": "Kaos Biru Polos",
        "price": 23000,
        "productImage": "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/d1d6422cf983e912fcf35844ef791148b4034571_xxl-1.jpg",
        "description": "Round-necked T-shirt in soft cotton jersey.",
        "category": "kaos"
      },
    ];

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        setTimeout(() => {
            setProducts(init)
        }, 1000)
    },[])

    console.log(products);
    return (
        <div className='row container mt-5'>
            <ProductManager/>
            <ListProduct products={products}/>
        </div>
    )
}

export default Index
