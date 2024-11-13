import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cakeActions } from '../redux/features/cake/cakeSlice'

const CakeContainer = () => {
    const numOfCake=useSelector((state)=>state.cake.numOfCakes)
    const dispatch=useDispatch()
    console.log(numOfCake)
  return (
    <div>
    <h2>No of Cakes :- {numOfCake} </h2>
    <button onClick={()=>dispatch(cakeActions.ordered())}>Buy Cake</button>
    <button onClick={()=>dispatch(cakeActions.restocked(5))}>Restock</button>
</div>
  )
}

export default CakeContainer