import React from 'react'
import Graph from './Graph'

const WelcomeMessage = () => {
    return (
        <div className="jumbotron">
                <div className='row'>
                    <div className="col-md-6">
                        <div className='welcome'>Welcome</div>
                        <div className='username'>Derrick.</div>
                    </div>
                    <div className="col-md-6">
                        Your latest workout <br/>
                        <canvas id="myChart"></canvas>
                        <Graph />
                    </div>
                </div>
            </div>
    )
}

export default WelcomeMessage
