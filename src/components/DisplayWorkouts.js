import React from 'react'

const DisplayWorkouts = ({ workouts }) => {
    
    function getWorkouts() {
        var ans = []
        ans.push(<div key='workout'/>)

        for (var i = 0 ; i < workouts.length ; i++) {
            var result = ''
            result += i.toString() + '. '
            result += workouts[i]['exerciseName'] + ' '
            result += workouts[i]['muscleGroup'] + ' '
            result += workouts[i]['numSet'] + ' '
            result += workouts[i]['numReps'] + ' '
            result += workouts[i]['weights']
            ans.push (result)
            ans.push (<br/>)
        }
        return ans;
    }
    
    return (
        <div>
            {getWorkouts()}
        </div>
    )
}

export default DisplayWorkouts
