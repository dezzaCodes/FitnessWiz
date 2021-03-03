import React from 'react'

export const ExerciseName = ({ setExerciseName }) => {
    function getExercise(event) {
        // console.log(event.target.value);
        setExerciseName(event.target.value);
    }
    
    return (
        <div>
            <label htmlFor="exercise-name">Exercise: </label>
            <input type="text" id='exercise-name'  className="form-control-md" placeholder="Enter exercise" onChange={(e) => getExercise(e)} /><br/><br/>
        </div>
    )
}

export default ExerciseName
