import Sectionheader from '../components/Sectionheader'
import Image from 'next/image'

export const Story = [
  {
    id: 1,
    chapter: 1,
    chaptertext: (
      <Sectionheader
        color="text-black"
        subheader="Our Story"
        headerone="We're on a quest"
        headertwo="to change mental health care"
        bodytext="Overwhelmed with their mental health and unable to leave home, our founder hoped to help just one person before leaving this world. Their quest begain in the only world they felt they still existed in- The World of Warcraft."
        link="#"
      />
    ),
    chapterpicture: (
      <Image
        src="https://res.cloudinary.com/df23ubjbb/image/upload/v1630526311/StoryCover.png"
        alt="Pencil sketch of a video game character walking down a somber path. High mountain walls surround them."
        width="1920"
        height="1080"
        layout="intrinsic"
        objectFit="scale-down"
      />
    ),
  },
  {
    id: 2,
    chapter: 2,
    chaptertext: (
      <Sectionheader
        color="text-black"
        subheader="Our Story"
        headerone="We're on a quest"
        headertwo="to change mental health care"
        bodytext="Overwhelmed with their mental health and unable to leave home, our founder hoped to help just one person before leaving this world. Their quest begain in the only world they felt they still existed in- The World of Warcraft."
        link="#"
      />
    ),
    chapterpicture: (
      <Image
        src="https://res.cloudinary.com/df23ubjbb/image/upload/v1630526311/StoryCover.png"
        alt="A pencil sketch of our founder's in-game character. Before them, a vast in-game world filled with mountains, trees, and the portal they came from."
        width="1920"
        height="1080"
        layout="intrinsic"
        objectFit="scale-down"
      />
    ),
  },
  {
    id: 3,
    chapter: 3,
    chaptertext: (
      <Sectionheader
        color="text-black"
        subheader="Our Story"
        headerone="We're on a quest"
        headertwo="to change mental health care"
        bodytext="Overwhelmed with their mental health and unable to leave home, our founder hoped to help just one person before leaving this world. Their quest begain in the only world they felt they still existed in- The World of Warcraft."
        link="#"
      />
    ),
    chapterpicture: (
      <Image
        src="https://res.cloudinary.com/df23ubjbb/image/upload/v1630526311/Chapterstart.jpg"
        alt="Pencil sketch of a video game character walking down a somber path. High mountain walls surround them."
        width="1920"
        height="1080"
        layout="intrinsic"
        objectFit="scale-down"
      />
    ),
  },
]
