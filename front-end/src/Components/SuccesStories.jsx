
import { succesStories } from '../Constants/stakeHolderData';

const SuccesStories = () => {
  return (
    <section className="my-40">
      <h2 className="text-[4rem] font-bold text-secondary text-center">
        Success Stories
      </h2>
      <div className="grid grid-cols-3  gap-10 pt-10 ">
        {succesStories.map(({ id, title, story, name }) => (
          <div
            className="h-full w-[350px] shadow-lg border border-gray-300 py-20 px-10 space-y-5 rounded-[20px]"
            key={id}
          >
            <h3 className="text-3xl font-semibold text-[#000000B2>">{title}</h3>
            <p className="text-2xl font-light text-[#000000] italic">{story}</p>
            <p className="text-xl font-medium textr-[#000000B2]">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SuccesStories
