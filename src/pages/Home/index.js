import React,{useState, useEffect} from 'react'
import ListProduct from './components/ListProduct'
import ProductManager from './components/ProductManager'
import axios from 'axios';


function Index() {

    

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect( async () =>{
        axios.get("http://localhost:2021/products")
        .then((res) => {
          setProducts(res.data);
          setFilteredProducts(res.data)
        })
        .catch((error) => {

        })
    },[]);

    const onSearchProducts = (keyword)=> {
      const filterResult = products.filter((product)=>{
       const productLowerCase = product.productName.toLowerCase()
       const keywordLowerCase = keyword.toLowerCase()
       
       return productLowerCase.includes(keywordLowerCase)
      })

      setFilteredProducts(filterResult)
    }

    console.log(products);
    return (
        <div className='row container mt-5'>
            <ProductManager onSearchProducts={onSearchProducts}/>
            <ListProduct products={filteredProducts}/>
        </div>
    )
}

export default Index
