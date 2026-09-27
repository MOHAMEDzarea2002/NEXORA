import { FaRegUser } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Container from './Container';
import TitleSections from './TitleSections';
import type React from 'react';

export default function ContactUs() {

  // const accessKey = import.meta.env.API_WEB3_FORM;
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast.success('Form Submitted Successfully');
        event.currentTarget.reset();
      } else {
        console.log('Error', data);
        toast.error(data.message);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong';
      toast.error(message);
    }
  };

  return (
    <section id="Contact" className="py-30 ">
      <Container>
        <TitleSections
          title={'Contact us'}
          description={
            'Ready to grow your brand? Let’s connect and build something exceptional together.'
          }
        />
        <form
          onSubmit={onSubmit}
          className="grid sm:grid-cols-2 gap-2.5 sm:gap-5 max-w-2xl w-full mx-auto"
        >
          <div className="relative">
            <label className="pb-3 dark:text-gray-400">Your Name</label>
            <FaRegUser className="absolute top-12 left-3 text-lg dark:text-gray-400" />
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-400 pl-10 p-2 mt-3 rounded-lg outline-none focus:border-gray-500 dark:text-gray-400"
            />
          </div>
          <div className="relative">
            <label className="pb-3 dark:text-gray-400">Email</label>
            <MdOutlineEmail className="absolute top-12 left-3 text-lg dark:text-gray-400" />
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-400 pl-10 p-2 mt-3 rounded-lg outline-none focus:border-gray-500 dark:text-gray-400"
            />
          </div>
          <div className=" sm:col-span-2 ">
            <label className="pb-3 dark:text-gray-400">Message</label>
            <textarea
              rows={8}
              name="message"
              required
              placeholder="Enter your message"
              className="col-span-2 w-full border border-gray-400 pl-4 p-2 mt-3 rounded-lg outline-none focus:border-gray-500 dark:text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="col-span-2 bg-primary px-4 py-2 w-fit text-white rounded-sm cursor-pointer dark:shadow-gray-700 shadow-gray-300 shadow-lg flex items-center gap-1.5 tracking-[5px]"
          >
            Submit
            <FaLongArrowAltRight />
          </button>
        </form>
      </Container>
    </section>
  );
}
