import React, { useState } from 'react';
import MuscleGroup from './MuscleGroup';
import Button from './Button';
import DisplayWorkouts from './DisplayWorkouts';
import ExerciseName from './ExerciseName'
import Sets from './Sets';
import Reps from './Reps';

const Exercise = () => {
    var [numSets, setNumSets] = useState(0);
    var [numReps, setNumReps] = useState([]);
    var [weights, setWeights] = useState([]);
    var [exerciseName, setExerciseName] = useState('');
    var [muscleGroup, setMuscleGroup] = useState([]);
    var [workouts, setWorkouts] = useState([]);

    function onSubmit(event) {
        console.log(event);
        for (var i = 0 ; i < event.target.form.length ; i++) {
            console.log(event.target.form[i].value);
        }

        var workout = {
            'exerciseName': exerciseName,
            'muscleGroup': muscleGroup,
            'numSet': numSets,
            'numReps': numReps.slice(0, numSets),
            'weights': weights.slice(0, numSets),
        };

        console.log(workout);
        setWorkouts([...workouts, workout]);

        fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                content: workout
            })
        });

        document.getElementById('exercise-name').value = '';
        setExerciseName('');

        for (var k = 0 ; k < muscleGroup.length ; k++) {
            document.getElementById(muscleGroup[k]).classList.remove('btn-selected')
        }
        setMuscleGroup([]);

        document.getElementById('set-' + numSets).classList.remove('btn-selected');
        setNumSets(0);

        for (var j = 0 ; j < numSets ; j++) {
            document.getElementById('rep-' + numReps[j] + '-' + j.toString()).classList.remove('btn-selected');
        }
        setNumReps([]);
        setWeights([]);    
    }

    return (
        <form> 
            <ExerciseName setExerciseName={setExerciseName} />
            <MuscleGroup muscleGroup={muscleGroup} setMuscleGroup={setMuscleGroup} /><br/>
            <Sets numSets={numSets} setNumSets={setNumSets} />
            {numSets !== 0 && <Reps numSets={numSets} numReps={numReps} weights={weights} setNumReps={setNumReps} setWeights={setWeights}/>}
            { workouts !== 0 && <DisplayWorkouts workouts={workouts} />}
            <Button label='Submit' id='submit' onClick={onSubmit} />
        </form>
    )
}

export default Exercise
