import React, { useState } from 'react'
import '../index.css'
import Card from './Card'


const Board = () => {

    const renderCard = (id) => {
        return <Card id={id}/>
    }

    return(
        <div className="board-container">
            {renderCard(0)}
            {renderCard(1)}
            {renderCard(2)}
            {renderCard(3)}
            {renderCard(4)}
            {renderCard(5)}
            {renderCard(2)}
            {renderCard(4)}
            {renderCard(6)}
            {renderCard(1)}
            {renderCard(3)}
            {renderCard(5)}
        </div>
    )
}

export default Board