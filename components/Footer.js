import Mayhover from './lotties/may'
import Link from 'next/dist/client/link'
import Newsletter from './forms/Newsletter'

export const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Therapy', href: '/therapy' },
    { name: 'Donate', href: '/donate' },
    { name: 'Stream', href: '/stream' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Partner', href: '/partner' },
    { name: 'Contact', href: '/contact' },
    { name: 'Merch', href: '/merch' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
}

export const socials = [
  {
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628595192/Logos/Discord-Logo-Color_dpa4dc.svg',
    href: 'https://www.discord.gg/youarerad/',
    alt: "RAD's Discord server.",
  },
  {
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628594911/Logos/Instagram_logo_2016_zc39qn.svg',
    href: 'https://www.instagram.com/riseabovethedisorder/',
    alt: "RAD's Instagram page.",
  },
  {
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628595113/Logos/Twitch_Glitch_Logo_Purple_fehjtj.svg',
    href: 'https://www.twitch.tv/youarerad',
    alt: "RAD's Twitch channel.",
  },
  {
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628594660/Logos/Logo_blue_tbwwed.svg',
    href: 'https://twitter.com/YouAreRAD',
    alt: "RAD's Twitter page",
  },
]

export default function Footer() {
  return (
    <div className="w-full px-4 py-16 mx-auto lg:max-w-lg lg:px-0">
      <div id="footer" className="w-1/2 mx-auto">
        <Mayhover />
        <h2 className="sr-only">Footer</h2>
      </div>
      <div className="">
        <h2>
          Stay RAD
          <span className="text-indigo-400">.</span>
        </h2>
        <p className="pt-2">
          Subscribe to our newsletter to be updated on our mission to make mental health care
          accessible to everyone.
        </p>
        <div className="pt-4">
          <Newsletter />
        </div>
      </div>
      <div className="pt-4">
        <nav className="flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.href} className="relative text-base lowercase group">
              <Link href={item.href}>
                <a className="grid grid-flow-row mx-4 mt-4">{item.name}</a>
              </Link>
              <div className="absolute h-0.5 w-full -bottom-1 scale-x-0  bg-gradient-to-r z-0 from-pink-400 to-blue-400 group-hover:scale-x-100  transition-all duration-200 ease-out" />
            </div>
          ))}
        </nav>
      </div>

      <div className="text-center">
        <p className="pt-4">© Copyright Rise Above The Disorder 2021</p>
        <div className="flex flex-row items-center justify-center mx-auto mt-3 space-x-5">
          {socials.map((social) => (
            <a href={social.href} key={social.logo}>
              <img src={social.logo} width="40" height="auto" alt={social.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
