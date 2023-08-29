import React, { useState } from 'react'

const App = () =>  {
    let [items,setItems] = useState([
        {
            id:1,
            image:'data:image/jpeg;base64,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',
            
            itemName:"Iphone 14 promax",
            description:"moblie phone",
            price:"1200$"
        },
        {
            id:2,
            itemName:"hamze",
            description:"moblie phone",
            price:"1200$"
        },
        {
            id:3,
            itemName:"ali",
            description:"moblie phone",
            price:"1200$",
        },
        {
            id:4,
            itemName:"Iphone 14 promax",
            description:"moblie phone",
            price:"1200$"
        },
        {
            id:5,
            itemName:"hamze",
            description:"moblie phone",
            price:"1200$"
        },
        {
            id:6,
            itemName:"ali",
            description:"moblie phone",
            price:"1200$",
        }
    ])
    const clear =() =>{
        setItems([

        ])
    }
  return (
    <div>
        <h1 className='bg-blue-900 text-3xl m-auto text-center uppercase text-white'>outputting list</h1>
        <div className="flex flex-wrap m-auto items-center gap-5">
            {items.map((item)=>(
            <div className='bg-blue-600 p-10 m-8 text-white  w-[300px]  rounded-5 justify-between  gap-3' key={items.id}>
                <h1>itemsname: {item.itemName}</h1>
                <p>description: {item.description}</p>
                <span className='bg-orange-500 p-1 m-auto text-1xl rounded-md  '>price: {item.price}</span>
            </div>
        ))}
        

        </div>
        <button onClick={clear} className='bg-blue-500 text-white p-3 m-auto justify-center mx-[600px] '>clear all</button>
        
    </div>
  )
}

export default App