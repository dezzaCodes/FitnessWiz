import React from 'react'
import Button from './Button'

const Sets = ({ numSets, setNumSets }) => {
    function generateSetsButtons () {
        var setButtons = [], maxNumSets = 4;
        for (var i = 0; i <= maxNumSets; i++) {
            if (i === 0) {
                setButtons.push(<Button label={i} id={'set-' + i} key={'set-' + i} cls='btn-unselected btn-left' onClick={getSets} />);
            } else if (i === maxNumSets) {
                setButtons.push(<Button label={i} id={'set-' + i} key={'set-' + i} cls='btn-unselected btn-right' onClick={getSets} />);
            } else {
                setButtons.push(<Button label={i} id={'set-' + i} key={'set-' + i} cls='btn-unselected' onClick={getSets} />);
            }
            
        }
        return setButtons;
    }

    function getSets(event) {
        // console.log(event.target.id.slice(-1));
        document.getElementById('set-' + numSets).classList.remove('btn-selected')
        document.getElementById('set-' + numSets).classList.add('btn-unselected')
        document.getElementById(event.target.id).classList.add('btn-selected')
        document.getElementById(event.target.id).classList.remove('btn-unselected')
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
