import { useEffect, useState } from "react";

const Async = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      {data?.map((post) => (
        <li>{post.title}</li>
      ))}
    </div>
  );
};
export default Async;
