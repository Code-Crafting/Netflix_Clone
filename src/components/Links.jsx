function Links({ links }) {
  return (
    <div>
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
