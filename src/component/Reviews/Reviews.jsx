import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { ProgressBarData } from '../../data/Data'
import { Line } from 'rc-progress'

// const Reviews = () => {
//   return (
//       <div className='Reviews' style={{display: 'flex'}}>
//         <span>500</span>
//         <Line percent={20} strokeWidth={2} strokeColor="#00FF00" />
//       </div>
//     )
// }

const Reviews = () => {
    return (
        <div className="Reviews">
            {ProgressBarData.map((rev)=>{
                return (
                    <div className="Review" style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                        <svg class="unf-icon" viewBox="0 0 24 24" width="16" height="16" fill="var(--YN300, #FFC400)" aria-hidden="true">
                            <path d="M21.57 9.14a2.37 2.37 0 00-1.93-1.63L15.9 7l-1.68-3.4a2.38 2.38 0 00-4.27 0L8.27 7l-3.75.54a2.39 2.39 0 00-1.32 4.04l2.71 2.64L5.27 18a2.38 2.38 0 002.35 2.79 2.42 2.42 0 001.11-.27l3.35-1.76 3.35 1.76a2.41 2.41 0 002.57-.23 2.369 2.369 0 00.89-2.29l-.64-3.73L21 11.58a2.38 2.38 0 00.57-2.44z"></path>
                        </svg>
                        <p>{rev.stars}</p>
                        <Line percent={rev.percentage} strokeWidth={2} strokeColor="#00FF00" style={{height: '1rem', width: '15rem'}}/>
                        <span>{rev.amount}</span>
                    </div>
                )
            })}
        </div>
      )
}

export default Reviews
