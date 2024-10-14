'use client';
import { ReactYTFlexible } from 'react-yt-flexible';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const thumbnails = [
    {
      videoId: "GDlkCkcIqTs",
      title: "Introducing iPhone 16",
      description: "Meet iPhone 16. Built for Apple Intelligence. Turbocharged with the new A18 chip. Featuring all-new Camera Control."
    },
    {
      videoId: "bCqnOn23LWE",
      title: "Introducing the all-new AirPods 4",
      description: "Powered by the H2 chip, the new AirPods 4 feature an updated fit for all-day comfort and a totally transformed audio experience."
    },
    {
      videoId: "eYJcUtVIB_g",
      title: "The Making of Submerged",
      description: "A behind the scenes look at Submerged, the first scripted film in Apple Immersive Video. Join Academy Award® Winners Edward Berger."
    }
  ];

  return (
    <div className="relative min-h-screen min-w-full">
      {/* --- MAIN --- */}
      <main className="bg-white">
        {/* --- HERO --- */}
        <section className="flex flex-col justify-center items-center relative w-full py-16 border-b border-slate-200">
          <img
            className="h-24 w-auto"
            src="/logo.png"
            alt="logo"
          />
          <h1 className="text-slate-900 font-extrabold text-4xl md:text-5xl tracking-tight text-center mt-8">
            React YouTube Flexible
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-4xl mx-auto">
            A flexible React component for embedding YouTube videos or thumbnails with customizable aspect ratios and advanced features. It simplifies the integration of YouTube content into your application with custom styles and classes, all in a lightweight and easy-to-use manner.
          </p>
        </section>
        {/* --- HERO --- */}
        {/* --- VIDEOS --- */}
        <section className="relative py-16 bg-slate-100 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight text-center">
              YouTube Videos
            </h2>
            <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
              <p className="mt-6 text-lg text-slate-500">
                {`You can easily integrate YouTube videos into your application by simply passing the video ID to our component. The video automatically adjusts to your design, and you can further customize it if needed. Without complications, you get an embedded video that adapts to your component.`}
              </p>
            </div>
            <div className="mt-12 mx-auto max-w-5xl p-4 rounded-3xl bg-white border border-slate-300 shadow-2xl">
              <ReactYTFlexible
                videoId="e6T34u51MaA"
                borderRadius="0.5rem" />
            </div>
          </div>
        </section>
        {/* --- VIDEOS --- */}
        {/* --- THUMBNAIL --- */}
        <section className="relative py-16 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight text-center">
              YouTube Thumbnail
            </h2>
            <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
              <p className="mt-6 text-lg text-slate-500">
                {`You can use the component to display only the video thumbnail and redirect the user to the full video. Additionally, you can apply custom styles and Tailwind CSS classes to adjust the appearance. The classes not only allow you to style the component but also add interactive effects.`}
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              {thumbnails.map((item, index) => (
                <div key={index} className="group p-4 rounded-3xl bg-white border border-slate-200 shadow-2xl">
                  <div className="relative overflow-hidden rounded-xl">
                    <ReactYTFlexible
                      videoId={item.videoId}
                      className={"transition duration-500 group-hover:scale-105"}
                      mode="thumbnail" />
                  </div>
                  <div className="mt-4 relative">
                    <h5 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h5>
                    <p className="mt-4 text-slate-500">
                      {item.description}
                    </p>
                    <button className="group mt-4 inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-950"
                      onClick={() => { window.open(`https://www.youtube.com/watch?v=${item.videoId}`, '_blank'); }}>
                      Watch Video
                      <svg className="overflow-visible ml-3 text-slate-400 group-hover:text-white" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* --- THUMBNAIL --- */}
      </main>
      {/* --- MAIN --- */}
      {/* --- FOOTER --- */}
      <footer className="bg-slate-100">
        <div className="mx-auto max-w-7xl p-6">
          <p className="text-xs text-slate-500">Made with <HeartIcon className="h-4 w-4 inline-block text-red-500" /> by Luis Reynaldo</p>
          <p className="text-xs text-slate-500">&copy; {` ${new Date().getFullYear()}`}. All rights reserved</p>
        </div>
      </footer>
      {/* --- FOOTER --- */}
    </div>
  );
}
