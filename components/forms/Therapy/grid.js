export default function Careformgrid({ children }) {
  return (
    <>
      <div className="grid max-w-screen-md grid-cols-2 gap-4 sm:grid-cols-3">{children}</div>
    </>
  )
}
