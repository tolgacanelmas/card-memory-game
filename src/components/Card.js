import React, { useState } from 'react'
import '../index.css'

const images = ['angular.png', 'cs.jpg', 'java.png', 'react.png', 'vue.png', 'js.png']
const back = 'back.jpg'


const Card = ({ id }) => {
    const [value, setValue] = useState(back)

    const handleChangeImage = () => {
        images.map((image , i) => {
            if(i == id) {
                setValue(image)
            }
        })
    }

    return (
        <img onClick={() => handleChangeImage()} className="card" src={`/images/${value}`}>
        </img>
    )
}


export default Card