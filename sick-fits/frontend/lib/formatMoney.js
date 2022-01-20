export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'PLN',
    minimalFractionDigits: 2,
  };

  if (amount % 100 === 0) {
    options.minimalFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('pl-PL', options);

  return formatter.format(amount / 100);
}
