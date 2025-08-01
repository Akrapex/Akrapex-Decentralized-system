import { latestFronOurBlogData } from "../Constants/latestFronOurBlogData";

const LatestFromOurBlog = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto my-40">
      <h2 className="text-6xl font-bold font-Grotesk text-secondary text-center">
        Latest from Our Blog
      </h2>
      <p className="text-[2rem] font-inter font-normal text-center">
        Stay updated with industry insights, tutorials, and expert analysis
      </p>
      <div className="flex justify-between items-center gap-6 my-10 gap-y-10">
        {latestFronOurBlogData.map(
          ({ id, image, title, subTitle, dateAndTime }) => (
            <div
              key={id}
              className="shadow-lg px-10 py-6 w-[394px] rounded-[20px]"
            >
              <img src={image} alt={title} className="" />
              <div className="  space-y-3 rounded-xl">
                <p className="text-[1.625rem] font-medium text-secondary font-Grotesk">
                  {title}
                </p>
                <p className="text-secondary text-base font-light">
                  {subTitle}
                </p>
                <p>{dateAndTime}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="text-center">
        <button className="text-xl text-white bg-[#296B82] font-medium px-12 py-3 rounded-[20px]">
          Read All Article
        </button>
      </div>
    </div>
  );
}

export default LatestFromOurBlog
