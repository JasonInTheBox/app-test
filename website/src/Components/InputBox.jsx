import React, {useState} from 'react'

function InputBox(){
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //to show input
    function handleInputChange(event){  
        setNewIngredient(event.target.value);
    }
        
    function handleKeyDown(event){
        if(event.key === 'Enter'){
            processInput();
        }
    }

    function processInput(){
        const splitValues = newIngredient.split(",").map((item) => item.trim()).filter((item) => item !== "");
        setIngredients(splitValues);
    }

    //async
    // async function processInput(){
    //     const splitValues = newIngredient.split(",").map((item) => item.trim()).filter((item) => item !== "");
    //     setIngredients(splitValues);

    //     if(splitValues.length > 0){
    //         setLoading(true);
    //         setError(null);
    //         try{
    //             const response = await fetch('',{
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({ingredients: splitValues}),
    //             });

    //             if(!response.ok){
    //                 throw new Error(`Error: ${response.statusText}`)
    //             }

    //             const data = await response.json();
    //             setResult(data);
    //         } catch (err){
    //             setError(`Failed' : ${error.message}`);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }else{
    //         alert("oh yeah");
    //     }
    // }

    loading && <p>Loading...</p>

    error && <p style={{ color: 'red' }}>{error}</p>

    result && (
        <div className="results">
            <h2>Recipes</h2>
            <ul>
                {result.recipes.map((recipe, index) => (
                    <li key={index}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    )


    return(
        <div className="input">
            <h1 className="enter-text">Enter your available ingredients!</h1>
            <input type="text" className="enter-box" onKeyDown={handleKeyDown} placeholder="Enter your ingredients (e.g., broccoli, celery, pork belly)" value={newIngredient} onChange={handleInputChange} id="comma-input"></input>
            <button className="inputCook" onClick={processInput}>Le Cook!</button>

            <ul className="no-labels">
                {ingredients.map((ingre, index) => 
                    <li key={index}>
                        {ingre}
                    </li>
                )}
            </ul>



            <p>{JSON.stringify(ingredients)}</p>
        </div>
    );
}

export default InputBox
