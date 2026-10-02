
import assets, { teamData } from '../assets/assets';
import Container from './Container';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section id="hero" className=" pt-30 overflow-hidden dark:text-white">
      <Container>
        <div className="flex flex-col items-center text-center gap-6">
          {/* avatar image &  text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm dark:text-white  border-2 border-gray-200 flex items-center gap-1.5 p-1 rounded-full"
          >
            <div className=" flex items-center ">
              {teamData
                .map((img,index:number) => (
                  <img
                  key={index}
                    src={img.image}
                    className="rounded-full w-7 not-first:-ml-2 border-white border-2"
                  />
                ))
                .splice(4)}
            </div>
            <p>Trusted by 10k+ people</p>
          </motion.div>
          {/* Title & subtitle */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl xl:[84px] max-w-5xl xl:leading-[94px]  font-medium
            "
            >
              Turning imagination into
              <span className="bg-gradient-to-r from-[#5044E5] to-[#4E3504] bg-clip-text text-transparent">
                {' '}
                digital{' '}
              </span>
              impact.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 mx-auto max-w-4/5 sm:max-w-lg text-sm sm:text-lg font-medium dark:text-white/75"
            >
              Creating meaningful connections and turning big ideas into interactive digital
              experiences.
            </motion.p>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: true }}
            className="relative "
          >
            <img src={assets.hero_img} className=" w-full max-w-6xl  " />
            <img
              src={assets.bgImage1}
              className="-z-10 absolute -top-40 -right-40 sm:-right-70 sm:-top-100 dark:hidden"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
