import React from 'react'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'

const TrainingCalendarGraph = ({ activities, selected }) => {
  const data = activities.map(day => ({
    y: day[selected],
    x: day.day_number
  }))

  return (
    <div className='month__graph'>
      <VictoryChart>
        <VictoryAxis
          style={{
            tickLabels: {
              fill: 'red',
              fontSize: 0
            }
          }}
        />
        <VictoryBar data={data} />
      </VictoryChart>
    </div>
  )
}

export default TrainingCalendarGraph
