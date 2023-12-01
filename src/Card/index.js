import React from 'react'

const Card = ({ title, capacity, price, benefit1, benefit2, benefit3, borderColor, onClick, cardSize }) => {
    return (
        <div className={`bg-slate-700 rounded-xl text-white cursor-pointer ${borderColor} ${cardSize} `} onClick={onClick}>
            <div className='flex flex-col items-center p-10 mx-3 mt-3 rounded-t-xl bg-slate-800 border-b border-slate-700'>
                <div className='uppercase'>{title}</div>
                <div className='text-5xl mt-10 font-serif'>{capacity}</div>
                <div className='mt-2'>{price}</div>
                <button className='mt-3 mb-10 px-8 py-2 border border-fuchsia-600 rounded-lg hover:bg-fuchsia-800 hover:border-fuchsia-800 duration-200'>Purchase</button>
            </div>
            <div className='p-10 mx-3 mb-3 rounded-b-xl bg-slate-800'>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-row items-center gap-2'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <span>{benefit1}</span></div>
                    <div className='flex flex-row items-center gap-2'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <span>{benefit2}</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <span>{benefit3}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;