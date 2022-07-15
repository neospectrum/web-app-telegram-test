import React, {useState} from 'react'
import './Card.css'
import Button from '../Button/Button'

function Card({character, onAdd, onRemove}) {
    const [count, setCount] = useState(0)
    const {title, Image, price, id} = character

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(character);
    }
    
    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(character);
    }

  return (
    <div className='card'>
        <span 
            className={`${count !== 0 ? 'card__badge' : 'card__badge--hidden'}`}
        >
            {count}
        </span>
        <div className="image__container">
            <img src={Image} alt={title} />
        </div>
        <h4 className='card__title'>
            {title} | <span className='card__price'>{price}$</span>
        </h4>

            <div className="btn-container">
                {count !== 0 ? 
                (<Button title={'+'} type={'add'} onClick={handleIncrement}/>)
                : (
                <Button title={'Add'} type={'add'} onClick={handleIncrement}/>
                )}
                {count !== 0 ? (
                <Button title={'-'} type={'remove'} onClick={handleDecrement}/>
                ) : (
                    ""
                )}
            </div>
    </div>
  )
}

export default Card