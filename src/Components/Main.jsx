import DemoCarousel from "./SectionOneCarousel";
import SectionThree from "./SectionThree";
import HomeMenOrWomen from "./HomeMenOrWomen";

function Main() {
  return (
    <>
    <DemoCarousel />
    <SectionThree />
    <HomeMenOrWomen genderFolder='menProducts' title='Men' />
    <HomeMenOrWomen genderFolder='womenProducts' title='Women' />
    </>
  );
}


export default Main;