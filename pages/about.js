import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'
import Videoplayer from '../components/utils/Videoplayer'
import Sectionheader from '../components/Sectionheader'
import { Story } from '../libs/Story'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Staff } from '../libs/Data/Staff'
import Link from 'next/dist/client/link'
import Transparency from '../components/Transparencytab'

import SwiperCore, { Pagination, Navigation, EffectFade } from 'swiper'

SwiperCore.use([Pagination, Navigation, EffectFade])

export default function About() {
  return (
    <Layout
      pageTitle="RAD About Us"
      pageLink="/about"
      description="Learn more Rise Above The Disorder. A World of Warcraft guild turned international non-profit covering the cost of mental health care for people around the world."
      pageHeader={
        <div className=" text-white bg-black">
          <section className="">
            <div className="lg:space-y-0 lg:justify-between lg:flex space-y-16">
              <div>
                <Pageheader
                  subheader="We believe"
                  headerone="People can be helped"
                  charone="&amp;"
                  headertwo="The system can be changed"
                  chartwo="&amp;"
                  headerthree="You deserve to feel rad"
                  charthree="♡"
                />
              </div>
              <div className="lg:w-2/5 rounded-xl relative w-full overflow-hidden">
                <Videoplayer videoUrl="https://res.cloudinary.com/df23ubjbb/video/upload/v1628874723/General%20Media/Aboutrad.mp4" />
              </div>
            </div>
          </section>
        </div>
      }
    >
      <section className="">
        <Swiper
          autoHeight={true}
          pagination={{
            clickable: true,
          }}
          className="h-full"
        >
          {Story.map((chapter, index) => (
            <SwiperSlide
              key={chapter.id}
              className="lg:space-y-0 lg:justify-between lg:flex space-y-10"
            >
              <div key={index} className="lg:w-3/5 rounded-xl relative w-full overflow-hidden">
                <div className="">{chapter.chapterpicture}</div>
              </div>
              <div className="" key={chapter.chapter}>
                <div className="w-full" key={chapter.chaptertext}>
                  {chapter.chaptertext}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="bg-gray-50 text-black">
        <section>
          <Sectionheader
            color="text-black"
            subheader="Our Team"
            headerone="Mental health champions,"
            headertwo="pretty rad people."
            bodytext="Speakers to the World Health Organization, consultents to the United Nations, we are the group of gamers changing mental health care."
          />
          <div className="group relative inline-flex flex-row items-center mt-2 text-lg">
            <Link href="/careers">
              <a className="inline-flex text-lg text-blue-700 transition-all duration-500">
                Learn more about careers with RAD
              </a>
            </Link>
            <div className="absolute h-0.5 w-full -bottom-1 scale-x-0  bg-gradient-to-r z-0 from-pink-400 to-blue-400 group-hover:scale-x-100  transition-all duration-200 ease-out" />
          </div>
          <div className="mx-auto">
            <ul
              role="list"
              className="gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 grid grid-cols-2 pt-16"
            >
              {Staff.map((team, index) => (
                <li key={index} className="relative">
                  <div className="lg:w-6/12 rounded-xl group focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 block w-full overflow-hidden bg-gray-100">
                    <img
                      src={team.picture}
                      alt=""
                      className="group-hover:opacity-75 object-cover pointer-events-none"
                    />
                  </div>
                  <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
                    {team.name}
                  </p>
                  <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                    {team.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <section>
        <Sectionheader
          color="text-black"
          subheader="Our numbers"
          headerone="Radical kindness."
          headertwo="Radical transparency."
        />
        <Transparency />
      </section>
    </Layout>
  )
}
