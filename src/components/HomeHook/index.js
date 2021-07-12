import react, { useEffect, useState } from "react";
import { getComics } from "../../services/index";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getComics()
      .then((response) => {
        return response.data.data;
      })
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      });
  }, []);

  return (
    <div className="App">
      {data.length > 1 ? (
        data.map((element) => {
          return (
            <ul>
              <li>ID: ${element.id}</li>
              <li>ID: ${element.title}</li>
            </ul>
          );
        })
      ) : (
        <h1>No hay datos</h1>
      )}
    </div>
  );
}

export default Home;
