import Carousel from '../../components/Carousel';
import { trackPageVisit } from '../_actions/trackPageVisit';

export const metadata = {
  title: "Home | SJSFI",
  description: "Homepage of Saint Joseph School of Fairview Inc.",
};

export default async function Home() {
  // Track page visit when the page loads
  await trackPageVisit('home');

  return (
    <div className="w-full h-full ">
      <Carousel/>
    </div>
  );
}
