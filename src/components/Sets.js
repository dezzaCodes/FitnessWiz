import React from 'react'
import Button from './Button'

const Sets = ({ numSets, setNumSets }) => {
    function generateSetsButtons () {
        var setButtons = [], maxNumSets = 4;
        for (var i = 0; i <= maxNumSets; i++) {
            setButtons.push(<Button label={i} id={'set-' + i} key={'set-' + i} onClick={getSets} />);
        }
        return setButtons;
    }

    function getSets(event) {
        console.log(event.target.id.slice(-1));
        document.getElementById('set-' + numSets).classList.remove('btn-selected')
        document.getElementById(event.target.id).classList.add('btn-selected')
        setNumSets(parseInt(event.target.id.slice(-1)));
    }

    return (
        <div>
            <label htmlFor="sets">Sets</label><br/>
            {generateSetsButtons()}<br/>
        </div>
    )
}

export default Sets
