
type PropsType = {
  title: string;
  description: string;
};
export default function TitleSections({ title, description }: PropsType) {
  return (
    <div className="text-center my-4 dark:text-white/70">
      <h3 className="text-2xl sm:text-5xl ">{title}</h3>
      <p className="mb-8 mt-4 text-gray-500 max-w-lg mx-auto text-[16px]">{description}</p>
    </div>
  );
}

