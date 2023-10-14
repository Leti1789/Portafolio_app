
import email from './imgs/Email.png';
import github from './imgs/Github.png';
import Logo from './imgs/Logo.png';
import Linkedin from './imgs/linkedin.png'

const Footer = () => {
  return (
    <>
       {/* line */}
      <div  className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div data-aos = "fade-up" className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src={Logo} alt="" />
                <span>Leticia</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">leticia.dimotta@gmail.com</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>Full-Stack developer based in Argentina</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-2">
              <a href="https://www.linkedin.com/in/leticiadimotta/" target="_blank">
                <img src={ Linkedin} alt="" />
              </a>
              <a href="mailto:leticia.dimotta@gmail.com">
                <img src={email} alt="" />
              </a>
              <a href="https://github.com/Leti1789" target="_blank">
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2023. Made by Leti💜
        </div>
      </div>
    </>
  )
}

export default Footer