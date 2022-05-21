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
  return `${date.getDay()} ${
    COMPLETE_MONTH[date.getMonth() - 1]
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
  });

  return currencyFormat(result);
}
