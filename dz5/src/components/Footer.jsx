import React from 'react'
import log1 from '../images/Frame-1.svg'
import log2 from '../images/Frame-2.svg'
import log3 from '../images/Frame.svg'
import log4 from '../images/Frame-3.svg'

export default function Footer() {
  return (
    <div className='flex items-center justify-center p-[10px] gap-4'>
      <img src={log1} alt="Frame-1" />
      <img src={log2} alt="Frame-2" />
      <img src={log3} alt="Frame-3" />
      <img src={log4} alt="Frame" />
    </div>
  )
}
