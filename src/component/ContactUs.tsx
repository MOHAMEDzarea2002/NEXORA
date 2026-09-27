import { FaRegUser } from 'react-icons/fa';
import Container from './Container';
import TitleSections from './TitleSections';

export default function ContactUs() {
  return (
    <section id="Contact" className="py-30 ">
      <Container>
        <TitleSections
          title={'Contact us'}
          description={
            'Ready to grow your brand? Let’s connect and build something exceptional together.'
          }
        />
        <form className="grid sm:grid-cols-2 gap-2.5 sm:gap-5 max-w-2xl w-full mx-auto">
          <div className="relative">
            <label className="pb-3 dark:text-gray-400">Your Name</label>
            <FaRegUser className="absolute top-12 left-3 text-lg dark:text-gray-400" />
            <input
              type="text"
              required
              placeholder="Enter"
              className="w-full border border-gray-400 pl-10 p-2 mt-3 rounded-lg outline-none focus:border-gray-500 dark:text-gray-400"
            />
          </div>
          <div className="relative">
            <label className="pb-3 dark:text-gray-400">Your Name</label>
            <FaRegUser className="absolute top-12 left-3 text-lg dark:text-gray-400" />
            <input
              type="text"
              required
              placeholder="Enter"
              className="w-full border border-gray-400 pl-10 p-2 mt-3 rounded-lg outline-none focus:border-gray-500 dark:text-gray-400"
            />
          </div>
          <div className=" sm:col-span-2 ">
            <label className="pb-3 dark:text-gray-400">Your Name</label>
            <textarea
              rows={8}
              required
              placeholder="Enter"
              className="col-span-2 w-full border border-gray-400 pl-4 p-2 mt-3 rounded-lg outline-none focus:border-gray-500 dark:text-gray-400"
            />
          </div>
          <button className="bg-primary px-4 py-2 w-fit text-white rounded-sm cursor-pointer dark:shadow-gray-700 shadow-gray-300 shadow-lg">
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
}
