const sum = (a, b) => {
  return a + b;
}

it('Simple Sum test', () => {
  const costA = 2;
  const costB = 3;
  const total = sum(2, 3);
  expect(total).toBe(5);
})