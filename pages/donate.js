import DonateForm from '../components/forms/Donate/Donation'
import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'
import Sectionheader from '../components/Sectionheader'
import Sectiontext from '../components/Sectiontext'
import VideoPlayer from '../components/utils/Videoplayer'
import Link from 'next/dist/client/link'
import Image from 'next/image'

export default function Donate() {
  return (
    <Layout
      pageTitle="RAD Donate"
      pageLink="/donate"
      description="Thanks to heroes like you, someone will start therapy today. Your donation to Rise Above The Disorder changes lives."
      pageHeader={
        <section className="">
          <div className="lg:space-y-0 lg:justify-between lg:flex space-y-16">
            <div>
              <Pageheader
                subheader="donate"
                headerone="Someone will start therapy today"
                charone="."
                headertwo="You make that possible"
                chartwo="♡"
              />
            </div>
            <div className="lg:w-4/12 w-full">
              <DonateForm />
            </div>
          </div>
        </section>
      }
    >
      <div className="text-white bg-black">
        <section className="space-y-16">
          <Sectionheader
            subheader={
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                the guild
              </span>
            }
            headerone="Membership starts at just"
            headertwo="$1 per day!"
          />
          <div className="md:grid md:grid-cols-2 md:grid-flow-col-dense md:gap-20 md:space-y-0 flex flex-wrap-reverse space-y-10">
            <div className="md:text-left md:mt-0 mt-4 text-center">
              <h5></h5>
              <h3>
                Give monthly.{' '}
                <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Provide therapy to thousands.
                </span>
              </h3>
              <p>
                For more than 10 years, our guild has come together to make mental health care free
                for those in need. We are casual players, content creators, music artists, and
                friends.
              </p>
              <div className="mt-6">
                <div className="lg:mx-px group relative w-64 h-12 mx-auto">
                  <button className="text-md rounded-xl group-hover:bg-opacity-0 hover:text-white absolute flex justify-center w-64 px-3 py-2 font-bold text-black align-middle transition-all duration-300 ease-in-out bg-white">
                    Join The Guild
                  </button>
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl group-hover:h-10 w-64 h-12 transition-all duration-300 ease-in-out"></div>
                </div>
              </div>
            </div>
            <div className="rounded-xl w-full p-1 border">
              <VideoPlayer videoUrl="https://res.cloudinary.com/df23ubjbb/video/upload/v1628790148/General%20Media/RADMythicGarry.mp4" />
            </div>
          </div>
        </section>
      </div>
      <section>
        <Sectiontext
          subheader="Your Donation"
          headerone="100% of your donation goes to mental health care."
          body="We believe so strongly in the idea that your donation- every cent of it, should help someone in our community. Someone on your friend list, someone you queued up against, someone in the same Discord. Thanks to our partners, our operations are covered and your donation can have the most impact."
          learn="Learn more about our funding"
          link="/about"
          media={
            <div className="flex">
              {Partners.map((index) => (
                <div key={index.name} className="flex justify-center col-span-1 px-8 py-8">
                  <Link href={index.link}>
                    <a>
                      <Image
                        key={index.name}
                        alt={index.alt}
                        src={index.logo}
                        width="86"
                        height="86"
                        layout="intrinsic"
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          }
        />
      </section>
    </Layout>
  )
}

export const Partners = [
  {
    name: 'Jagex',
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1629765022/Logos/Jagexlogo.png.png',
    alt: 'Jagex, makers of Runescape, support Rise Above The Disorder.',
    link: 'https://www.jagex.com/en-GB/charitable-giving',
  },
  {
    name: 'Electronic Arts',
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1629766474/Logos/EAlogo.png.png',
    alt: 'Electronic Arts supports Rise Above The Disorder.',
    link: 'https://www.ea.com/compete/wellness',
  },
  {
    name: 'G4.tv',
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1629765666/Logos/G4logo.png.png',
    alt: 'G4.tv supports Rise Above The Disorder.',
    link: 'https://g4tv.com/',
  },
  {
    name: 'Columbia Records',
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1629765876/Logos/ColumbiaRecordslogo.jpg.jpg',
    alt: 'Columbia Records supports Rise Above The Disorder.',
    link: 'http://www.columbiarecords.com/',
  },
]
