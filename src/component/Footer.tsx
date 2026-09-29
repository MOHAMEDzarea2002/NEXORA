import assets from '../assets/assets';
import { CiLinkedin } from 'react-icons/ci';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="bg-slate-50  dark:bg-gray-900 pt-20 mt-20 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        {/* Logo & Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-5 text-gray-600 dark:text-gray-400"
        >
          <img src={assets.logo} />
          <p className="text-sm  py-6 max:w-md">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>
          <ul className="flex text-sm  space-x-4">
            <li className="hover:text-primary cursor-pointer transition-all">
              <a>Home</a>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all">
              <a>Services</a>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all">
              <a>Our Work</a>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all">
              <a>Testimonial</a>
            </li>
          </ul>
        </motion.div>
        {/* Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3>Subscribe to our newsletter</h3>
          <p className="text-sm  py-4 max:w-md">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white  border-2  border-gray-200 px-2 py-2  w-full rounded-sm outline-none mr-3"
            />
            <button className="px-4 py-2 rounded-sm  text-white cursor-pointer bg-primary ">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
      <hr className="border-2 border-gray-300 dark:border-gray-600 my-6 " />
      {/* Footer-bottom */}
      <div className="flex justify-between items-center pb-2 text-gray-600 dark:text-gray-400 ">
        <p className="text-sm ">Copyright 2025 © agency.ai - All Right Reserved.</p>
        <ul className="flex items-center space-x-2.5 text-md">
          <li>
            <a>
              <CiLinkedin />
            </a>
          </li>
          <li>
            <a>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a>
              <FaFacebookF />
            </a>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
