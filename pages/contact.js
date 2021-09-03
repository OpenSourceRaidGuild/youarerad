import Layout from '../components/Layout.js'
import Pageheader from '../components/Pageheader.js'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
  { id: 1, name: 'General Contact' },
  { id: 2, name: 'Care Department' },
  { id: 3, name: 'Partnerships' },
  { id: 4, name: 'Media Inquiries' },
  { id: 5, name: 'Fundraising' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
  const [selected, setSelected] = useState(people[3])

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
              <form>
                <div className="max-w-xl">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-base font-medium text-left text-gray-700"
                      >
                        Your Name:
                      </label>
                      <input htmlFor="name" type="text" id="name" autoComplete="true" />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-base font-medium text-left text-gray-700"
                      >
                        Your Email:
                      </label>
                      <input
                        htmlFor="email"
                        label="Your email:"
                        type="email"
                        id="email"
                        autoComplete="true"
                      />
                    </div>
                    <div>
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="block text-base font-medium text-left text-gray-700">
                              Send my message to:
                            </Listbox.Label>
                            <div className="relative mt-1">
                              <Listbox.Button className="relative w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-gray-300 shadow-sm cursor-default rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                <span className="block truncate">{selected.name}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  <SelectorIcon
                                    className="w-5 h-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none rounded-xl">
                                  {people.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                          'cursor-default select-none relative py-2 pl-3 pr-9 text-base'
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <span
                                            className={classNames(
                                              selected ? 'font-semibold' : 'font-normal',
                                              'block truncate text-base'
                                            )}
                                          >
                                            {person.name}
                                          </span>

                                          {selected ? (
                                            <span
                                              className={classNames(
                                                active ? 'text-white' : 'text-indigo-600',
                                                'absolute inset-y-0 right-0 flex text-base items-center pr-4'
                                              )}
                                            >
                                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                    <div className="sm:col-span-2 ">
                      <div className="">
                        <div className="flex justify-between">
                          <label
                            htmlFor="message"
                            className="block text-base font-medium text-left text-gray-700"
                          >
                            Message
                          </label>
                          <span
                            id="message-max"
                            className="block text-base font-medium text-left text-gray-700"
                          >
                            Max. 500 characters
                          </span>
                        </div>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full px-4 py-3 mt-1 border-2 border-gray-300 shadow-sm rounded-xl text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500"
                        aria-describedby="message-max"
                      />
                      <button
                        type="submit"
                        className="flex justify-center w-full p-3 my-8 overflow-hidden text-lg font-bold align-middle transition-all duration-300 ease-linear border-2 border-black rounded-xl shadow-primary hover:shadow-none hover:bg-black hover:text-white"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
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
