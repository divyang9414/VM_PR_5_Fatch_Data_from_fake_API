import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products?sort=desc");
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center fs-1 my-5">Data fatching from Fake Store API</h1>
        <div className="row">
          {data?.map((product) => (
            <Card product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
