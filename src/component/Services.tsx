import assets from '../assets/assets';
import Container from './Container';
import CardServices from './ServicesCard';
import TitleSections from './TitleSections';
//  Motion
import { motion } from 'motion/react';
export default function Services() {
  const DataCate = [
    {
      icon: assets.marketing_icon,
      title: 'Advertising',
      subtitle: 'We turn bold ideas into powerful digital solutions that connect, engage...',
    },
    {
      icon: assets.social_icon,
      title: 'Content writing',
      subtitle: 'We turn bold ideas into powerful digital solutions that connect...',
    },
    {
      icon: assets.content_icon,
      title: 'Social media',
      subtitle: 'We turn bold ideas into powerful digital solutions that connect, engage...',
    },
    {
      icon: assets.ads_icon,
      title: 'Content',
      subtitle: 'We turn bold ideas into powerful digital solutions that connect, engage and...',
    },
  ];

  return (
    <section id="services" className=" pt-30 relative overflow-hidden">
      <Container>
        <TitleSections
          title={'How can we help?'}
          description={
            'From strategy to execution, we craft digital solutions that move your business forward.'
          }
        />
        <img
          src={assets.bgImage2}
          className="absolute   sm:-left-60 sm:-top-70 -z-10 dark:hidden w-full max-w-5xl"
        />

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {DataCate.map((data, index) => (
            <CardServices
              index={index}
              key={index}
              title={data.title}
              subTitle={data.subtitle}
              icon={data.icon}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
