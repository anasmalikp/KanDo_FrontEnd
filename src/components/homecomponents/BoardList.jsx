import React, { useEffect, useState } from 'react'
import { GetAllBoards } from '../../services/BoardServices'
import Boards from './Boards'

const BoardList = (boards) => {

   
  return (
    <div className='boardlist'>
        {boards.boards.map(val=>(
            <Boards val={val} />
        ))}
    </div>
  )
}

export default BoardList