import FeaturesSlider from "./_components/FeaturesSlider";
import { Hero } from "./_components/Hero";
import { HomeProducts } from "./_components/HomeProducts";
import ProductSlider from "./_components/ProductSlider";
import { TrustedBy } from "./_components/TrustedBy";

export default function Home() {
  return (
 
    <>
    <div> <Hero/>
    <ProductSlider/>
    <FeaturesSlider/>
    <TrustedBy/></div>
   
    </>
  );
}
