import React from 'react'

const pattern = () => {
  return (
    <>
      {/* <!-- Glowing Pattern --> */}
      <div className='absolute inset-0'>
        <svg height='50%' width='90%'>
          <defs>
            {/* <!-- Pattern --> */}
            <pattern
              id='glow-pattern'
              width='20'
              height='20'
              patternUnits='userSpaceOnUse'
            >
              <line x2='10' y1='20' className='stroke-white' strokeWidth={0.5} />
            </pattern>
            {/* <!-- Gradient for fade effect --> */}
            <linearGradient id='fade-gradient' x1='0' x2='0' y1='0' y2='1'>
              <stop offset='0%' stopColor='white'  />
              <stop offset='100%' stopColor='transparent'/>
            </linearGradient>
            {/* <!-- Mask --> */}
            <mask id='fade-mask'>
              <rect fill='url(#fade-gradient)' width='100%' height='100%' />
            </mask>
          </defs>
          {/* <!-- Apply the Pattern and Mask --> */}
          <rect
            fill='url(#glow-pattern)'
            mask='url(#fade-mask)'
            width='100%'
            height='100%'
          />
        </svg>
      </div>
    </>
  )
}

export default pattern
