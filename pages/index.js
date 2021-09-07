import Link from 'next/dist/client/link'
import ReactPlayer from 'react-player/lazy'
import Button from '../components/Button'
import Faq from '../components/Faq.js'
import Layout from '../components/Layout'
import Sectionheader from '../components/Sectionheader'
import Carousel from '../components/utils/Carousel'
import Fadeinsections from '../components/utils/fadesections.js'

export default function Home() {
  return (
    <>
      <Layout
        pageTitle="Rise Above The Disoder"
        pageLink="/"
        description="We are a non-profit covering the cost of mental health care for thousands of people around the world."
      >
        <section className="relative pt-8 mb-8 lg:pt-16 lg:mb-16">
          <div className="relative z-30">
            <h1>
              We are a nonprofit covering the cost of mental health care for{' '}
              <span className="text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">
                everyone.
              </span>
            </h1>
            <Button linkTo="/donate">Donate Therapy</Button>
          </div>
          <ReactPlayer
            className="pt-16"
            playsinline={true}
            playing={true}
            width="100%"
            height="100%"
            controls={true}
            muted={true}
            loop={true}
            url="https://res.cloudinary.com/df23ubjbb/video/upload/v1630971571/RADIntro.mp4"
          />
        </section>
        <div className="text-white bg-black">
          <Fadeinsections>
            <section className="grid grid-flow-col grid-cols-2 text-center">
              <h2>38,000 people helped</h2>
              <h2>133 countries reached</h2>
            </section>
          </Fadeinsections>
        </div>
        <div className="bg-gray-50">
          <section className="space-y-4">
            <Sectionheader
              color="text-black"
              subheader="This is RAD"
              headerone="Everyone deserves mental health care."
              headertwo="Heroes like you make it possible."
              bodytext="Founded as a World of Warcraft guild in 2013, our small group centered around crowd funding mental health care for friends. Today, we are an international team helping everyone access mental health care."
            />
            <Carousel />
          </section>
        </div>
        <div className="bg-white ">
          <section className="">
            <Sectionheader
              color="text-black"
              subheader="How We Help"
              headerone="Mental health care."
              headertwo="For anyone, anywhere."
              bodytext="We remove the two greatest barriers to mental health care: access and affordability. All licensed professionals, all personally matched to you. You deserve to feel rad."
            />
            <Faq />
          </section>
        </div>
        <div className="text-white bg-black">
          <section className="">
            <Sectionheader
              color="text-white"
              subheader="how you help"
              headerone="Three ways to help."
              headertwo="Be the reason someone starts therapy."
            />
            <div className="pt-8 lg:grid lg:grid-cols-2">
              <div className="max-h-[65vh] col-span-2 p-8 mx-auto text-center">
                <ReactPlayer
                  playsinline={true}
                  playing={true}
                  width="100%"
                  height="50%"
                  controls={false}
                  muted={true}
                  loop={true}
                  url="https://res.cloudinary.com/df23ubjbb/video/upload/v1628790148/General%20Media/RADMythicGarry.mp4"
                />
                <h5 className="mt-4">the guild</h5>
                <h3>
                  Give monthly.<br className="flex md:hidden"></br>
                  <span className="items-center text-center text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">
                    {' '}
                    Provide therapy to thousands.{' '}
                  </span>
                </h3>
                <p className="mx-auto mt-2 text-center">
                  For more than 10 years, our guild has come together to make mental health care
                  free for those in need. We are casual players, content creators, music artists,
                  and friends.
                </p>
                <div className="relative w-64 h-12 mx-auto mt-4 group">
                  <Link href="/guild">
                    <a className="absolute flex justify-center w-64 px-3 py-2 text-sm font-bold text-black align-middle transition-all duration-300 ease-in-out bg-white rounded-xl group-hover:bg-opacity-0 hover:text-white">
                      Join The Guild
                    </a>
                  </Link>
                  <div className="w-64 h-12 transition-all duration-300 ease-in-out bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl group-hover:h-10"></div>
                </div>
              </div>
              <div className="p-8 mx-auto text-center ">
                <ReactPlayer
                  playsinline={true}
                  playing={true}
                  width="100%"
                  height="50%"
                  controls={false}
                  muted={true}
                  loop={true}
                  url="https://res.cloudinary.com/df23ubjbb/video/upload/v1628902398/General%20Media/BBN0%24.mp4"
                />
                <h5 className="mt-4">Stream for Rad</h5>
                <h3>
                  Go live.<br></br>
                  <span className="text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">
                    {' '}
                    Change lives.{' '}
                  </span>
                </h3>
                <p className="mt-2">
                  In 2016, Trick2G and Imagine Dragons hosted the first live stream for RAD. Since
                  then, content creators have covered the cost of over 80,000 therapy sessions.
                </p>

                <div className="relative w-64 h-12 mx-auto mt-4 group">
                  <Link href="/stream">
                    <a className="absolute flex justify-center w-64 px-3 py-2 text-sm font-bold text-black align-middle transition-all duration-300 ease-in-out bg-white rounded-xl group-hover:bg-opacity-0 hover:text-white">
                      Stream For RAD
                    </a>
                  </Link>
                  <div className="w-64 h-12 transition-all duration-300 ease-in-out bg-blue-400 bg-gradient-to-r from-pink-400 to rounded-xl group-hover:h-10"></div>
                </div>
              </div>
              <div className="p-8 mx-auto text-center">
                <ReactPlayer
                  playsinline={true}
                  playing={true}
                  width="100%"
                  height="50%"
                  controls={false}
                  muted={true}
                  loop={true}
                  url="https://res.cloudinary.com/df23ubjbb/video/upload/v1628974976/General%20Media/FeelsRAD.mp4"
                />
                <h5 className="mt-4">Our Community</h5>
                <h3>
                  A community<br></br>
                  <span className="text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">
                    {' '}
                    of super rad friends.{' '}
                  </span>
                </h3>
                <p className="mt-2">
                  Join hundreds of friends from around the world in our community Discord. We host
                  weekly game nights, support each other on tough days, and share tons of memes.
                </p>

                <div className="relative w-64 h-12 mx-auto mt-4 group">
                  <a
                    href="https://discord.gg/youarerad"
                    className="absolute flex justify-center w-64 px-3 py-2 text-sm font-bold text-black align-middle transition-all duration-300 ease-in-out bg-white rounded-xl group-hover:bg-opacity-0 hover:text-white"
                  >
                    Join The Discord
                  </a>

                  <div className="w-64 h-12 transition-all duration-300 ease-in-out bg-blue-400 bg-gradient-to-r from-pink-400 to rounded-xl group-hover:h-10"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
