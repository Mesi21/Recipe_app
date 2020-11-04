import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <div className={style.descript}>
                <img className={style.image} src={image} alt=""></img>
                <div className={style.details}>
                    <p>
                        <strong>Calories: </strong>
                        {calories}
                    </p>
                    <p><strong>Ingredients:</strong></p>
                    <ol>
                        {ingredients.map(i =>(
                            <li>{i.text}</li>
                        ) )}
                    </ol> 
                </div>
               
            </div>
        </div>
    );
}

export default Recipe;