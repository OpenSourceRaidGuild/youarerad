type TSectionHeaderProps = {
  subheader: string
  headerone: string
  headertwo: string
  bodytext?: string
  color: string
}
export default function Sectionheader({ subheader, headerone, headertwo, bodytext, color }: TSectionHeaderProps) {
  return (
    <div className="max-w-4xl">
      <h5>{subheader}</h5>
      <h2 className="text-rad">
        <span className={color}>{headerone}</span>
        {headertwo}
      </h2>
      {bodytext && <p>{bodytext}</p>}
    </div>
  )
}
