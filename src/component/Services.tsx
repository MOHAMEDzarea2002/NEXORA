import assets from '../assets/assets';
import CardServices from './ServicesCard';
import Container from './Container';
import TitleSections from './TitleSections';
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
    <div className=" pt-20 relative overflow-hidden">
      <Container>
        <TitleSections
          title={'How can we help?'}
          Description={
            'From strategy to execution, we craft digital solutions that move your business forward.'
          }
        />
        <img src={assets.bgImage2} className="absolute sm:-left-100 sm:-top-100  -z-10 dark:hidden " />

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {DataCate.map((data, index) => (
            <CardServices
              key={index}
              title={data.title}
              subTitle={data.subtitle}
              icon={data.icon}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
