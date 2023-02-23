import type { NextPage } from 'next'
import PageContainer from '../components/page-container'
import { CardInner, CardOuter } from '../components/card'
import { FaQuestionCircle } from "react-icons/fa";

const About: NextPage = () => {
  return <>
    <PageContainer title="About">
      <span className="h-20" />
      <CardOuter>
        <CardInner>
          <div className="flex flex-col sm:flex-row sm:gap-10 p-4 mt-[-100px] justify-center items-center sm:gap-0">
            <div className="w-60 flex flex-col gap-1">
              <img  src="/assets/profile.png" 
                    className="w-40 h-40 max-w-40 max-h-40 ml-auto mr-auto rounded-full bg-white border-2 border-white"
                    title="It's me!"
                    alt="A dark-haired man wearing rectangular glasses, a frog t-shirt, and black jacket+beanie" />
              <p className="sm:hidden text-xs text-gray-300 italic">art by <a href="https://ko-fi.com/makowka" target="_blank">mischa makowka</a></p>
            </div>
            <div className="w-full mr-auto ml-auto sm:mt-20 flex flex-col gap-0 text-left p-5">
              <h3 className="text-primary text-2xl sm:text-4xl">Mikel Matticoli</h3>
              <h3 className="flex flex-row gap-2 w-full text-primary text-md sm:text-2xl"><span>(he/they)</span> <a className="mt-auto mb-auto text-sm sm:text-md" href="https://en.wikipedia.org/wiki/Preferred_gender_pronoun" target="_blank"><FaQuestionCircle /></a></h3>
              <p className="hidden sm:block text-xs text-gray-300 italic">↖️ art by <a href="https://ko-fi.com/makowka" target="_blank">mischa makowka</a></p>
            </div>
          </div>
          <div className="text-left">
            <p className="text-md p-5">I enjoy making things of all kinds – from websites, software, and robots, to crafts and foods. I find joy in things created by others too – particularly food, games, and stories, especially when they provide shared experiences with friends or family.</p>
            <p className="text-md p-5">Professionally, I've had the privilege of working with many great people to develop software solutions for a variety of audiences, build scalable and sustainable technical infrastructure, and design interactive experiences that people around the world have connected with.</p>
          </div>
        </CardInner>
      </CardOuter>
      <CardOuter reverse>
        <CardInner className="flex flex-col justify-center items-center" reverse>
          <div className="p-4 flex flex-col sm:flex-row gap-2 justify-center" >
            <img className="ml-auto mr-auto max-w-20 w-20" src="/assets/day22-owl.png" />
            <h3 className="text-primary text-lg sm:text-2xl mt-auto mb-auto">
              Looking for my resume? Here it is!
            </h3>
          </div>
          <iframe className="w-full sm:w-10/12 h-[70vw]" src="https://docs.google.com/gview?embedded=true&url=https://matticoli.net/resume.pdf">Failed to load resume - download <a href="/resume.pdf" target="_blank">here</a></iframe>
        </CardInner>
      </CardOuter>
    </PageContainer>
  </>
}

export default About