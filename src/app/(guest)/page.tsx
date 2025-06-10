import Carousel from '../../components/Carousel';

export const metadata = {
  title: "Home | SJSFI",
  description: "Homepage of Saint Joseph School of Fairview Inc.",
};

export default function Home() {
  return (
    <div className="w-full h-full ">
      <Carousel/>
    </div>
  );
}
