import type { NextPage } from 'next'
import { FaClock, FaDesktop, FaLink, FaMedal, FaTasks, FaUserAstronaut, FaUsers, FaSteam, FaBook, FaWindows } from "react-icons/fa"
import PageContainer from '../../components/page-container'
import { CardInner, CardOuter } from '../../components/card'
import { getProjectData, getProjectPaths } from '../api/projects-static'
import Badge from './../../components/badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectFlip, Navigation, Pagination } from 'swiper';
import Button from '../../components/button';

const iconMap = {
    "Website": <div className="p-4 rounded-lg bg-primary"><FaLink /></div>,
    "Steam": <div style={{backgroundColor: '#2c4059'}} className="p-4 rounded-lg text-xl"><FaSteam /></div>,
    "Paper": <div style={{backgroundColor: '#6189b9'}} className="p-4 rounded-lg text-xl"><FaBook /></div>,
    "windows": <FaWindows className="text-primary ml-auto mr-auto" />,
};

//TODO move to API
export async function getStaticPaths() {
    return {
        paths: await getProjectPaths(),
        fallback: false,
    };
}

export async function getStaticProps({ params } : any) {
    return {
      props: {
        project: await getProjectData(params.slug),
      },
    };
  }

const YouTubeEmbed = ({src} : any) => {
    return <iframe style={{maxWidth: "80%", margin: "auto", marginBottom: 30, height: "100%"}} title="YouTube video player" data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full sm:min-h-[300px]" src={src} >Failed to load video</iframe>
}
const Project: NextPage = ({project}: any) => {
  return <>
    <PageContainer title="Projects">
        <div className="w-full bg-black p-6">
            <h1 className="text-4xl">{project.title}</h1>
            <span className="text-xs"><a  href="/projects">projects</a> {">"} {project.slug}</span>
        </div>
        <div className="flex flex-col gap-4 lg:gap-2 lg:flex-row w-full sm:w-9/12 lg:w-8/12 mr-10 ml-10 mt-5 mb-5">
            <CardOuter override className="sm:flex-initial backdrop-blur-sm sm:min-w-[250px] w-full ml-auto mr-auto sm:w-full lg:w-[25%] ">
                <CardInner color="var(--primary)" type="T">
                    <span className="text-xl">Quick Facts</span>
                </CardInner>
                <div className="m-5">
                    <img className="w-full w-max-full border-2"  
                        style={{borderColor: project.color}}  
                        title={project.title} 
                        alt={`${project.title} title card`} 
                        src={project.cover} />
                </div>
                <CardInner type="B" className="flex flex-col p-0 pl-0 pt-0 pb-0 pr-0 text-center">
                    <h3 className="text-primary text-lg">Project Type</h3>
                    {iconMap[project['type_icon']] || <FaDesktop className="text-primary ml-auto mr-auto" />}
                    <p className="text-sm mb-5">{project.type}</p>
                    <h3 className="text-primary text-lg">My Roles</h3>
                    <FaUserAstronaut className="text-primary ml-auto mr-auto" />
                    <p className="text-sm mb-5">{project.roles}</p>
                    <h3 className="text-primary text-lg">Responsibilities</h3>
                    <FaTasks className="text-primary ml-auto mr-auto" />
                    <p className="text-sm mb-5">{project.responsibilities}</p>
                    <h3 className="text-primary text-lg">Team Size</h3>
                    <FaUsers className="text-primary ml-auto mr-auto" />
                    <p className="text-md mb-5">{project.team_size}</p>
                    <h3 className="text-primary text-lg">Timeline</h3>
                    <FaClock className="text-primary ml-auto mr-auto" />
                    <p className="text-sm mb-5">{project.timeline}</p>
                    <h3 className="text-primary text-lg">Achievements</h3>
                    <FaMedal className="text-primary ml-auto mr-auto" />
                    <ul className="text-xs mb-5">{project.achievements.map(a => {
                        return <li>• {a}</li>
                    })}</ul>
                    
                </CardInner>
            </CardOuter>
            <CardOuter override reverse className="sm:flex-initial backdrop-blur-sm sm:min-w-[500px] w-full ml-auto mr-auto sm:w-full lg:w-[66%] ">
                <CardInner reverse type="T">
                    <span className="text-2xl">
                        {project.title}
                    </span>
                </CardInner> 
                <CardInner type="M">
                    <Swiper spaceBetween={50}
                            modules={[Navigation, Pagination, EffectFlip]}
                            mousewheel={true}
                            className="min-h-[200px]"
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}>
                        {project.media.map((t: any) => {
                            return <SwiperSlide className="flex flex-col items-center align-middle justify-center" key={t[0]}>
                                {t[0].includes("png") || t[0].includes("jpg") ? 
                                    <img style={{maxWidth: "80%", margin: "auto", marginBottom: 30}} src={t[0]} alt={t[1]} /> :
                                 t[0].includes("youtu") ? 
                                    <YouTubeEmbed src={t[0]}>Failed to load video</YouTubeEmbed> :
                                 "Unrecognized media type "+t[0]
                                }
                            </SwiperSlide>
                        })}
                    </Swiper>
                </CardInner>
                <CardInner reverse type="M">
                    <div className="m-4 flex flex-wrap text-xs">
                        <b className="text-md mt-auto mb-auto">Made With: </b>
                        {project.tags.map((t: any) => {
                            return <Badge key={t[0]} className="text-xs" bg={t[1]}>{t[0]}</Badge>
                        })}
                    </div>
                    <div className="md m-5 text-left" dangerouslySetInnerHTML={{__html: project.content}} />
                </CardInner>
                <CardInner reverse type="B" className="flex flex-row gap-4 justify-center">
                    {project.links.map((link: [string, string]) => {
                        return <a className="hover:scale-110 hover:-translate-y-1" key={link[0]} href={link[1]}>{iconMap[link[0]] || link[0]}</a>
                    })}
                </CardInner>
            </CardOuter>
        </div>
    </PageContainer>
  </>
}

export default Project