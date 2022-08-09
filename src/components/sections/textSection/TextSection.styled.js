import tw from "tailwind-styled-components"
import { HeadingH2 } from "../../ui/fontSizes"

export const SectionHeading = tw(HeadingH2)`
    text-2xl
    font-bold
    leading-tight
    mb-4
    font-sans
    lg:text-3xl
`
export const SectionWrapper = tw.div`

`
export const TextSectionWrapper = tw.div`
grid
grid-cols-1
lg:grid-cols-3
mt-4 
mb-4
`
export const TitleAndTextWrapper = tw.div`
lg:col-span-2
lg:${props => props.imageLocation === "left" ? "order-2" : "order-1"}
`
export const ImageWrapper = tw.div`
lg:${props => props.imageLocation === "left" ? "order-1" : "order-2"}
`
export const Image = tw.img`
rounded-md
object-cover
max-h-80
w-full
`