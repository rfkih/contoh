import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from '../../utils/axios'

function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1)


    useEffect(() => {
        axios.get('/products',{ params: { id: params.id} })
        .then(res => {
            setProduct(res.data[0])
        })
        .catch(err => {console.log({err})})
    },[]);

    const quantityBtnHandler = (type)=> {
        switch (type) {
            case "increment":
                setQuantity(quantity +1 )
                break;
            case "decrement":
                setQuantity(quantity -1 )
                break;
        }
    }

    const addToCartHandler = ()=>{

        axios.get('/carts',{ params: { productId: product.id} })
        .then((res) => {
            if (res.data.length){
                
                const cart = res.data[0];

                axios.patch(`/carts/${cart.id}`, {quantity : cart.quantity + quantity})
                .then((res) => {alert("Berhasil Menambahkan Produk");})
                .catch((err) => {alert("gagal Menambahkan produk")})
                
            }else {
                const newCart = {
                ...product, 
                id :new Date().getTime(),
                productId: product.id,
                quantity
                };

                axios.post("/carts",newCart)
                .then((res) => {alert("Berhasil Membuat Cart Baru")})
                .catch((err) => {alert("gagal membuat cart baru")})
            }
        })
        .catch((err) => {alert("gagal mengambil")})


      
    };

    const {id, productImage, productName, price, description} = product
    return (
        <div className="container">
            <div className='row mt-3'>
                <div className='col-6'>
                    <img style={{width:"100%"}} src ={productImage} alt =""/>
                </div>
                <div className='col-6 d-flex flex-column justify-content-center'>
                    <h4>{productName}</h4>
                    <h5>Rp{price}</h5>
                    <p>{description}</p>
                    <div className='d-flex flex-row align-items-center'>
                        <button onClick={() => {quantityBtnHandler("decrement")}} className='btn btn-primary '>-</button>
                        <strong className='mx-3'>{quantity}</strong>
                        <button onClick={() => {quantityBtnHandler("increment")}} className='btn btn-primary '>+</button>
                    </div>
                    <button onClick={addToCartHandler} className='btn btn-success mt-3'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
