import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
    return (
        <div className='about'>
            <div className='aboutTop'
                style={{ backgroundImage: `url(${MultiplePizzas})` }}>
            </div>
            <div className='aboutBottom'>
                <h1> About Us </h1>
                <p> At Pratik Pizzaa, we believe great food brings people together. Founded with a passion for flavor and quality, we specialize in crafting delicious, handcrafted pizzas made with fresh ingredients, rich sauces, and unique toppings that satisfy every craving. Whether you're a fan of the classics or looking for bold, new combinations, our menu has something for everyone.
                    From our crispy thin crusts to our cheesy stuffed options, every bite reflects our commitment to taste, quality, and customer satisfaction. With a warm atmosphere and fast, friendly service, Pratik Pizzaa is your go-to spot for family dinners, casual hangouts, or late-night cravings.
                    <br />
                    <p>Come experience the perfect slice—Only at Pratik Pizzaa.</p>
                </p>
            </div>
        </div>
    )
}

export default About;
