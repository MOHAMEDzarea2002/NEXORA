import TitleSections from './TitleSections';
import Container from './Container';
import {teamData} from '../assets/assets';

export default function TheTeam() {
  return (
    <div id="" className="pt-20">
      <Container>
        <TitleSections
          title="Meet the team"
          description="A passionate team of digital experts dedicated to your
brand’s success."
        />
        <div className="grid grid-cols-4 gap-6">
          {teamData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl shadow-gray-100 dark:shadow-white/5 flex items-center gap-3.5 p-6 rounded-lg dark:bg-gray-900
              border border-gray-100 dark:border-gray-700"
            >
              <img src={item.image} className="rounded-full w-12" />
              <div>
                <h3 className=" dark:text-white">{item.name}</h3>
                <p className="text-sm mt-2 text-gray-400 dark:text-white/70">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
