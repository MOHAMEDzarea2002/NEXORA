
import Container from './Container';
import assets, { teamData } from '../assets/assets';

export default function HeroSection() {
  return (
    <section id="hero" className=" py-20 overflow-hidden dark:text-white">
      <Container>
        <div className="flex flex-col items-center text-center gap-6">
          {/* avatar image &  text */}
          <div className="text-sm dark:text-white  border-2 border-gray-200 flex items-center gap-1.5 p-1 rounded-full">
            <div className=" flex items-center ">
              {teamData
                .map((img) => (
                  <img
                    src={img.image}
                    className="rounded-full w-7 not-first:-ml-2 border-white border-2"
                  />
                ))
                .splice(4)}
            </div>
            <p>Trusted by 10k+ people</p>
          </div>
          {/* Title & subtitle */}
          <div>
            <h2
              className="text-4xl sm:text-5xl md:text-7xl xl:[84px] max-w-5xl xl:leading-[94px]  font-medium
            "
            >
              Turning imagination into
              <span className="bg-gradient-to-r from-[#5044E5] to-[#4E3504] bg-clip-text text-transparent">
                {' '}
                digital{' '}
              </span>
              impact.
            </h2>
            <p className="mt-6 mx-auto max-w-4/5 sm:max-w-lg text-sm sm:text-lg font-medium dark:text-white/75">
              Creating meaningful connections and turning big ideas into interactive digital
              experiences.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative ">
            <img src={assets.hero_img} className=" w-full max-w-6xl  " />
            <img
              src={assets.bgImage1}
              className="-z-10 absolute -top-40 -right-40 sm:-right-70 sm:-top-100 dark:hidden"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
