export default function useNumberFormat(number) {
  return new Intl.NumberFormat().format(number);
}
