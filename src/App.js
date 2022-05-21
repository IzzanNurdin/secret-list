import AppTitle from "components/AppTitle";
import Search from "components/Search";
import TransactionCard from "components/TransactionCard/TransactionCard";
import { calculateTotalTransaction } from "utils/helpers";
import Welcome from "components/Welcome";
import Loading from "components/Loading";
import React from "react";
import { fetchData } from "utils/api";
import "./App.css";

function App() {
  const [data, setData] = React.useState({});
  const [index, setIndex] = React.useState([]);
  const [totalTransaction, setTotalTransaction] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleResponse = React.useCallback((data, index) => {
    setData(data);
    setIndex(index);
    setTotalTransaction(calculateTotalTransaction(data, index));
  }, []);

  React.useEffect(() => {
    setLoading(true);
    fetchData("https://recruitment-test.flip.id/frontend-test")
      .then((resp) => {
        handleResponse(resp.data, Object.keys(resp.data));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <AppTitle title="Daftar Transaksi" />
      <div className="list-wrapper">
        <Welcome amount={totalTransaction} />
        <Search />
        {loading ? (
          <Loading />
        ) : (
          index.map((item) => <TransactionCard key={item} data={data[item]} />)
        )}
      </div>
    </div>
  );
}

export default App;
