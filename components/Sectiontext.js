import Link from 'next/link'

export default function Sectiontext({ subheader, headerone, headertwo, body, learn, link, media }) {
  return (
    <div className="md:grid md:grid-cols-2 md:grid-flow-col-dense md:gap-20 md:space-y-0 items-center justify-between space-y-10">
      <div className="max-w-xl">
        <h5>{subheader}</h5>
        <h3>
          {headerone}{' '}
          <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            {headertwo}
          </span>
        </h3>
        <p>{body}</p>
        <div className="group relative inline-flex flex-row items-center mt-2 text-lg">
          <Link href={link}>
            <a className="inline-flex text-lg text-blue-700 transition-all duration-500">{learn}</a>
          </Link>
          <div className="absolute h-0.5 w-full -bottom-1 scale-x-0  bg-gradient-to-r z-0 from-pink-400 to-blue-400 group-hover:scale-x-100  transition-all duration-200 ease-out" />
        </div>
      </div>
      <div className="rounded-xl col-start-2 overflow-hidden border border-transparent">
        {media}
      </div>
    </div>
  )
}
