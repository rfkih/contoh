import React,{useState, useEffect} from 'react'
import ListProduct from './components/ListProduct'
import ProductManager from './components/ProductManager'
import axios from 'axios';


function Index() {

    

    const [products, setProducts] = useState([]);
    const [finalProducts, setFinalProducts] = useState([])
    const [paginationState, setPaginationState] = useState({page: 1, maxPage:0, itemsPerPage: 5})
    const [filterState, setFilterState] = useState ({keyword:'', category:'',sortBy:''})

    useEffect( async () =>{
        axios.get("http://localhost:2021/products")
        .then((res) => {
          const {data} = res
          setProducts(data);
          setFinalProducts(data)
          setPaginationState({...paginationState, maxPage: Math.ceil(data.length/ paginationState.itemsPerPage)})
        })
        .catch((error) => {
          console.log(alert(error.message))
        })
    },[]);

    useEffect(() => {
      createFinalProducts()
    },[filterState])
    

    // const onFilterProducts = (obj)=> {
    //   const {keyword, category} = obj;
    //   const filterResult = products.filter((product)=>{
    //    const productLowerCase = product.productName.toLowerCase()
    //    const keywordLowerCase = keyword.toLowerCase()
    //    return productLowerCase.includes(keywordLowerCase) && product.category.includes(category)
    //   });

    //   setFilteredProducts(filterResult)
    // };

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

    // const onSortProducts = (sortBy) => {
    //   const rawData = [...filteredProducts]

    //   switch (sortBy) {
    //     case 'lowPrice':
    //       rawData.sort((a,b) => {
    //         return a.price - b.price;})
    //       break;
    //     case 'highPrice':
    //       rawData.sort((a,b) => {
    //         return b.price - a.price;})
          
    //       break;
    //     case 'az':
    //       rawData.sort (compareStringAsc);
    //         break;
    //     case 'za':
    //       rawData.sort (compareStringDesc)
    //         break;
    //   }
    //   setFilteredProducts(rawData)
    // };

    const createFinalProducts = () => {

      const {keyword, category, sortBy} = filterState
      
      const filterResult = products.filter((product)=>{
      const productLowerCase = product.productName.toLowerCase()
      const keywordLowerCase = keyword.toLowerCase()
     return productLowerCase.includes(keywordLowerCase) && product.category.includes(category)
    });
    

      switch (sortBy) {
        case 'lowPrice':
          filterResult.sort((a,b) => {
            return a.price - b.price;})
          break;
        case 'highPrice':
          filterResult.sort((a,b) => {
            return b.price - a.price;})
          
          break;
        case 'az':
          filterResult.sort (compareStringAsc);
            break;
        case 'za':
          filterResult.sort (compareStringDesc)
            break;
      }
      setFinalProducts(filterResult)
      
    };

    return (
        <div className='container mt-5'>
          <div className='row'>
            <ProductManager 
            setFilterState={setFilterState}
            filterState={filterState}
            />
            <ListProduct products={finalProducts}/>
          </div>
            
        </div>
    )
}

export default Index
