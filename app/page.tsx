import SectionTitle from "@/app/components/sectionTitle";
import Checklist from "@/app/components/checklist";
import ViewOnGithub from "./components/viewOnGithub";
import Link from "next/link";

export default function Home() 
{
  // TODO: Translate everything
  const goals = 
  [
    ["Creating my home page", true],
    ["Creating a navigation bar", true],
    ["Creating the other pages (About me, Projects, Contact me)", false],
    ["Adding multi-language support (English, Brazilian Portuguese, Spanish)", false],
    ["Creating the details page for each project", false],
    ["Improving SEO", false],
  ]
  const projectGHUrl: string = "https://github.com/leonardohra-gh/portfolio-leo"

  return (
    <main>
      <SectionTitle
        title="What can you find here?">
        <p>
          In this website you will be able to learn a bit more about me and my professional work and skills.
          <br/><br/>
          In "Projects", you can see the projects I have worked on. 
          You can see sample projects that I have created while learning a framework/library/language.
          There are also my personal projects, which are focused on creating something functional.
          And finally there are projects I have developed for clients. 
          <br/><br/>
          In "About me", I talk a bit about my academic progress and the jobs I have worked on. 
          I also summarize my skills in different areas, it is complementar to my curriculum.
        </p>
      </SectionTitle>
      <SectionTitle
        title="Development">
        <p>
          This website is one of my personal projects, so I will talk about it in depth in the "Projects" section, 
          but there are a few goals I am still working on, while developing this website.<br/>
          By the end of the project, I intend to complete the following goals:<br/>
        </p>
        <Checklist content={goals}/>
        <br/>
        <p>
          If you are interested in the development of this website, please check out my github repository:
        </p>
        <ViewOnGithub url={projectGHUrl}/>
      </SectionTitle>
      <SectionTitle
        title="Credits">
        <p>
          While developping this website, to avoid "Reinventing the wheel", I have used several codes and assets. Even though I have adapted most of the code for my website, I want to credit the original authors:
          <br/><br/>
          My favicon and logo:<br/>
          Icon made by imaginationlol from <a href="https://www.flaticon.com" target="blank">Flaticon</a><br/>
          Template:<br/>
          My website was made based on <a href="https://github.com/web3templates/nextly-template/" target="blank">Nextly Template</a><br/>
        </p>
      </SectionTitle>
    </main>
  )
}
