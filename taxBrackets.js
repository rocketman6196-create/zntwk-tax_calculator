export const taxBrackets = [
  { lower: null, higher: 11000, percentage: 0.1, accumulatedTax: 0 },
  { lower: 11001, higher: 44725, percentage: 0.12, accumulatedTax: 1100 },
  { lower: 44726, higher: 95375, percentage: 0.22, accumulatedTax: 5146.88 },
  { lower: 95376, higher: 182100, percentage: 0.24, accumulatedTax: 16289.66 },
  { lower: 182101, higher: 231250, percentage: 0.32, accumulatedTax: 37103.42 },
  { lower: 231251, higher: 578125, percentage: 0.35, accumulatedTax: 52831.1 },
  { lower: 578126, higher: null, percentage: 0.37, accumulatedTax: 174237.0 }
];
