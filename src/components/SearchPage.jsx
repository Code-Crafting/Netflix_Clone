import { Link } from "react-router";

function SearchPage({ searchData }) {
  return (
    <div className="pt-24 pb-4 flex gap-4 flex-wrap justify-center ">
      {searchData.map((el) => {
        const { id, backdrop_path, title } = el;
        return (
          <Link to={`/player/${id}`} key={id}>
            <div className="relative sm:w-2xs w-3xs h-[160px] rounded-md overflow-hidden">
              {backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                  className="h-full"
                />
              ) : (
                <div className="text-red-600 bg-info h-full flex justify-center items-center">
                  Poster Not Available!
                </div>
              )}

              <p className="text-white text-lg absolute bottom-0 right-4 font-medium text-right [text-shadow:1px_1px_2px_black]">
                {title}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchPage;
