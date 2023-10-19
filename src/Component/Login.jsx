import React from 'react'

function Login() {
      return (
            <div className='CONTAINER overflow-hidden flex flex-col text-center' >
                  <div className='CONTENT relative min-h-[100vh] flex justify-center items-center flex-col py-[80px] px-[40px]'>
                        <div className='CTA max-w-[650px] flex-wrap flex flex-col justify-center w-full'>
                              <img className='LOGO-1 mb-[12px] max-w-[600px] min-h-[1px] block w-full' src="/image/cta-logo-one.svg" alt="" />
                              <a className='SingUp font-bold text-[#f9f9f9] bg-[#0063e5] w-full text-lg py-[16.5px] rounded-[4px] border-[1px] border-solid border-transparent hover:bg-[#4083ee] ease-in-out duration-400' href="">GET ALL THERE</a>
                              <p className='Description max-w-[650px] text-center text-[11px] leading-[1.5em] tracking-[1.5px] mt-3'>Get Premier Access to Raya and the Last Dragon for an additional fee
                                    with a Disney+ subscription. As of 03/26/21, the price of Disney+
                                    and The Disney Bundle will increase by $1.</p>
                              <img className='LOGO-2 max-w-[600px] mb-[20px] mt-[10px] mx-auto' src="/image/cta-logo-two.png" alt="" />      
                        </div>
                  <div style={{ backgroundImage: "url('image/login-background.jpg')" }} className='h-[100vh] bg-top bg-cover bg-no-repeat absolute top-0 z-[-1] right-0 left-0'></div>
                  </div>
            </div>
      )
}

export default Login