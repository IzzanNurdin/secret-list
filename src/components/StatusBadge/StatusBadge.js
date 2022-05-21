import "./style.css";

const StatusBadge = ({ status }) => {
  return (
    <div
      className={
        status === "SUCCESS" ? "status-badge success" : "status-badge pending"
      }
    >
      {status === "SUCCESS" ? "Berhasil" : "Pengecekan"}
    </div>
  );
};

export default StatusBadge;
