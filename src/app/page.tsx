import Carousel from './components/Carousel';

export const metadata = {
  title: "Home | SJSFI",
  description: "Saint Joseph School of Fairview Inc. Official Website",
};

export default function Home() {
  return (
    <div className="w-full h-full ">
      <Carousel/>
    </div>
  );
}
