export default function Sectionheader({ subheader, headerone, headertwo, bodytext, color }) {
  return (
    <div className="max-w-4xl">
      <h5>{subheader}</h5>
      <h2 className="block text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-pink-400">
        <span className={color}>
          {headerone} {''}
        </span>
        {headertwo}
      </h2>
      <p>{bodytext}</p>
    </div>
  )
}
