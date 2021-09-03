import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'
import Videoplayer from '../components/utils/Videoplayer'
import Sectionheader from '../components/Sectionheader'
import {
  BeakerIcon,
  HeartIcon,
  StarIcon,
  GlobeAltIcon,
  HomeIcon,
  BookmarkAltIcon,
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Careers() {
  return (
    <Layout
      pageTitle="RAD Careers"
      pageLink="/careers"
      description="Learn more working at Rise Above The Disorder. Mental health care is a human right- we're the team fighting to make it a reality. Informed by the latest research on workspace wellbeing, we offer some of the greatest benefits and encourage seperation between work and personal life."
      pageHeader={
        <section>
          <div className="lg:space-y-0 lg:justify-between lg:flex space-y-16">
            <div>
              <Pageheader
                subheader="Careers at RAD"
                headerone="Everyone deserves therapy"
                charone="&amp;"
                headertwo="We're making it a reality that"
                chartwo="♡"
              />
            </div>
            <div className="lg:w-2/5 rounded-xl relative w-full overflow-hidden">
              <Videoplayer videoUrl="https://res.cloudinary.com/df23ubjbb/video/upload/v1629827299/General%20Media/rad-volunteers.mov" />
            </div>
          </div>
        </section>
      }
    >
      <div className="bg-gray-50 text-black">
        <section>
          <Sectionheader
            color="text-black"
            subheader="Perks &amp; Benefits"
            headerone="Everyone deserves to feel well."
            headertwo="That means you, too!"
          />
          <div className="sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px rounded-xl max-w-screen-md mx-auto mt-16 overflow-hidden text-center divide-y divide-gray-200 shadow">
            {perks.map((context, contextIdx) => (
              <div
                key={context.id}
                className={classNames(
                  contextIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                  contextIdx === 1 ? 'sm:rounded-tr-lg' : '',
                  contextIdx === context.length - 2 ? 'sm:rounded-bl-lg' : '',
                  contextIdx === context.length - 1
                    ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                    : '',
                  'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                )}
              >
                <div>
                  <span
                    className={classNames(
                      context.iconBackground,
                      context.iconForeground,
                      'rounded-xl inline-flex p-3 ring-4 ring-white'
                    )}
                  >
                    <context.icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-medium">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {context.id}
                  </h3>
                  <p className="text-gray-500">{context.context}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div>
        <section>
          <Sectionheader subheader="Open Positions" headerone="Ready to change the world?" />
          <div className="sm:rounded-xl max-w-screen-md mx-auto mt-16 overflow-hidden bg-white shadow">
            <ul role="list" className="divide-y divide-gray-200">
              {positions.map((position) => (
                <li key={position.id}>
                  <a href="#" className="hover:bg-gray-50 block">
                    <div className="sm:px-6 px-4 py-4">
                      <div className="flex items-center justify-between">
                        <p className=" font-medium text-black truncate">{position.title}</p>
                        <div className="relative flex items-center flex-shrink-0 ml-2">
                          <p className="rounded-xl inline-flex px-2 pt-0 text-xs font-semibold leading-5 text-black bg-green-100">
                            {position.type}
                          </p>
                          <span
                            className="top-6 right-6 group-hover:text-gray-400 absolute text-gray-300 pointer-events-none"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="sm:flex sm:justify-between mt-2">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <UsersIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            {position.department}
                          </p>

                          <p className="sm:mt-0 sm:ml-6 flex items-center mt-2 text-sm text-gray-500">
                            <LocationMarkerIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            {position.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const perks = [
  {
    id: '401k',
    context: 'Matching 401k with an additional %3 of total salary added as a bonus each year.',
    icon: BeakerIcon,
    iconForeground: 'text-indigo-400',
    iconBackground: 'bg-indigo-50',
  },
  {
    id: 'Work Remote',
    context: 'Work from the comfort of your home or from our office in the heart of Los Angeles.',
    icon: GlobeAltIcon,
    iconForeground: 'text-pink-400',
    iconBackground: 'bg-pink-50',
  },
  {
    id: 'Health Insurance',
    context: 'Platnium plans with full coverage for your physical and mental health.',
    icon: HeartIcon,
    iconForeground: 'text-green-400',
    iconBackground: 'bg-green-50',
  },
  {
    id: 'Caregiver Leave',
    context: 'New parents receive 14 months of paid leave and continued access to all benefits. ',
    icon: HomeIcon,
    iconForeground: 'text-yellow-400',
    iconBackground: 'bg-yellow-50',
  },
  {
    id: 'Paid Time Off',
    context: 'Vacations, family matters, voting, protests, and mental health days are all welcome.',
    icon: StarIcon,
    iconForeground: 'text-red-400',
    iconBackground: 'bg-red-50',
  },
  {
    id: 'Mentorship',
    context: 'Connect and learn with leaders from across tech, gaming, mental health, and more.',
    icon: BookmarkAltIcon,
    iconForeground: 'text-blue-400',
    iconBackground: 'bg-blue-50',
  },
]

export const positions = [
  {
    id: 1,
    title: 'Back End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
]
