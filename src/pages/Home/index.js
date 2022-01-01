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
          console.log(alert(error.message))
        })
    },[]);

    const onSearchProducts = ({keyword, category})=> {
      const filterResult = products.filter((product)=>{
       const productLowerCase = product.productName.toLowerCase()
       const keywordLowerCase = keyword.toLowerCase()
       return productLowerCase.includes(keywordLowerCase) && product.category.includes(category)
      });

      setFilteredProducts(filterResult)
    };

    const compareStringAsc = (a, b) => {
      if (a.productName < b.productName){
        return -1;
      } else if (a.productName > b.productName){
        return 1;
      } else {
        return 0;
      }
    }

    const compareStringDesc = (a, b) => {
      if (b.productName < a.productName){
        return -1;
      } else if (b.productName > a.productName){
        return 1;
      } else {
        return 0;
      }
    }

    const onSortProducts = (sortBy) => {
      const rawData = [...filteredProducts]

      switch (sortBy) {
        case 'lowPrice':
          rawData.sort((a,b) => {
            return a.price - b.price;})
          break;
        case 'highPrice':
          rawData.sort((a,b) => {
            return b.price - a.price;})
          
          break;
        case 'az':
          rawData.sort (compareStringAsc);
            break;
        case 'za':
          rawData.sort (compareStringDesc)
            break;
      }
      setFilteredProducts(rawData)
    };

    
    return (
        <div className='container mt-5'>
          <div className='row'>
            <ProductManager onSearchProducts={onSearchProducts} onSortProducts={onSortProducts}/>
            <ListProduct products={filteredProducts}/>
          </div>
            
        </div>
    )
}

export default Index
