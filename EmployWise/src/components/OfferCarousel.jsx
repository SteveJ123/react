import React from 'react'
import { cardsData } from "../../factory/navbar/home/hero_section";
import Carousel2 from '../carousel2';

function OfferCarousel() {
    return (
        <div className='mt-10 pt-10'>
            <div>
            <h1>Category 1</h1>
            <Carousel2 images={cardsData} />
            </div>
            <div>
            <h1>Category 2</h1>
            <Carousel2 images={cardsData} />
            </div>
        </div>
    )
}

export default OfferCarousel