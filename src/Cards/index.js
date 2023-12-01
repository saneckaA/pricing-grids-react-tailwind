import React, { useState } from 'react'
import Card from '../Card';

const Cards = () => {

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index) => {
        setSelectedCard(index)
    };

    const cardsData = [
        {title: 'Basic', capacity: '100GB', price: '$1.99/Month', benefit1: '100GB storage', benefit2: 'Option to add members', benefit3: 'Extra member benefits'},
        {title: 'Standard', capacity: '200GB', price: '$3.99/Month', benefit1: '200GB storage', benefit2: 'Option to add members', benefit3: 'Extra member benefits'},
        {title: 'Premium', capacity: '2TB', price: '$8.99/Month', benefit1: '2TB storage', benefit2: 'Option to add members', benefit3: 'Extra member benefits'},
    ];
    return (
        <div className='flex flex-col my-6 space-y-10 md:flex-row md:space-y-0 md:space-x-6 md:my-0'>
            {cardsData.map((card, index) => (
                <Card 
                key={index}
                title={card.title}
                capacity={card.capacity}
                price={card.price}
                benefit1={card.benefit1}
                benefit2={card.benefit2}
                benefit3={card.benefit3}
                borderColor={selectedCard === index ? 'bg-fuchsia-700' : 'bg-slate-700'}
                cardSize={selectedCard === index ? 'transform scale-110': ""}
                onClick={() => handleCardClick(index)}

                />
            ))}
        </div>
    )
}

export default Cards;