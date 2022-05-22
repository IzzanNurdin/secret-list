import "./style.css";

const Welcome = ({ amount, loading }) => {
  return (
    <div className="welcome-wrapper">
      <h3>
        <b>Halo Kak!</b>
      </h3>
      <p>
        Kamu telah melakukan transaksi sebesar{" "}
        {loading ? <span>loading...</span> : <label>{amount}</label>} sejak
        menggunakan Flip.
      </p>
    </div>
  );
};

export default Welcome;
