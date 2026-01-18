import Carousel from '../../components/home/Carousel';
import Announcements from '@/components/home/Announcements';
import LatestNews from '@/components/home/LatestNews';
import CallToAction from '@/components/home/CallToAction';
import SocialMedia from '@/components/home/SocialMedia';
import { trackPageVisit } from '../_actions/trackPageVisit';

export const metadata = {
  title: "Home | SJSFI",
  description: "Saint Joseph School of Fairview Inc. - Excellence in education since 1996. Offering quality education from Preschool to Senior High School in Quezon City.",
};

export default async function Home() {
  // Track page visit when the page loads
  await trackPageVisit('home');

  return (
    <div className="w-full">
      <Carousel />
      <CallToAction />

      {/* Announcements and Latest News Side by Side */}
      <section className="bg-white px-6 py-12 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Announcements />
            <LatestNews />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <SocialMedia />
    </div>
  );
}
