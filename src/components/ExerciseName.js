import React from 'react'

export const ExerciseName = ({ setExerciseName }) => {
    function getExercise(event) {
        console.log(event.target.value);
        setExerciseName(event.target.value);
    }
    
    return (
        <div>
            <label htmlFor="exercise-name">Exercise</label><br/>
            <input type="text" id='exercise-name' placeholder="Enter exercise" onChange={(e) => getExercise(e)} /><br/><br/>
        </div>
    )
}

export default ExerciseName
