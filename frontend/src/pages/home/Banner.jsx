import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    
    <div className='flex flex-col md:flex-row py-16 justify-between items-center gap-12'>
        {/*Image*/}
        <div className="md:w-1/2 flex item-center md:justify-end">
           <img src={bannerImg} alt="" />
        </div>
        {/*Text*/}
        <div className="md:w-1/2 w-full">
           <h1 className="md:text-5xl text-2xl font-medium ">New Release This Week</h1>
           <br/>
           <p className="mb-10">
            It's time to update your literary list with some of the greatest<br/>
            releases in literary world.From heart-pumping to captivating memories,<br/>
            this week's new releases offer something for everyone.
           </p>
           
            <button className="btn-primary">Subscribe</button>
        </div>
    </div>
  )
}

export default Banner
