import React, {useState} from 'react'

function UseStateComponent() {

   const [count, setCount] =  useState(23)

   const increment = () =>{
       setCount(count + 1)
   }
   const decrement = () =>{
    setCount(count - 1)
}

const [person, setPerson] = useState({firstName:"",lastName:""})

const firstNameChange = (e) => {setPerson({...person, firstName : e.target.value})};
const lastNameChange = (e) => {setPerson({...person, lastName : e.target.value})}

const [things, setThings ] = useState (["mouse","keyboard"])

const addNewData = () => {
    const randomNumber = Math.round(Math.random()*10);
    setThings([...things, randomNumber]);
}


    return (
        <div className='container'>
            <h1 className='text-center'>useState</h1>

            <div>
                <ul>
                    {things.map((thing) => {
                        return <li>{thing}</li>
                    })}
                </ul>

                <button onClick={addNewData}>add new data</button>
            </div>

            
            {/* <div className=" mt-5 mx-auto" style={{width:"300px"}}>
                <input type="text" placeholder='firstName' onChange={firstNameChange}/>
                <input type="text" placeholder='lastName' onChange={lastNameChange}/>

                <span>{person.firstName}</span>
                <span>{person.lastName}</span>
            </div> */}
        </div>
    )
}

export default UseStateComponent
