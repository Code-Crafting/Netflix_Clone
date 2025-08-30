function Links({ links }) {
  return (
    <div>
      <ul>
        {links.map((el) => {
          return <li className="text-white mt-2">{el}</li>;
        })}
      </ul>
    </div>
  );
}

export default Links;
