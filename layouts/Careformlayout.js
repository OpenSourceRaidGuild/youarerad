export default function CareFormLayout({ title, children }) {
  return (
    <div>
      <h2 className="py-8">{title}</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {children.map((items) => (
          <div key={items}>{items}</div>
        ))}
      </div>
    </div>
  )
}
