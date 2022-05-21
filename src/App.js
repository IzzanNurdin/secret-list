import AppTitle from "components/AppTitle";
import TransactionCard from "components/TransactionCard/TransactionCard";
import React from "react";
import { fetchData } from "utils/api";
import "./App.css";

function App() {
  const [data, setData] = React.useState({});
  const [index, setIndex] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetchData("https://recruitment-test.flip.id/frontend-test")
      .then((resp) => {
        setData(resp.data);
        setIndex(Object.keys(resp.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <AppTitle title="Detail Transaksi" />
      <div className="list-wrapper">
        {index.map((item) => (
          <TransactionCard key={item} data={data[item]} />
        ))}
      </div>
    </div>
  );
}

export default App;
