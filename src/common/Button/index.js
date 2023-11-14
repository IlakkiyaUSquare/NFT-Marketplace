import React from 'react'
import '../Button/button.css'
const Button = (props) => {
    const{btnType,btnText,btnOnClick,CustomClass}=props
  return (
    
      <div className={`${btnType==="PRIMARY"
      ? `button primary-btn ${CustomClass}`
      :`button secondary-btn ${CustomClass}`}`}
      onClick={btnOnClick}>
    {btnText}
    </div>
   
  )
}

export default Button
