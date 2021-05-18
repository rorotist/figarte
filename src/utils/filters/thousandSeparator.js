// fixed => 소수점 자리 노출
export default function (value, fixed = 0) {
  let nv = Number(value);
  if (!nv.isNaN) {
    if (nv % 1 > 0) {
      // 소숫점 포함
      nv = nv.toFixed(fixed);
    }
    return nv.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return value;
}
