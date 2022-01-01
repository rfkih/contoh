import React, {useState} from 'react'

 function ProductManager(props) {

//    const [keyword, setKeyword] = useState('')
//    const [category,setCategory] = useState('')
   const [formState,setFormState] = useState({keyword: "", category: ""})


    // const handleKeywordChange = (e) =>{
    //     setKeyword(e.target.value)
    // }
    // const handleCategoryChange = (e) =>{
    //     setCategory(e.target.value)
    // }

    const handleChange = (e) => {
        const newState = { [e.target.name] : e.target.value }

        setFormState({...formState, [e.target.name] : e.target.value})
    };

    const btnSearchHandler = () => {
        props.onSearchProducts({
            keyword: formState.keyword,
            category: formState.category,
        })
    };

    return (
        <div className="col-3">
            <div className="card">
                <div className="card-header">
                    <strong>Filter products</strong>
                </div>
                <div className="card-body">
                    <label>Product Name</label>
                    <input 
                    name = "keyword"
                    type="text" 
                    className='form-control mb-3' 
                    onChange={handleChange}
                    // value={keyword}
                    />
                    <label htmlFor='searchCategory'>Product Category</label>
                    <select 
                        name='category' 
                        className='form-control' 
                        onChange={handleChange}>
                            <option value="">All Items</option>
                            <option value="kaos">Kaos</option>
                            <option value="celana">Celana</option>
                            <option value="aksesoris">Aksesoris</option>
                    </select>
                    <button 
                        onClick={btnSearchHandler}
                        className="btn btn-outline-primary mt-3 d-block w-100">Search</button>
                </div>
            </div>
        </div>
    )

   
    
   
}

export default ProductManager