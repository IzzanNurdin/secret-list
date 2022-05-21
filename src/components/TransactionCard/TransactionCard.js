import "./style.css";
import { BsDot, BsArrowRight } from "react-icons/bs";
import { readableDate } from "utils/helpers";

const TransactionCard = ({ data }) => {
  const date = new Date(data.created_at);
  const amount = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  }).format(data.amount);
  return (
    <button
      className={data.status === "SUCCESS" ? "card success" : "card pending"}
    >
      <div className="transaction-meta">
        <div className="bank-list">
          {data.sender_bank.toUpperCase()} <BsArrowRight />{" "}
          {data.beneficiary_bank.toUpperCase()}
        </div>
        <div className="beneficiary-name">{data.beneficiary_name}</div>
        <div className="amount-date">
          {amount} <BsDot /> {readableDate(date)}
        </div>
      </div>
      <div
        className={
          data.status === "SUCCESS"
            ? "status-badge success"
            : "status-badge pending"
        }
      >
        {data.status === "SUCCESS" ? "Berhasil" : "Pengecekan"}
      </div>
    </button>
  );
};

export default TransactionCard;
