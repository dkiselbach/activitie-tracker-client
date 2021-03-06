export const graphStyle = () => {
  const colorPrimary = '#d9534f'
  const colorSecondary = '#5cb85c'
  const colorTertiary = '#f0ad4e'
  const colorDark = '#414141'
  const colorLight = '#fff'

  const colorGreen = '#7c8e51'
  const colorComplement = '#d30068'

  return {
    parent: {
      background: colorLight,
      boxSizing: 'border-box',
      display: 'inline',
      padding: 0,
      fontFamily: "'Jost', sans-serif",
      transform: 'translateX(50%)',
      width: '50%',
      height: '100%'
    },
    // INDEPENDENT AXIS
    axisSplits: {
      axis: { stroke: colorDark, strokeWidth: 1 },
      ticks: {
        stroke: colorDark,
        strokeWidth: 1,
        size: 1
      },
      tickLabels: {
        fill: colorDark,
        fontFamily: 'inherit',
        fontSize: 10,
        angle: 45
      }
    },
    // DATA SET ONE
    axisOne: {
      // grid: {
      //   stroke: colorDark,
      //   strokeWidth: 0.5
      // },
      axis: { stroke: colorDark, strokeWidth: 1 },
      ticks: { strokeWidth: 1 },
      tickLabels: {
        fill: colorPrimary,
        fontFamily: 'inherit',
        fontSize: 10
      }
    },
    lineOne: {
      data: { stroke: colorPrimary, strokeWidth: 1 }
    },
    // DATA SET TWO
    axisTwo: {
      axis: { stroke: colorDark, strokeWidth: 1 },
      tickLabels: {
        fill: colorSecondary,
        fontFamily: 'inherit',
        fontSize: 10
      }
    },
    lineTwo: {
      data: { stroke: colorSecondary, strokeWidth: 1 }
    },
    // DATA SET THREE
    axisThree: {
      axis: { stroke: colorDark, strokeWidth: 1 },
      tickLabels: {
        fill: colorTertiary,
        fontFamily: 'inherit',
        fontSize: 10
      }
    },
    lineThree: {
      data: { stroke: colorTertiary, strokeWidth: 1 }
    },
    // STYLES SPECIFIC TO SMALL BAR GRAPH
    // Main Y axis
    sgMainAxis: {
      axis: { stroke: colorDark, strokeWidth: 0.5 },
      ticks: {
        stroke: colorDark,
        strokeWidth: 1,
        size: 2
      },
      tickLabels: {
        fill: colorDark,
        fontFamily: 'inherit',
        fontSize: 16
      }
    },
    // X axis
    sgXAxis: {
      grid: {
        stroke: colorDark,
        strokeWidth: 0.2
      },
      axis: { stroke: colorDark, strokeWidth: 0.5 },
      ticks: { strokeWidth: 1 },
      tickLabels: {
        fill: colorDark,
        fontFamily: 'inherit',
        fontSize: 10
      }
    },
    // Bar
    sgBar: {
      data: {
        fill: colorGreen,
        stroke: colorDark,
        fillOpacity: 0.75,
        strokeWidth: 1
      },
      labels: {
        fontSize: 12,
        fontFamily: "'Jost', sans-serif"
      }
    },
    // Label
    title: {
      fill: colorGreen,
      fontFamily: 'inherit',
      fontSize: 20,
      fontWeight: 400
    },
    // STYLES SPECIFIC TO CALENDAR SUMMARY BAR GRAPH
    csMainAxis: {
      axis: { stroke: colorComplement, strokeWidth: 0.75 },
      tickLabels: {
        fill: colorDark,
        fontFamily: 'inherit',
        fontSize: 0
      },
      axisLabel: {
        fontFamily: 'inherit'
      }
    },
    csBar: {
      data: {
        fill: colorComplement,

        fillOpacity: 0.9,
        strokeWidth: 0
      }
    }
  }
}
