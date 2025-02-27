import { FaQuoteRight, FaStar } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { testimonials } from "../../../../lib/data/DataBase";

const Testimonial = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto py-20">
        <p className="text-4xl font-bold mb-4 px-2">Client Testimonials</p>

        <div className="grid px-2 lg:grid-cols-3 gap-4">
          {
            testimonials?.map(item =>
              <div key={item?.id} className="bg-white p-4 rounded-lg">
                <FaQuoteRight className="text-green-400 text-5xl" />
                <p className="py-3">{item?.testimonial}</p>
                {/* testimonial footer  */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src={item?.profile} alt="" />

                    <div className="">
                      <p className="text-lg font-bold">{item?.name}</p>
                      <p className="text-sm">{item?.designation}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 text-yellow-300 text-3xl">
                    {Array(item?.star).fill().map((_, i) => (
                      // <FaStar key={i} />
                      <IoMdStar key={i} />
                    ))}
                  </div>
                </div>

              </div>)
          }
        </div>
      </div>



    </div>
  );
};

export default Testimonial;
