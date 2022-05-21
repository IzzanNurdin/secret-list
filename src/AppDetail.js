import AppTitle from "components/AppTitle";
import React from "react";
import "./AppDetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import StatusBadge from "components/StatusBadge";
import { AiOutlineFile } from "react-icons/ai";
import { currencyFormat, readableDate } from "utils/helpers";

const AppDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = "Flip - Detail Transaksi";
  });

  return (
    <div className="page-wrapper">
      <AppTitle title="Detail Transaksi" />
      <div className="transaction-id">
        <b>ID TRANSAKSI: #{state.id}</b>
        <StatusBadge status={state.status} />
      </div>
      <div className="transaction-card">
        <AiOutlineFile />
        <div className="transaction-detail">
          <div className="section">
            <label>PENGIRIM</label>
            <div>{state.sender_bank.toUpperCase()}</div>
          </div>
          <div className="section">
            <label>PENERIMA</label>
            <div>{state.beneficiary_bank.toUpperCase()}</div>
            <div>{state.account_number}</div>
            <div>{state.beneficiary_name}</div>
          </div>
          <div className="section">
            <label>NOMINAL</label>
            <div>{currencyFormat(state.amount)}</div>
            <div>
              <b>Kode Unik: </b>
              {state.unique_code}
            </div>
          </div>
          <div className="section">
            <label>CATATAN</label>
            <div>{state.remark}</div>
          </div>
          <div className="section">
            <label>WAKTU DIBUAT</label>
            <div>{readableDate(new Date(state.created_at))}</div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/")} className="back-button">
        Kembali
      </button>
    </div>
  );
};

export default AppDetail;
