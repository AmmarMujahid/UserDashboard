import React from 'react'
import { Check } from './assets'

const HeroScoreCard = () => {
  return (
    <div className='flex gap-[8px]'>
    <div>
        <Check />
    </div>
    <div className='flex flex-col gap-[4px]'>
        <div className='text-[12px] text-[#2A36B8]'>Your Credit Score</div>
        <div className='flex gap-[10px]'>
            <span className='text-[14px] font-semibold'>942</span>
            <span className='text-[14px] font-semibold text-[#EB55C1]'>Good</span>
        </div>
    </div>
    </div>
  )
}

export default HeroScoreCard