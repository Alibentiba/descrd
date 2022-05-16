import React from 'react'
import './Login.css'
import logo from '../images/cta-logo-one.svg'
import logo2 from '../images/cta-logo-two.png'


const Login = () => {
    return (
      <div className='Container' >
        <div className='Content'  >
          <div className='CTA' >
            <img className='CTALogoOne'  src={logo} alt="fhfg" />
            <div className='SignUp'>GET ALL THERE</div>
            <  div className='Description' >
              Get Premier Access to Raya and the Last Dragon for an additional fee
              with a Disney+ subscription. As of 03/26/21, the price of Disney+
              and The Disney Bundle will increase by $1.
            </div>
            <img className='CTALogoTwo' src={logo2} alt="fghfdgh" />
          </div>
          <div />
        </div>
      </div>
    );
  };
  export default Login