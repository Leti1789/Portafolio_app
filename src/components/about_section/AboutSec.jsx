import woman from './imgs/woman2.png'
import { NavLink } from "react-router-dom";

const AboutSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div  data-aos = "fade-right" className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">#</span>about-me
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF] ">
              Hello, i’m Leticia!
              <br />
              <br />
                  I am a full-stack developer based in Rosario, Sanfe Fe, Argentina. I can develop responsive websites from scratch and turn them into modern, easy-to-use web experiences.

              <br />
              <br />
              Transforming my creativity and knowledge into a website has been my passion for over a year. I always strive to learn about the latest technologies and frameworks.
            </p>
            {/* button */}
            <div className="mt-7">
              <NavLink to="/about"
                className=" duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white "
              >
                <button>Read more -{">"}</button>
              </NavLink>
            </div>
          </div>
          {/* right */}
          <div data-aos = "fade-left" className=" mx-auto">
            <img className="mx-auto" src={woman} alt="" />
            <div className="line w-1/1 h-px bg-[#C778DD]"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSec