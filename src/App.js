import AppTitle from "components/AppTitle";
import Search from "components/Search";
import TransactionCard from "components/TransactionCard/TransactionCard";
import { calculateTotalTransaction, findNameorBank } from "utils/helpers";
import Welcome from "components/Welcome";
import Loading from "components/Loading";
import React from "react";
import { fetchData } from "utils/api";
import "./App.css";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const [query, setQuery] = React.useState("");
  const [sort, setSortBy] = React.useState("asc-name");
  const [filteredData, setFilteredData] = React.useState([]);
  const [totalTransaction, setTotalTransaction] = React.useState("");

  const handleResponse = React.useCallback((data, index) => {
    setFilteredData(
      index.map((item) => {
        return data[item];
      })
    );
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
        console.dir(err);
        setError(err.message);
        setLoading(false);
      });
    document.title = "Flip - Daftar Transaksi";
  }, [handleResponse]);

  return (
    <div className="App">
      <AppTitle title="Daftar Transaksi" />
      <div className="list-wrapper">
        {error ? (
          <div className="error">
            <h4>{error}</h4>
          </div>
        ) : (
          <>
            <Welcome amount={totalTransaction} />
            <Search
              query={query}
              setQuery={setQuery}
              sort={sort}
              setSortBy={setSortBy}
            />
            {loading ? (
              <Loading />
            ) : (
              findNameorBank(filteredData, query, sort).map((item) => (
                <TransactionCard key={item.id} data={item} />
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
