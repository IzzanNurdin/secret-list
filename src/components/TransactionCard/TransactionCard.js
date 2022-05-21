import "./style.css";
import { BsDot, BsArrowRight } from "react-icons/bs";
import { currencyFormat, readableDate } from "utils/helpers";
import { useNavigate } from "react-router-dom";
import StatusBadge from "components/StatusBadge";

const TransactionCard = ({ data }) => {
  const navigate = useNavigate();
  const date = new Date(data.created_at);
  return (
    <button
      className={data.status === "SUCCESS" ? "card success" : "card pending"}
      onClick={() => navigate("/transaction-detail", { state: data })}
    >
      <div className="transaction-meta">
        <div className="bank-list">
          {data.sender_bank.toUpperCase()} <BsArrowRight />{" "}
          {data.beneficiary_bank.toUpperCase()}
        </div>
        <div className="beneficiary-name">{data.beneficiary_name}</div>
        <div className="amount-date">
          {currencyFormat(data.amount)} <BsDot /> {readableDate(date)}
        </div>
      </div>
      <StatusBadge status={data.status} />
    </button>
  );
};

export default TransactionCard;
