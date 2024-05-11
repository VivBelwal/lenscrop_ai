import React from 'react'

const Service = () => {
  return (
    <div className='grid place-items-center pb-[4rem] bg-[#fcfbf7] '>
      <div className='flex flex-col place-items-center gap-[5px]'>
      <h3 className='text-[20px] font-semibold tracking-[1.9px]'>SERVICES</h3>
      
      <div className='w-[75px] h-[4px] rounded-[20px] bg-gradient-to-r from-[#0091ff] to-[#9cfeff] '></div>

      </div>

<div >
  <h1 className='w-[80%] text-center text-[58px] font-medium mb-[5rem]'>
  We provide Artificial Intelligence Services
  </h1>

  <div className='grid grid-cols-2 gap-[20px] '>

   <div className='flex place-items-center relative'>
    <div>
      <span>0</span>
      <span>1</span>
      <h3>Biometrics</h3>
    </div>
    <div>
      <p>
      Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.
      </p>
    </div>
   </div>

   <div>
    <div>
      <span>0</span>
      <span>1</span>
      <h3>Image Analysis</h3>
    </div>
    <div>
      <p>
      Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.
      </p>
    </div>
   </div>

   <div>
    <div>
      <span>0</span>
      <span>1</span>
      <h3>Cross-Media Translation</h3>
    </div>
    <div>
      <p>
      Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.
      </p>
    </div>
   </div>

   <div>
    <div>
      <span>0</span>
      <span>1</span>
      <h3>3D Modelling and Design</h3>
    </div>
    <div>
      <p>
      We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.

      </p>
    </div>
   </div>

  </div>
  </div>  
    </div>
  )
}

export default Service
