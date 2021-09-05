import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import ReactPlayer from 'react-player/lazy'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Partner() {
  return (
    <Layout
      pageTitle="RAD Partnerships"
      pageLink="/partner"
      description="Join incredible partners like Electronic Arts, Jagex, Columbia Records, Dream, and more! Rise Above The Disorder partners with teams all over the world to make mental health care accessible to all."
      pageHeader={
        <section className="">
          <div className="space-y-16 lg:space-y-0 lg:justify-between lg:flex">
            <div className="w-full maw-w-xl">
              <Pageheader
                subheader="Partner With RAD"
                headerone="With your help"
                charone=","
                headertwo="everyone can access mental health care"
                chartwo="♡"
              />
            </div>
            <div className="relative w-full col-start-2 overflow-hidden border border-transparent lg:w-4/5 rounded-xl">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  playsinline={false}
                  playing={false}
                  width="100%"
                  height="100%"
                  controls={false}
                  muted={true}
                  loop={true}
                  url={'https://www.youtube.com/watch?v=AOlzu5r-PNol'}
                />
              </div>
            </div>
          </div>
        </section>
      }
    >
      <div className="bg-gray-50">
        <section>
          <div className="">
            <div aria-labelledby="Partnership oppertunities" className="">
              <div className="max-w-2xl mx-auto lg:px-0 lg:max-w-none">
                <div className="max-w-3xl">
                  <h2 id="Partnership types">Partnership Types:</h2>
                </div>
                <Tab.Group as="div" className="mt-4">
                  <div className="flex overflow-x-auto sm:mx-0">
                    <div className="flex-auto border-b border-gray-200 sm:px-0">
                      <Tab.List className="flex flex-wrap justify-between -mb-px lg:space-x-10 lg:justify-start">
                        {tabs.map((tab) => (
                          <Tab
                            key={tab.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? 'border-indigo-500 text-indigo-600'
                                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                'whitespace-nowrap py-6 border-b-2 font-medium text-md'
                              )
                            }
                          >
                            {tab.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                  </div>

                  <Tab.Panels as={Fragment}>
                    {tabs.map((tab) => (
                      <Tab.Panel key={tab.name} className="py-10 lg:space-y-16">
                        {tab.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                          >
                            <div className="mt-6 lg:mt-0 lg:col-span-5">
                              <h3 className="text-xl font-bold text-gray-900">
                                {feature.name}
                                <span className="text-blue-700">.</span>
                              </h3>
                              <p className="mt-2 text-lg text-gray-500">{feature.description}</p>

                              <Button linkTo="#"> Partnership Form </Button>
                            </div>
                            <div className="lg:col-span-7">
                              <div className="relative overflow-hidden rounded-lg ">
                                <div className="player-wrapper">
                                  <ReactPlayer
                                    className="react-player"
                                    playsinline={true}
                                    playing={true}
                                    width="100%"
                                    height="100%"
                                    controls={false}
                                    muted={true}
                                    loop={true}
                                    url={feature.video}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const tabs = [
  {
    name: 'Community Support',
    features: [
      {
        name: 'Make healing possible for your community',
        description:
          'Take your ambassador or community impact program to the next level with RAD! Electronic Arts provides free mental health care through RAD to their ambassadors, while Jagex has a fund for players of Runescape to access mental health care.',
        video: 'https://youtu.be/qFtfG9f_eDM',
        imageAlt: "Medical doctors volunteering for Rise Above The Disorder's clinical wing.",
      },
    ],
  },
  {
    name: 'Event Activations',
    features: [
      {
        name: 'Attend rad events with RAD',
        description:
          "Once it's safe to do so, we'd love to have you join us at all of the big conventions. Introduce content creators to our cause at TwitchCon, booth it up and party at PAX, and pass out positive letters at DreamHack.",
        video:
          'https://res.cloudinary.com/df23ubjbb/video/upload/v1630624088/General%20Media/ChessxCoinbase.mp4',
        imageAlt:
          'Rise Above The Disorder teams up with Chess.com, Coinbase, and some of the most well known content creators in the world for the ultimate Chess tournament.',
      },
    ],
  },
  {
    name: 'HR & Employee Care',
    features: [
      {
        name: 'Equip your team with game changing mental health care',
        description:
          "We're honored to be a core benefit for many of the greatest companies, teams, and agencies out there! When you empower your team with RAD, you provide them with access to a global network of mental health professionals ready to make sure they feel well.",
        video:
          'https://res.cloudinary.com/df23ubjbb/video/upload/v1628807282/General%20Media/teamworkshop.mp4',
        imageAlt: "A volunteer for Rise Above The Disorder's developer team.",
      },
    ],
  },

  {
    name: 'Programs & Care',
    features: [
      {
        name: 'Gaming for good',
        description:
          'From playing games with those in need of someone to game with to reporting concerning behavior across Twitch to our clinical team- our community volunteers help RAD keep people safe.',
        video:
          'https://res.cloudinary.com/df23ubjbb/video/upload/v1630635789/General%20Media/DreamclothingxRAD.mp4',
        imageAlt: "A volunteer for Rise Above The Disorder's community team.",
      },
    ],
  },
]
