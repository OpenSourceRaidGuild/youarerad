export type Resource = {
  name: string
  href: string
  icon: React.FC<{ className: string }>
}

export type BlogPost = {
  id: number
  name: string
  href: string
  preview: string
  imageUrl: string
}
