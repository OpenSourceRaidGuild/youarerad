import Layout from '../components/Layout.js'
import Pageheader from '../components/Pageheader.js'
import Image from 'next/image'
import Contactform from '../components/forms/Contact.js'

export default function Contact() {
  return (
    <Layout
      pageTitle="RAD Contact"
      description="Contact the team at Rise Above The Disorder! We're happy to answer any questions you may have about our programs, mental health, and our cause."
      pageLink="/contact"
      pageHeader={
        <section>
          <Pageheader
            subheader="Contact RAD"
            headerone="We're here to help"
            charone="."
            headertwo="Any question is welcome"
            chartwo="♡"
          />
        </section>
      }
    >
      <div className="px-4 mx-auto max-w-screen-2xl sm:px-6 md:px-8 lg:px-10 ">
        <div className="lg:space-x-20 lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="w-full">
              <Contactform />
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl h-80 lg:h-auto lg:w-1/2">
            <Image
              width="1080"
              height="1920"
              layout="intrinsic"
              objectFit="contain"
              objectPosition="top"
              src="https://res.cloudinary.com/df23ubjbb/image/upload/v1629928188/RADContact.jpg"
              alt="Twitch.tv's Garvey and volunteer Amy pose in front of Rise Above The Disorder's banner at TwitchCon."
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
