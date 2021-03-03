import React, { useState } from 'react';
import MuscleGroup from './MuscleGroup';
import Button from './Button';
import DisplayWorkouts from './DisplayWorkouts';
import ExerciseName from './ExerciseName'
import Sets from './Sets';
import Reps from './Reps';
import SelectExercise from './SelectExercise'
import WelcomeMessage from './WelcomeMessage'

const Exercise = () => {
    var [numSets, setNumSets] = useState(0);
    var [numReps, setNumReps] = useState([]);
    var [weights, setWeights] = useState([]);
    var [exerciseName, setExerciseName] = useState('');
    var [muscleGroup, setMuscleGroup] = useState([]);
    var [workouts, setWorkouts] = useState([]);
    var [exercises, setExercises] = useState([]);
    var [exerciseSelected, setExerciseSelected] = useState('');

    function onSubmit(event) {
        // console.log(event);

        var workout = {
            'exerciseName': exerciseSelected,
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

        document.getElementById('exercise-selected').value = 'default';
        setExerciseSelected('');

        document.getElementById('set-' + numSets).classList.remove('btn-selected');
        setNumSets(0);

        for (var j = 0 ; j < numSets ; j++) {
            document.getElementById('rep-' + numReps[j] + '-' + j.toString()).classList.remove('btn-selected');
        }
        setNumReps([]);
        setWeights([]);    
    }
    
    function onSubmitExercise(event) {
        var exercise = {
            'exerciseName': exerciseName,
            'muscleGroup': muscleGroup,
        };

        console.log(exercise);
        setExercises([...exercises, exercise]);

        fetch('/exercise', {
            method: 'POST',
            body: JSON.stringify({
                content: exercise
            })
        });

        document.getElementById('exercise-name').value = '';
        setExerciseName('');

        for (var k = 0 ; k < muscleGroup.length ; k++) {
            document.getElementById(muscleGroup[k]).classList.remove('btn-selected')
        }
        setMuscleGroup([]);
    }

    function exerpt() {
        var ans = []
        ans.push(<div key='exerpt'/>)

        for (var i = 0 ; i < exercises.length ; i++) {
            var result = ''
            result += i.toString() + '. '
            result += exercises[i]['exerciseName'] + ' | '
            result += exercises[i]['muscleGroup']
            ans.push (result)
            ans.push (<br/>)
        }
        return ans;
    }

    return (
        <form> 
            
            <WelcomeMessage />

            <div className="jumbotron">
                <ExerciseName setExerciseName={setExerciseName} />
                {exerciseName !== '' && <MuscleGroup muscleGroup={muscleGroup} setMuscleGroup={setMuscleGroup} />}
                {exercises.length !== 0 && exerpt()}
                {muscleGroup.length !== 0 && <Button label='Submit' id='submit-exercise' cls='btn' onClick={onSubmitExercise} />}
            </div>

            <div className="jumbotron">
                <SelectExercise exercises={exercises} setExerciseSelected={setExerciseSelected} />

                {exerciseSelected !== '' && <Sets numSets={numSets} setNumSets={setNumSets} />}
                {numSets !== 0 && <Reps numSets={numSets} numReps={numReps} weights={weights} setNumReps={setNumReps} setWeights={setWeights}/>}
                {workouts.length !== 0 && <DisplayWorkouts workouts={workouts} />}
                {weights.length === numSets && numSets !== 0 && <Button label='Submit' id='submit-workout' cls='btn' onClick={onSubmit} />}
            </div>
            
        </form>
    )
}

export default Exercise
