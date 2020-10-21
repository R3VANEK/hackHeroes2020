import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 7], [1, 2], [2, 4], [3, 2], [4, 7]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom', type : 'time'},
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically 
      <Chart data={data} axes={axes} />
  )
}

export default MyChart