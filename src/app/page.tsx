import HeaderExact from '@/components/HeaderExact';
import HeaderMobile from '@/components/HeaderMobile';
import HeroMogga from '@/components/HeroMogga';
import MoggaCave from '@/components/MoggaCave';
import RoadmapWall from '@/components/RoadmapWall';
import TokenomicsSection from '@/components/TokenomicsSection';
import FooterMogga from '@/components/FooterMogga';
import FooterMoggaMobile from '@/components/FooterMoggaMobile';

export default function Page() {
  return (
    <>
      <HeaderExact />
      <HeaderMobile/>
      <HeroMogga />
      <MoggaCave />
      <RoadmapWall />
      <TokenomicsSection />
      <FooterMogga />
      <FooterMoggaMobile />
      


    </>
  );
}
