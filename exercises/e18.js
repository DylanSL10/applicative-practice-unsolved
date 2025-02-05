/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
     const yearCounts = data.asteroids.reduce((acc, asteroid) => {
      const year = asteroid.discoveryYear;

      acc[year] = (acc[year] || 0) + 1;

      return acc;
  }, {});

  const greatestYear = Object.keys(yearCounts).reduce((maxYear, currentYear) => {
      return yearCounts[currentYear] > yearCounts[maxYear] ? currentYear : maxYear;
  });

  return parseInt(greatestYear, 10);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
