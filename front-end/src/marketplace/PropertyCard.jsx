import { Star,Heart } from "lucide-react";

export default function PropertyCard({ title, price, image }) {
  return (
    <div className="w-[20em] lg:w-[29em] grow-0 shrink-0 my-5 mx-2 bg-white rounded-2xl shadow-md overflow-hidden relative">
      {/* Image */}
      <div className="h-[200px] overflow-hidden">
        <img
          className="h-[200px] w-full transition-all hover:scale-125 object-cover m-auto"
          src={
            image ||
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          } // Replace with your image
          alt="Apartment"
        />
      </div>
      <span className="inline-block hover:bg-red-600 hover:text-white transition-all hover:top-2 bg-white p-3 rounded-full shadow-lg absolute top-3 right-3">
        <Heart />
      </span>
      {/* Content */}
      <div className="p-2 w-11/12 m-auto">
        <h3 className="text-md font-semibold text-gray-800  whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h3>

        <p className="font-bold text-lg"> {price}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">4.8</span>
          <span>Mercedes Vito</span>
        </div>

        {/* Details */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
          <span>2 guests</span>
          <span>|</span>
          <span>1 bedroom</span>
          <span>|</span>
          <span>2 bathroom</span>
        </div>
      </div>
    </div>
  );
}
