<template>
    <Line :data="data" :options="options" />
</template>
  
<script>

/* Construct Line chart */
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
// import * as chartConfig from './chartConfig.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default {
    name: 'App',
    components: {
        Line
    },
    data() {
        return {
            data: {
                // The last week
                // labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                // The last 7 days in dates (labels)
                labels: ['2023-19-04', '2023-19-04', '2023-20-04', '2023-21-04', '2023-22-04', '2023-23-04', '2023-24-04'],


                // Create mock data of the beef price
                datasets: [{
                    label: 'Beef',
                    backgroundColor: '#f87979',
                    data: [39, 39, 39, 39, 30, 30, 30]
                }]
            },
            options: {
                responsive: true
            }
        }
    }
}
</script>