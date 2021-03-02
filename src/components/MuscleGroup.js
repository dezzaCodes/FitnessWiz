import React from 'react'
import Button from './Button'

const MuscleGroup = ({ muscleGroup, setMuscleGroup }) => {
    function getMuscleGroups(event) {
        // console.log(event.target.id);
        if (muscleGroup.includes(event.target.id)) {
            setMuscleGroup(muscleGroup.filter(item => item !== event.target.id));
            document.getElementById(event.target.id).classList.add('btn-unselected')
            document.getElementById(event.target.id).classList.remove('btn-selected')
        } else {
            setMuscleGroup([...muscleGroup, event.target.id]);
            document.getElementById(event.target.id).classList.add('btn-selected')
            document.getElementById(event.target.id).classList.remove('btn-unselected')
        }
        // console.log(muscleGroup);
    }

    return (
        <>
            <label htmlFor="muscle_groups">Muscle Groups</label><br/>
            <div className="btn-group" role="group" aria-label="Basic example">
                <div>
                    <Button label='Chest' id='chest' onClick={getMuscleGroups} />
                    <Button label='Shoulders' id='shoulders' onClick={getMuscleGroups} />
                    <Button label='Triceps' id='triceps' onClick={getMuscleGroups} />
                </div>
                <div>
                    <Button label='Back' id='back' onClick={getMuscleGroups} />
                    <Button label='Biceps' id='biceps' onClick={getMuscleGroups} />
                    <Button label='Abs' id='abs' onClick={getMuscleGroups} />
                </div>
                <div>
                    <Button label='Quads' id='quads' onClick={getMuscleGroups} />
                    <Button label='Hamstrings' id='hamstrings' onClick={getMuscleGroups} />
                    <Button label='Calves' id='calves' onClick={getMuscleGroups} />
                </div>
            </div>
            <br/>
        </>
    )
}

export default MuscleGroup
