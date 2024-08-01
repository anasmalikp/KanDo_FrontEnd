import React from 'react'
import './Boards.css'

const Boards = (props) => {
  return (
    <>
        <div className="board_cont">
            <div className="board_media">
                <p>{props.boardname}</p>
            </div>
        </div>
    </>
  )
}

export default Boards