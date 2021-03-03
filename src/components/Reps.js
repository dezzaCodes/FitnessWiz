import React from 'react'
import Button from './Button'
import './style.css'

const Reps = ({ numSets, numReps, weights, setNumReps, setWeights }) => {
    function generateRepsButtons() {
        var allRepButtons = [];
        // allRepButtons.push();
        for (var i = 0 ; i < numSets ; i++) {
            var repButtons = [];
            repButtons.push(<div/>);
            repButtons.push("Reps");
            for (var j = 4 ; j <= 12 ; j++) {
                if (j === 4) {
                    repButtons.push(<Button label={j} id={'rep-' + j + '-' + i} cls='btn-unselected btn-left' onClick={getReps} />);
                } else if (j === 12) {
                    repButtons.push(<Button label={j} id={'rep-' + j + '-' + i} cls='btn-unselected btn-right' onClick={getReps} />);
                } else {
                    repButtons.push(<Button label={j} id={'rep-' + j + '-' + i} cls='btn-unselected' onClick={getReps} />);
                }
            }
            repButtons.push("Weight");
            repButtons.push(<input type="number" name="weight" id={'weight-' + i} min="0" onChange={getWeights} />);
            allRepButtons.push(repButtons);
        }
        return allRepButtons;
    }

    function getReps(event) {
        // console.log(event.target.innerHTML);
        if (document.getElementById('rep-' + numReps[event.target.id.slice(-1)] + '-' + event.target.id.slice(-1))) {
            document.getElementById('rep-' + numReps[event.target.id.slice(-1)] + '-' + event.target.id.slice(-1)).classList.remove('btn-selected')
            document.getElementById('rep-' + numReps[event.target.id.slice(-1)] + '-' + event.target.id.slice(-1)).classList.add('btn-unselected')
        }
        document.getElementById(event.target.id).classList.add('btn-selected')
        document.getElementById(event.target.id).classList.remove('btn-unselected')

        const newReps = numReps.slice();
        var index = parseInt(event.target.id.slice(-1));
        newReps[index] = event.target.innerHTML;
        setNumReps(newReps);
    }

    function getWeights(event) {
        // console.log(event.target.value);
        const newWeights = weights.slice();
        var index = parseInt(event.target.id.slice(-1));
        newWeights[index] = event.target.value;
        setWeights(newWeights);
    }

    return (
        <div>
            {numSets !== 0 && <br/>}
            {numSets !== 0 && generateRepsButtons()}
            {numSets !== 0 && <br/>}
        </div>
    )
}

export default Reps
