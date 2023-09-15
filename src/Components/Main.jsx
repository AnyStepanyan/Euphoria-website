import DemoCarousel from "./SectionOneCarousel";
import SectionThree from "./SectionThree";
import HomeMenOrWomen from "./HomeMenOrWomen";

function Main() {
  return (
    <>
      <DemoCarousel />
      <SectionThree />
      <HomeMenOrWomen genderFolder="menProducts" title="Men" href='/menProducts' />
      <HomeMenOrWomen genderFolder="womenProducts" title="Women" href='/womenProducts'/>
    </>
  );
}


export default Main;

