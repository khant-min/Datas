import axios from "axios";
import { useState, useEffect } from "react";
const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("../data/db.json");
      setData(res.data.about_us.cards);
    };
    fetchData();
  }, []);
  return (
    <div>
      {data.map(data => {
        return (
          <div className="w-[400px] h-[300px] bg-gray-300 flex flex-col items-center">
            <img src={data.image} alt="" />
            <h2>{data.description}</h2>
            <p>{data.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
