import React from 'react'
import { useSelector } from 'react-redux'

const CakeContainer = () => {
    const numOfCake=useSelector((state)=>state.cake.numOfCakes)
    console.log(numOfCake)
  return (
    <div>
    <h2>No of Cakes :- {numOfCake} </h2>
    <button>Buy Cake</button>
</div>
  )
}

export default CakeContainer