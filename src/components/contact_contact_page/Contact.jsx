import linkedin from './imgs/linkedin.png'
import email from './imgs/Email.png';
import github from './imgs/Github.png';


const Contact = () => {
  return (
      <div className='px-5 max-w-[1560px] min-h-screen mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" text-white font-semibold text-[32px] mt-12">
                <span className=' text-[#C778DD]'>/</span>
                contacts</div>
            {/* h2 title */}
            <div className=" text-white mt-[14px] mb-[46px]">Who am i?</div>
            {/* flex main */}
            <div className="flex justify-between flex-wrap gap-10">
                {/* left side */}
                <div className="  md:w-3/5 w-full">
                    {/* some text */}
                    <div className=" text-[#ABB2BF] font-medium">
                    I am interested in job opportunities in the IT sector. However, if you have any other request or question, please feel free to contact me.</div>
                </div>
                {/* right side */}
                <div className=" flex gap-3">
                    {/* boxes/flex */}
                    {/* 1 */}
                    <div className=" p-4 border border-[#ABB2BF]">
                        <h2 className=' text-white font-medium pb-4 '>Message me here</h2>
                        <div className=" text-[#ABB2BF]">
                            {/* contacts */}
                            <div className=" flex gap-1 items-center">
                                {/* img */}
                                <img src={linkedin} alt="" />
                                {/* text */}
                                <span>https://www.linkedin.com/in/leticiadimotta/</span>
                            </div>
                            {/* contacts */}
                            <div className=" flex gap-1 items-center">
                                {/* img */}
                                <img src={email} alt="" />
                                {/* text */}
                                <span>leticia.dimotta@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* all media */}
            <div className=" mt-6 mb-5x">
                {/* title */}
                <div className=" text-[32px] font-medium text-white"><span className='text-[#C778DD]'>#</span>all-media</div>
                {/* media */}
                <div className=" flex gap-6">
                    <a href="#">
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                            <img src={linkedin} alt="" />
                            <span>https://www.linkedin.com/in/leticiadimotta/</span>
                        </div>
                    </a>
                    <a href="#">
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                            <img src={github} alt="" />
                            <span>https://github.com/Leti1789</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
   
  )
}

export default Contact