/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the decimal numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100 (e.g. 135 => '100%')
*/

function formatPercentage(arr){
  return arr.map((num) => {
    if (num >= 100) {
      return 100 + "%";
    } else if (!Number.isInteger(num)) {
      return num.toFixed(2) + "%";
    } else {
      return num + "%";
    }
  });
}


/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, actual, expected) {
  let status;

  let isEqual;
  if (Array.isArray(expected)) {
    isEqual = arraysEqual(actual, expected);
  } else {
    isEqual = actual === expected;
  }

  if (isEqual) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
  }

  console.log(`${test_name}: ${status}`);
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

test(
  "formatPercentage function works - case 1",
  formatPercentage([23, 18.103, 187.2, 0.372]),
  ["23%", "18.10%", "100%", "0.37%"]
);
