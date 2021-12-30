import React, {useState, useEffect} from 'react'

function UseEffectComponent() {

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(100)

    useEffect(() =>{
        console.log("Useeffect running");
    },[])

    const incrementCount= () =>{
        setCount(count + 1)
    }
    const decrementCount = () =>{
     setCount(count - 1)
    }

    const incrementNumber = () =>{
        setNumber(number + 1)
    }
    const decrementNumber = () =>{
     setNumber(number - 1)
    }
    return (
        <div className='container'>
            <h5>Count</h5>
            <div className='d-flex justify-content-around' style={{width: "200px"}}>
            <button onClick={decrementCount}>
                -
            </button>
            <p className='lead'>{count}</p>
            <button onClick={incrementCount}>
                +
            </button>
            </div>
            <h5>Number</h5>
            <div className='d-flex justify-content-around mt-5' style={{width: "200px"}}>
            <button onClick={decrementNumber}>
                -
            </button>
            <p className='lead'>{number}</p>
            <button onClick={incrementNumber}>
                +
            </button>
            </div>

        </div>
        
    )
}

export default UseEffectComponent
