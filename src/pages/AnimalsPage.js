import React from 'react';
import './AnimalsPage.css';
import foxImage from '../images/fox.jpeg'; 
import rabbitImage from '../images/rabbitpic1.jpg';
import rhinoImage from '../images/rhino.jpeg';
import lionImage from '../images/lion.jpeg';


const animalsData = [
    {
        name: 'Rabbit',
        image: rabbitImage,
        fact: 'Rabbits have a complex social structure and can live in large colonies. A rabbits teeth never stop growing, which is why they need to constantly nibble on grasses and other vegetation.',
    },
    {
        name: 'Fox',
        image: foxImage,
        fact: 'Foxes have a diverse diet and can eat both plant and animal foods. Foxes use the Earths magnetic field to hunt. They can see the magnetic field as a "ring of shadow" on their eyes that darkens as they head towards magnetic north.',
    },
    {
        name: 'Rhino',
        image: rhinoImage,
        fact: 'The rhino’s horn is made from keratin, the same type of protein that makes up hair and fingernails. Rhinos have poor eyesight, but their sense of smell and hearing are very well developed.',
    },
    {
        name: 'Lion',
        image: lionImage,
        fact: 'A lion’s roar can be heard from 5 miles away. Lions spend much of their time resting; they are inactive for about 20 hours per day.',
    },
];

function ParallaxCard({ name, fact, image, index }) {
    const cardTheme = index % 2 === 0 ? 'dark' : 'light';
    return (
        <div className={`parallax-card ${cardTheme}`} style={{ backgroundImage: `url(${image})` }}>
            <div className="image-overlay"></div> 
            <div className="parallax-content">
                <h3>{name}</h3>
                <p>{fact}</p>
            </div>
        </div>
    );
}

function AnimalsPage() {
    return (
        <div className="animals-container">
            {animalsData.map((animal, index) => (
                <ParallaxCard key={index} name={animal.name} fact={animal.fact} image={animal.image} />
            ))}
        </div>
    );
}

export default AnimalsPage;