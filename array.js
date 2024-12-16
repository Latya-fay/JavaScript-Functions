function generateArray(start, end) {
  let result = [];
  let step = start < end ? 1 : -1;

  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
}
