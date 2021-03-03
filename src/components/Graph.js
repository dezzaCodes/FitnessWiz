import React from 'react'
// import { Chart } from 'react-chartjs-2'

const Graph = () => {
    function makeGraph() {
        var Chart = require('chart.js');
        var ctx = 'myChart';
        var myChart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'radar',

            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },

            // Configuration options go here
            options: {}
        });
        return myChart;
    };

    return (
        <div>
            {makeGraph}
            <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        </div>
    )
}

export default Graph
