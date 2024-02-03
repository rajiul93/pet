const Category = (props) => {
  return (
    <div className="px-3">
      <h1 className="text-xl font-semibold bg-blue-gray-400 p-2 rounded-lg">
        Category
      </h1>
      {props.category.map((item, i) => (
        <li className="list-none mt-3 cursor-pointer hover:text-orange-500" key={i}>
          {item.name.toUpperCase()}
        </li>
      ))}
    </div>
  );
};

export default Category;
