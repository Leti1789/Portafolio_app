import Project_card from '../../components/project_card/Project_card';
import first from "./imgs/Dogs.jpg";
import second from "./imgs/Countries.png";
import third from "./imgs/Porfolio.png";
import fourth from "./imgs/CiberZone.png";





const Complete_apps = () => {

const projects = [
   // projects date
    {
      img: first,
      langs: ["HTML", "CSS modules", "Javascript", "React", "Node.js", "Express","Postgres", "Sequelize"],
      title: "Dogs app",
      disc: "Single Page Application using the technologies: React, Redux, Node, Express and Sequelize ",
      github: "https://github.com/Leti1789/PI-dogs"
    },
    {
      img: second,
      langs: ["HTML", "CSS modules", "javascript", "React","Node.js","Express","Postgres", "Sequelize"],
      title: "Countries app",
      disc: " Single Page Application using the technologies: React, Redux, Node, Express and Sequelize ",
      github: "https://github.com/Leti1789/countries"

    },
    {
      img: third,
      langs: ["HTML", "Tailwind CSS", "javascript", "React", "Vite"],
      title: "Porfolio",
      disc: "personal portfolio application",
      github: "#"
    },
     {
      img: fourth,
      langs: ["html", "css", "javascript", "react", "tailwind css", "Mongo", "Mongoose"],
      title: "CiberZone",
      disc: " Computer sales ecommerce. 100% functional",
      github: "https://github.com/chechesk/CyberZon3"
    }
  ];




  return (
    <>
     <div className="min-h-screen pt-[114px] px-5 max-w-[1560px] mx-auto">
        {/* top / title */}
        <div className="">
          {/* projects */ }
          <div className="text-white font-bold text-[32px]">
            <span className="text-[#C778DD]">/</span>
            <span>projects</span>
          </div>
          {/* list*/}
          <div className="text-white mt-[14px]">List of my projects</div>
        </div>
        {/* completed tasks */}
        <div className="">
          {/* title*/}
          <div className="text-white font-medium mt-[68px] mb-[48px] text-[32px]">
            <span className="text-[#C778DD]">#</span>
            <span>complete apps</span>
          </div>
          {/* projects */}
           <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc, github }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                  github={github}

                />
              </>
            );
          })}
        </div>
        </div>
        </div>
    
    
    </>
  )
}

export default Complete_apps