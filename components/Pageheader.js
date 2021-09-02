export default function Pageheader({
    subheader,
    headerone,
    headertwo,
    headerthree,
    charone,
    chartwo,
    charthree,
  }) {
    return (
      <>
        <h5>{subheader}</h5>
        <h2>
          {headerone}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-300">
            {charone}
          </span>
        </h2>
        <h2>
          {headertwo}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-green-400">
            {chartwo}
          </span>
        </h2>
        <h2>
          {headerthree}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">
            {charthree}
          </span>
        </h2>
      </>
    )
  }