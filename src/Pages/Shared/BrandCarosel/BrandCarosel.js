import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand from '../../../assets/brand/brand.png';
import brand2 from '../../../assets/brand/brand-2.jpg';

const BrandCarosel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand2}
                        alt="Second slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarosel;