import Hero from '../components/Hero'
import SectionFive from '../components/SectionFive'
import SectionFour from '../components/SectionFour'
import SectionOne from '../components/SectionOne'
import SectionThree from '../components/SectionThree'
import SectionTwo from '../components/SectionTwo'
import Sections from '../components/Sections'
import Backward from '../components/Backward'
function Home() {
  return (
    <div>
    <Hero />
    <Sections />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <Backward />
    </div>
  )
}

export default Home