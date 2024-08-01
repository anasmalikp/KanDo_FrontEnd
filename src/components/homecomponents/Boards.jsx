import React from 'react'
import './Boards.css'

const Boards = (val) => {
  console.log(val)
  return (
    <>
        <div className="board_cont">
            <div className="board_media">
                <p>{val.val.boardname}</p>
            </div>
        </div>
    </>
  )
}

export default Boards