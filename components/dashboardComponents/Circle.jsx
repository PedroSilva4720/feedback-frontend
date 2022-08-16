import React from 'react'

export default ({ label, percentage, colour }) => {
  const Circle = ({ colour, percentage }) => {
    const r = 30
    const circ = 2 * Math.PI * r
    const strokePct = ((100 - percentage) * circ) / 100 // where stroke will start, e.g. from 15% to 100%.
    return (
      <circle
        r={r}
        cx={50}
        cy={50}
        fill='transparent'
        stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
        strokeWidth={'0.9rem'}
        strokeDasharray={circ}
        strokeDashoffset={percentage ? strokePct : 0}
      ></circle>
    )
  }

  const Text = ({ percentage }) => {
    return (
      <text
        x='50%'
        y='50%'
        dominantBaseline='central'
        textAnchor='middle'
        fontSize={'0.9em'}
      >
        {percentage / 10}
      </text>
    )
  }

  const Label = ({ label }) => {
    return (
      <text
        x='50%'
        y='7%'
        dominantBaseline='central'
        textAnchor='middle'
        fontSize={'0.9em'}
      >
        {label}
      </text>
    )
  }
  return (
    <svg width={100} height={100}>
      <g transform={`rotate(-90 ${'50 50'})`}>
        <Circle colour='lightgrey' />
        <Circle colour={colour} percentage={percentage} />
      </g>
      <Text percentage={percentage} />
      <Label label={label} />
    </svg>
  )
}
