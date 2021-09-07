import Image from 'next/dist/client/image'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import DonateGuild from '../components/forms/Donate/Donateguild.js'
import Layout from '../components/Layout.js'
import Pageheader from '../components/Pageheader.js'
import Sectiontext from '../components/Sectiontext.js'

export default function Guild() {
  const [selected, setSelected] = useState(0)
  return (
    <Layout
      pageTitle="RAD The Guild"
      pageLink="/guild"
      description="Join incredible partners like Electronic Arts, Jagex, Columbia Records, Dream, and more! Rise Above The Disorder partners with teams all over the world to make mental health care accessible to all."
    >
      <section>
        <div className="space-y-16 lg:space-y-0 lg:justify-between lg:flex ">
          <div className="relative z-30">
            <Pageheader
              subheader="the guild"
              headerone="Join our guild"
              charone="&amp;"
              headertwo="Provide therapy to people in need"
              chartwo="♡"
            />
          </div>
          <div className="relative z-0 overflow-hidden lg:w-2/5 rounded-xl">
            {' '}
            <DonateGuild />
          </div>
        </div>
      </section>
      <div className="relative text-white bg-black">
        <section>
          <Sectiontext
            subheader="Your membership"
            headerone="At just $1 a day,"
            headertwo="you join a community of IRL healers"
            body="Over a decade ago, our founder took what little was left from his disability check to pay for someone's therapy. Alone, he was able to pay for one therapy session a month. As a guild, RAD has been able to cover thousands of therapy sessions. "
            link=""
            media={
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  playing={true}
                  width="100%"
                  height="100%"
                  controls={false}
                  muted={true}
                  loop={true}
                  url="https://res.cloudinary.com/df23ubjbb/video/upload/v1630889981/Untitled_project_2021-09-05_17_53_1_c3ifsn.mp4"
                />
              </div>
            }
          />
          <div className="flex flex-wrap pt-16 lg:grid lg:grid-cols-3">
            <div>
              <h5>Discord</h5>
              <p className="text-white">Join an international community</p>
            </div>
            <div>
              <h5>Discord</h5>
              <p className="text-white">Join an international community</p>
            </div>{' '}
            <div className="overflow-hidden rounded-xl">
              <Image
                width="400"
                height="200"
                objectFit="fill"
                src="https://res.cloudinary.com/df23ubjbb/image/upload/v1630893466/E-OwTMAUUAUGktf_vga0ut.jpg"
                alt=""
              />
              <h5>Achievements</h5>
              <p className="text-white">Join an international community</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
