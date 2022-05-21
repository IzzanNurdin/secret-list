import "./style.css";

const Welcome = ({ amount }) => {
  return (
    <div className="welcome-wrapper">
      <h3>
        <b>Halo Kak!</b>
      </h3>
      <p>
        Kamu telah melakukan transaksi sebesar <label>{amount}</label> sejak
        menggunakan Flip.
      </p>
    </div>
  );
};

export default Welcome;
