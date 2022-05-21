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
