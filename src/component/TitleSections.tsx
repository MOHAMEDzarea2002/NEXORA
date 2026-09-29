import { motion } from 'motion/react';

type PropsType = {
  title: string;
  description: string;
};
export default function TitleSections({ title, description }: PropsType) {
  return (
    <div

      className="text-center my-4 dark:text-white/70"
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-5xl "
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 ,delay:0.7}}
        viewport={{ once: true }}
        className="mb-8 mt-4 text-gray-500 max-w-lg mx-auto text-[16px]"
      >
        {description}
      </motion.p>
    </div>
  );
}
