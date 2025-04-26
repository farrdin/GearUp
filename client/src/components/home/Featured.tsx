import { useGetBicyclesQuery } from "@/redux/features/bicycle/bicycleApi";
import { IBicycle } from "@/types";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const Featured = () => {
  const { data: bicycles, error, isLoading } = useGetBicyclesQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <FadeLoader color="#FFB800" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-red-500">
          There was an error loading the bicycles. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="py-12 w-[80%] mx-auto ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-secondary mb-8">
          Featured Bicycles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {bicycles?.data?.map((bicycle: IBicycle) => (
            <div
              key={bicycle?._id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={bicycle?.image}
                alt={bicycle?.name}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{bicycle?.name}</h3>
                <p className="text-lg font-bold text-primary">
                  {bicycle?.price}
                </p>
                <Link
                  to={`/bicycle/${bicycle?._id}`}
                  className="mt-4 inline-block bg-primary text-white rounded-full py-2 px-6 hover:bg-opacity-80 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/bicycle"
            className="inline-block bg-primary text-white rounded-full py-3 px-8 hover:bg-opacity-80 transition"
          >
            View All Bicycles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
