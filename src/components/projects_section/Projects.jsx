import Project_card from "../project_card/Project_card";
import first from "./imgs/Dogs.jpg";
import second from "./imgs/Countries.png";
import third from "./imgs/Porfolio.png";



const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["HTML", "CSS modules", "Javascript", "React", "Node.js", "Express","Postgres", "Sequelize"],
      title: "Dogs app",
      disc: "Single Page Application using the technologies: React, Redux, Node, Express and Sequelize  ",
      github: "https://github.com/Leti1789/PI-dogs",
    },
    {
      img: second,
      langs: ["HTML", "CSS modules", "javascript", "React","Node.js","Express","Postgres", "Sequelize"],
      title: "Countries app",
      disc: "Single Page Application using the technologies: React, Redux, Node, Express and Sequelize  ",
      github: "https://github.com/Leti1789/countries",
        
    },
    {
      img: third,
      langs: ["HTML", "Tailwind CSS", "javascript", "React", "Vite"],
      title: "Porfolio",
      disc: "Personal portfolio application",
      github: "https://github.com/Leti1789/countries",
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <a href="">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
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
    </>
  );
};

export default Projects;