import './About.css'
import woman from './imgs/woman.png'
import quote from './imgs/quote.png'


const About = () => {

  return (
    <>
      <div  className='px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap'>
        <div data-aos="fade-right" className='w-10/12 sm:w-8/12 mx-auto'>
        <h1 className="font-semibold text-[32px] text-white mb-3">
            Leticia is a <span className="text-[#C778DD]">Full Stack developer</span>
            
          </h1>
           <p className="text-[#ABB2BF] my-6">
            Discovering new concepts in the IT world day by day.
          </p>
          <a href='mailto:leticia.dimotta@gmail.com'>
            <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
            Contact me!!
          </button>
          </a>
            
        </div>
        <div data-aos="fade-left" className='mx-auto'>
          <div className=''>
          <img src={woman} alt='' />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
             <div className="w-4 h-4 bg-[#C778DD]"></div>
            <div className=''>
              Currently working on <span className="text-white">Portfolio</span>
            </div>
         </div>
        </div>
      </div>
      <div data-aos="fade-up" className='px-5 py-10'>
        <img className='mx-auto' src={quote} alt="quote" />

      </div>
    </>
  )
}

export default About
