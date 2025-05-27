// comment out the import statement to avoid errors
// import Hero from './components/Hero';
// import Carousel from './components/Carousel';
// import Chatbot from './components/Chatbot';

export const metadata = {
  title: "Saint Joseph School of Fairview Inc.",
  description: "Saint Joseph School of Fairview Inc. Official Website",
};

export default function Home() {

  return (
    <>
      <div className="flex flex-col bg-white">
        <div className="relative w-full ">
          {/* Content goes here */}
          <p className='flex justify-center items-center text-black font-medium text-2xl'>Sample Content</p>
        </div>
      </div>
    </>
  );
}
