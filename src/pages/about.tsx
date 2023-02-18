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
            <img  src="/assets/profile.png" 
                  className="w-40 h-40 max-w-40 max-h-40 ml-auto mr-auto rounded-full bg-white border-2 border-white"
                  title="It's me!"
                  alt="A dark-haired man wearing rectangular glasses, a frog t-shirt, and black jacket+beanie" />
            <div className="w-full mr-auto ml-auto sm:mt-20 flex flex-col gap-0 text-left p-5">
              <h3 className="text-primary text-2xl sm:text-4xl">Mikel Matticoli</h3>
              <h3 className="flex flex-row gap-2 w-full text-primary text-lg sm:text-2xl"><span>he/they</span> <a className="mt-auto mb-auto text-sm sm:text-md" href="https://en.wikipedia.org/wiki/Preferred_gender_pronoun" target="_blank"><FaQuestionCircle /></a></h3>
            </div>
          </div>
          <div className="text-left">
            <p className="text-md p-5">I am an engineer, designer, and producer with a passion for making things and helping others.</p>
            <p className="text-md p-5">I enjoy making things of all kinds – from websites, software, and robots, to crafts and foods. I find joy in things created by others too – particularly food, games, and stories, especially when they provide shared experiences with friends or family.</p>
          </div>
        </CardInner>
      </CardOuter>
    </PageContainer>
  </>
}

export default About
