import woman from './imgs/woman2.png'

const About = () => {
  return (
   
 <div className='px-5 max-w-[1560px] mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" mb-12">
                <div className=" text-white w-2/3 font-semibold text-[32px]">
                    <div className="">
                        <span className="text-[#C778DD]">/</span>
                        about-me
                    </div>
                    <div className=" text-white text-base font-normal mt-[14px]">
                        Who am i?
                    </div>
                </div>
            </div>
            <div className=" flex-wrap flex items-center justify-between">
                {/* left */}
                <div className="md:w-[48%] w-full">
                    {/* disc */}
                    <p className="text-[#ABB2BF] ">
                        Hello, i’m Leticia!
                        <br />
                        <br />
                        I am a full-stack developer based in Rosario, Sanfe Fe, Argentina. I can develop responsive websites from the ground up and elevate them into modern, easy-to-use web experiences.
                        <br />
                        <br />
                        
                                Transforming my creativity and knowledge into a website has been my passion for over a year. I always strive to learn about the latest technologies and frameworks.
                    </p>
                </div>
                {/* right */}
                <div className=" mx-auto">
                <img className="mx-auto" src={woman} alt="" />
                <div className="line w-1/1 h-px bg-[#C778DD]"></div>
                </div>
            </div>
        </div>

  )
}

export default About