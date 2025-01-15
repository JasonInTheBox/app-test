import React, {useState} from 'react'

function InputBox(){
    const [ingredient, setIngredient] = useState('');

    return(
        <>
        <div className="input">
            <h1>Enter Available Ingredients!</h1>

            <div>
                <input type="text" placeholder="Enter your ingredients"></input>
                <button className="inputCook">Cook!</button>
            </div>

        </div>
        </>
    );
}

export default InputBox
