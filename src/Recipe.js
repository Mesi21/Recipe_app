import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""></img>
            <ol>
                {ingredients.map(i =>(
                    <li>{i.text}</li>
                ) )}
            </ol>
        </div>
    );
}

export default Recipe;