function Links({ links }) {
  return (
    <div className="w-[192px]">
      <ul>
        {links.map((el, i) => {
          return (
            <li key={i} className="text-white mt-2 hover:cursor-pointer">
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Links;
