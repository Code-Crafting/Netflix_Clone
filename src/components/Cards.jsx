// import cardImg1 from "../assconsole.log(el);ets/cards/card1.jpg";

function Cards({ data }) {
  console.log(data);
  return (
    <>
      {data.map((el) => {
        // console.log(el);
        const { title, backdrop_path, id } = el;

        return (
          <div className="w-2xs relative" key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt="movie"
              className="w-full rounded-md"
            />
            <p className="text-white text-lg absolute bottom-0 right-4 font-medium text-right [text-shadow:1px_1px_2px_black]">
              {title}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
