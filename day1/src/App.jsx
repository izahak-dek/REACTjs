import React,{useState} from 'react';


const App = () => {
     const [name , setName] = useState('hamze')
     const [age , setAge]  = useState(18)

     const changeMassage =()=>{
        setName('zihaam')
        setAge(17)


     }

  return (
    <div>
       
        <p>{name} is {age} years old</p>
        <button onClick={changeMassage}>change massage</button>
    </div>
  )
}

export default App; 