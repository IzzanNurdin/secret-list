const COMPLETE_MONTH = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function readableDate(date) {
  return `${date.getDate()} ${
    COMPLETE_MONTH[date.getMonth()]
  } ${date.getFullYear()}`;
}

export function currencyFormat(value) {
  const amount = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  }).format(value);

  return amount;
}

export function calculateTotalTransaction(data, index) {
  let result = 0;
  index.map((item) => {
    result = result + data[item].amount;
    return null;
  });

  return currencyFormat(result);
}

export function findNameorBank(data, query, sort) {
  const filtered = data.filter(
    (item) =>
      item.beneficiary_name.toLowerCase().includes(query.toLowerCase()) ||
      item.beneficiary_bank.toLowerCase().includes(query.toLowerCase()) ||
      item.sender_bank.toLowerCase().includes(query.toLowerCase())
  );

  if (sort === "asc-name") {
    filtered.sort((a, b) => {
      return a.beneficiary_name
        .toLowerCase()
        .localeCompare(b.beneficiary_name.toLowerCase());
    });
  }

  if (sort === "desc-name") {
    filtered.sort((a, b) => {
      return b.beneficiary_name
        .toLowerCase()
        .localeCompare(a.beneficiary_name.toLowerCase());
    });
  }

  return filtered;
}
