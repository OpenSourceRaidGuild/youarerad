export default function Pageheader({
  subheader,
  headerone,
  headertwo,
  headerthree,
  charone,
  chartwo,
  charthree,
  color,
}) {
  return (
    <>
      <h5>{subheader}</h5>
      <h1 className={color}>
        {headerone}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-300">
          {charone}
        </span>
      </h1>
      <h1 className={color}>
        {headertwo}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-green-400">
          {chartwo}
        </span>
      </h1>
      <h1 className={color}>
        {headerthree}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">
          {charthree}
        </span>
      </h1>
    </>
  )
}
