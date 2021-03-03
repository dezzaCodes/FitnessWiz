import React from 'react'

const SelectExercise = ({ exercises, setExerciseSelected }) => {
    function getExerciseSelected(event) {
        // console.log(event.target.value)
        setExerciseSelected(event.target.value)
    }

    function generateDropdownMenu() {
        var dropdownMenu = [];
        for (var i = 0 ; i < exercises.length ; i++) {
            dropdownMenu.push(<option value={exercises[i]['exerciseName']}>{exercises[i]['exerciseName']}</option>);
        }
        return dropdownMenu;
    }

    return (
        <div className='form-group'>
            <select id='exercise-selected' class="form-select" onChange={(e) => getExerciseSelected(e)}>
                <option value='default'>Select exercise </option>
                {generateDropdownMenu()}
            </select>
        </div>
    )
}

export default SelectExercise
