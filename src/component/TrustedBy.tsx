import  { company_logos } from '../assets/assets';
import Container from './Container';

export default function TrustedBy() {
  return (
    <div className="py-10  text-center">
      <Container>
        <div className="relative">
          <h3 className="text-lg sm:text-2xl  text-gray-700 dark:text-white/75  font-semibold">
            Trusted by Leading Companies
          </h3>
          <div className="flex items-center justify-center flex-wrap gap-10 pt-10">
            {company_logos.map((logo) => (
              <img key={logo} src={logo} className="max-h-5 sm:max-h-6 dark:drop-shadow-xl" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
