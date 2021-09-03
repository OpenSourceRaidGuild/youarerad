import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'
import Sectiontext from '../components/Sectiontext'
import VideoPlayer from '../components/utils/VideoPlayer'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { Button } from '../components/Button'
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Volunteer() {
  return (
    <Layout
      pageTitle="RAD Volunteer"
      pageLink="/volunteer"
      description="Learn more about volunteering with Rise Above The Disorder. Equipped with your time and talent, we can make mental health care accessible to everyone."
      pageHeader={
        <section>
          <Pageheader
            subheader="Volunteering"
            headerone="Help us make healing possible"
            charone="&amp;"
            headertwo="Have fun doing it"
            chartwo="♡"
          />
        </section>
      }
    >
      <div className="bg-gray-50 text-black">
        <section>
          <Sectiontext
            subheader="A Community Effort"
            headerone="Giving what you can,"
            headertwo="to help others rise above."
            body="Originally founded as a World of Warcraft guild, our cause has always depended on volunteers. From reviewing text on this site, to traveling to remote countries around the world to setup our programs, there are plenty of rad ways to help others rise above."
            link="#"
            media={
              <div className="rounded-xl overflow-hidden border">
                <VideoPlayer videoUrl="https://res.cloudinary.com/df23ubjbb/video/upload/v1629827299/General%20Media/rad-volunteers.mov" />
              </div>
            }
          />
        </section>
      </div>
      <div>
        <section>
          <div className="bg-white">
            <div aria-labelledby="Volunteer positions open" className="">
              <div className="lg:px-0 lg:max-w-none max-w-2xl mx-auto">
                <div className="max-w-3xl">
                  <h2 id="volunteer work">Looking for more:</h2>
                </div>

                <Tab.Group as="div" className="mt-4">
                  <div className="sm:mx-0 flex -mx-4 overflow-x-auto">
                    <div className="sm:px-0 flex-auto border-b border-gray-200">
                      <Tab.List className="flex -mb-px space-x-10">
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
                      <Tab.Panel key={tab.name} className="lg:space-y-16 py-10">
                        {tab.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="lg:grid lg:grid-cols-12 lg:gap-x-8 flex flex-col-reverse"
                          >
                            <div className="lg:mt-0 lg:col-span-5 mt-6">
                              <h3 className="text-xl font-bold text-gray-900">
                                {feature.name}
                                <span className="text-blue-700">.</span>
                              </h3>
                              <p className="mt-2 text-lg text-gray-500">{feature.description}</p>

                              <Button linkTo="#"> Volunteer Form </Button>
                            </div>
                            <div className="lg:col-span-7">
                              <div className="sm:aspect-w-16 sm:aspect-h-19 relative overflow-hidden rounded-lg">
                                <Image
                                  src={feature.imageSrc}
                                  alt={feature.imageAlt}
                                  width="1920"
                                  height="1080"
                                  layout="intrinsic"
                                  objectFit="cover"
                                  className="rounded-xl"
                                />
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
    name: 'Coding',
    features: [
      {
        name: 'Leveling up mental healthcare',
        description:
          'The RAD team is always looking for programmers to join us on the frontlines of mental healthcare tech. The repo for this website is open for suggestion, while our new backend intake system and crisis detection Discord bot are looking for long-term volunteers.',
        imageSrc:
          'https://res.cloudinary.com/df23ubjbb/image/upload/v1629839867/RADDevVolunteer.jpg',
        imageAlt: "A volunteer for Rise Above The Disorder's developer team.",
      },
    ],
  },
  {
    name: 'Clinical',
    features: [
      {
        name: 'Champions for wellness',
        description:
          'Work alongside our social work team to make mental health care accessible around the world. Translating clinical texts to various languages, providing screenings, offering expertise,or working on our warmline are immediate ways to support.',
        imageSrc:
          'https://res.cloudinary.com/df23ubjbb/image/upload/v1629839998/RADCareVolunteers.png',
        imageAlt: "Medical doctors volunteering for Rise Above The Disorder's clinical wing.",
      },
    ],
  },
  {
    name: 'Community',
    features: [
      {
        name: 'Gaming for good',
        description:
          'From playing games with those in need of someone to game with to reporting concerning behavior across Twitch to our clinical team- our community volunteers help RAD keep people safe.',
        imageSrc:
          'https://res.cloudinary.com/df23ubjbb/image/upload/v1629839970/RADCommunityVolunteer.jpg',
        imageAlt: "A volunteer for Rise Above The Disorder's community team.",
      },
    ],
  },
  {
    name: 'Event',
    features: [
      {
        name: 'Attend rad events with RAD',
        description:
          "Once it's safe to do so, we'd love to have you join us at all of the big conventions. Introduce content creators to our cause at TwitchCon, booth it up and party at PAX, and pass out positive letters at DreamHack.",
        imageSrc:
          'https://res.cloudinary.com/df23ubjbb/image/upload/v1629839891/RADEventVolunteers.jpg',
        imageAlt: 'Volunteers for Rise Above The Disorder at Pax West in 2018.',
      },
    ],
  },
]