import React from 'react'

//import css
import './closelevel.css';

//import react-icons
import { GiCheckMark } from "react-icons/gi";

//import logo
import logoela from '../asset/brand-footer.png'

const Closelevel = () => {
  return (
   <>
    <div className='closelevel-head'>
        <div className='closelevel-inside'>
            <div className='closelevel-nav-content'>
                <div className='brand-logo'>
                 <img src={logoela} alt="C-Suite Academy" height='35px' /> 
                </div>
            </div>
            <div className="parent-container-two">
                <div className="closelevel-card-container">

                    <div className='ELA-close-heading'>
                        <h1 id='ELA-close-title'> Exam Status - Completed</h1>
                    </div>

                   
                    <div className='total-finish'>
                        <div className='icon-check-total-finish'>
                            <GiCheckMark className='icon-check'/>
                        </div>
                
                        <p className='complete-message'>Thank you for completing the assessment!</p>
                        <p className='blur-text'>Your exam has been successfully submitted.<br/>To view your results, please subscribe to our service.</p>
                        <button>view plans</button>
                    </div>
                       

                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Closelevel