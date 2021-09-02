import Layout from '../components/Layout'
import { Button } from '../components/Button'
import Sectionheader from '../components/Sectionheader'
import Carousel from '../components/utils/Carousel'
import Faq from '../components/FAQ'
import ReactPlayer from 'react-player/lazy'
import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <>
      <Layout
        pageTitle="Rise Above The Disoder"
        pageLink="/"
        description="We are a non-profit covering the cost of mental health care for thousands of people around the world."
      >
        <section className="lg:mb-32 mb-8">
          <h1>
            We are a nonprofit covering the cost of mental health care for{' '}
            <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              everyone.
            </span>
          </h1>
          <Button linkTo="/donate">Donate Therapy</Button>
        </section>
        <div className="bg-gray-50">
          <section className="space-y-4">
            <Sectionheader
              color="text-black"
              subheader="This is RAD"
              headerone="Everyone deserves mental health care."
              headertwo="Heroes like you make it possible"
              bodytext="Founded as a World of Warcraft guild in 2013, our small group centered around crowd funding mental health care for friends. Today, we are an international team helping everyone access mental health care."
            />
            <Carousel />
          </section>
        </div>
        <div className=" bg-white">
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
            <div className="lg:grid lg:grid-cols-3 gap-x-10 pt-8">
              <div className="rounded-xl p-8 mx-auto mb-32 text-center border">
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
                  Give monthly.<br className="md:hidden flex"></br>
                  <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                    {' '}
                    Provide therapy to thousands.{' '}
                  </span>
                </h3>
                <p className="mt-2">
                  For more than 10 years, our guild has come together to make mental health care
                  free for those in need. We are casual players, content creators, music artists,
                  and friends.
                </p>
                <div className="group relative w-64 h-12 mx-auto mt-4">
                  <Link href="/guild">
                    <a className="rounded-xl group-hover:bg-opacity-0 hover:text-white absolute flex justify-center w-64 px-3 py-2 text-sm font-bold text-black align-middle transition-all duration-300 ease-in-out bg-white">
                      Join The Guild
                    </a>
                  </Link>
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl group-hover:h-10 w-64 h-12 transition-all duration-300 ease-in-out"></div>
                </div>
              </div>
              <div className="rounded-xl p-8 mx-auto mb-32 text-center border">
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
                  <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                    {' '}
                    Change lives.{' '}
                  </span>
                </h3>
                <p className="mt-2">
                  In 2016, Trick2G and Imagine Dragons hosted the first live stream for RAD. Since
                  then, content creators have covered the cost of over 80,000 therapy sessions.
                </p>

                <div className="group relative w-64 h-12 mx-auto mt-4">
                  <Link href="/stream">
                    <a className="rounded-xl group-hover:bg-opacity-0 hover:text-white absolute flex justify-center w-64 px-3 py-2 text-sm font-bold text-black align-middle transition-all duration-300 ease-in-out bg-white">
                      Stream For RAD
                    </a>
                  </Link>
                  <div className="bg-gradient-to-r from-pink-400 to rounded-xl group-hover:h-10 w-64 h-12 transition-all duration-300 ease-in-out bg-blue-400"></div>
                </div>
              </div>
              <div className="rounded-xl p-8 mx-auto mb-32 text-center border">
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
                  <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                    {' '}
                    of super rad friends.{' '}
                  </span>
                </h3>
                <p className="mt-2">
                  Join hundreds of friends from around the world in our community Discord. We host
                  weekly game nights, support each other on tough days, and share tons of memes.
                </p>

                <div className="group relative w-64 h-12 mx-auto mt-4">
                  <a
                    href="https://discord.gg/youarerad"
                    className="rounded-xl group-hover:bg-opacity-0 hover:text-white absolute flex justify-center w-64 px-3 py-2 text-sm font-bold text-black align-middle transition-all duration-300 ease-in-out bg-white"
                  >
                    Join The Discord
                  </a>

                  <div className="bg-gradient-to-r from-pink-400 to rounded-xl group-hover:h-10 w-64 h-12 transition-all duration-300 ease-in-out bg-blue-400"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
