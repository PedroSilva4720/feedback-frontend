import React from 'react'

export default ({ label, percentage, colour }) => {
  const Circle = ({ colour, percentage }) => {
    const r = 30
    const circ = 2 * Math.PI * r
    const strokePct = ((100 - percentage) * circ) / 100 // where stroke will start, e.g. from 15% to 100%.
    return (
      <circle
        r={r}
        cx={100}
        cy={100}
        fill='transparent'
        stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
        strokeWidth={'1rem'}
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
        fontSize={'1em'}
      >
        {percentage / 10}
      </text>
    )
  }

  const Label = ({ label }) => {
    return (
      <text
        x='50%'
        y='20%'
        dominantBaseline='central'
        textAnchor='middle'
        fontSize={'1em'}
      >
        {label}
      </text>
    )
  }
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${'100 100'})`}>
        <Circle colour='lightgrey' />
        <Circle colour={colour} percentage={percentage} />
      </g>
      <Text percentage={percentage} />
      <Label label={label} />
    </svg>
  )
}
