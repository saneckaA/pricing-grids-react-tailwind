import React from 'react'
import Card from '../Card';

function Cards() {
    return (
        <div className='flex flex-col my-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:my-0'>
            <Card title="Basic" capacity="100GB" price="$1.99/Month" benefit1="100GB storage" benefit2="Option to add members" benefit3="Extra member benefits" />
            <Card title="Standard" capacity="200GB" price="$3.99/Month" benefit1="200GB storage" benefit2="Option to add members" benefit3="Extra member benefits" />
            <Card title="Premium" capacity="2TB" price="$8.99/Month" benefit1="2TB storage" benefit2="Option to add members" benefit3="Extra member benefits" />
        </div>
    )
}

export default Cards;