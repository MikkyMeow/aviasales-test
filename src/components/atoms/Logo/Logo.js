import React from 'react'
import './Logo.scss'
import { ReactComponent as Icon } from '../../../assets/svg/logo.svg'

const Logo = () => {
  return(
    <div className='logo'>
      <Icon />
    </div>
  )
}

export default Logo