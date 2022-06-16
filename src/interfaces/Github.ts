export interface Github {
  title: string
  description: string
  link: Link[]
  image: string
  category: any[]
  items: Item[]
}

interface Item {
  id: string
  title: string
  link: string
  author: string
  published: number
  created: number
  category: any[]
  content: string
  enclosures: Enclosure[]
  media: Media
}

interface Media {
  thumbnail: Enclosure
}

interface Enclosure {
  height: string
  width: string
  url: string
}

interface Link {
  type: string
  rel: string
  href: string
}
