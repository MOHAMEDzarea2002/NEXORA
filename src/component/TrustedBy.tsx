import  { company_logos } from '../assets/assets';
import Container from './Container';
import { motion } from 'motion/react';

export default function TrustedBy() {
  return (
    <motion.div className="pt-30  text-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg sm:text-2xl  text-gray-700 dark:text-white/75  font-semibold"
          >
            Trusted by Leading Companies
          </motion.h3>
          <motion.div
          initial='hidden'
          whileInView='visible'
          transition={{staggerChildren:0.5}}
          viewport={{once:true}}
          className="flex items-center justify-center flex-wrap gap-10 pt-10">
            {company_logos.map((logo) => (
              <motion.img
              variants={{
              hidden:{opacity:0,y:10},
              visible:{opacity:1,y:0}
              }}
              key={logo} src={logo} className="max-h-5 sm:max-h-6 dark:drop-shadow-xl" />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
}
