import React, {useState} from 'react'


//props : setFilterState, filterState, paginationState
 function ProductManager(props) {

    const{ setFilterState, filterState, paginationState, setPaginationState} = props

    const{page, maxPage} = paginationState

   const [formState,setFormState] = useState(
       {keyword: "", 
       category: "", 
    });



    const handleChange = (e) => {
        const newState = { [e.target.name] : e.target.value }

        setFormState({...formState, [e.target.name] : e.target.value})
    };

    const handleSortChange = (e) => {
        setFilterState({...filterState, [e.target.name]: e.target.value });
    };

    const btnSearchHandler = () => {
        setFilterState({...filterState, ...formState});
        setPaginationState({...paginationState, page: 1})
    };

    const btnNextPageHandler = () => {
        if (page < maxPage)
        setPaginationState ({...paginationState, page :page + 1 })
    }

    const btnPrevPageHandler = () => {
        if (page > 1 )
        setPaginationState ({...paginationState, page :page - 1 })
    }



    return (
        <div className="col-3">
            {/* filter */}
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
            {/* sort */}
            <div className="cart mt-4">
                <div className="card-header">
                    <strong>Sort Products</strong>
                </div>
                <div className="card-body">
                    <label className="mb-2"> Sort by</label>
                    <select 
                     name="sortBy"
                     className='form-control'
                     onChange={handleSortChange}>
                         <option value="">Default</option>
                         <option value="lowPrice">Lowest Price</option>
                         <option value="highPrice">Highest Price</option>
                         <option value="az">A-Z</option>
                         <option value="za">Z-A</option>
                     </select>
                </div>
            </div>
            {/* pagination */}
            <div className="mt-3">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <button onClick={btnPrevPageHandler} className={`btn btn-dark ${ !(page > 1) && 'disabled' } ` }>{"<"}</button>
                    <div className="text-center">Page {page} of {maxPage}</div>
                    <button onClick={btnNextPageHandler} className={`btn btn-dark ${ !(page < maxPage) && 'disabled' } ` }>{">"}</button>
                </div>
            </div>
        </div>
    )

   
    
   
}

export default ProductManager