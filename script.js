const output = document.getElementById("output");

// Step 1: Show "Loading..." message
output.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

// Step 2: Create 3 promises with random delay between 1 and 3 seconds
const createRandomPromise = (name) => {
  const delay = (Math.random() * 2 + 1).toFixed(3); // 1 to 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: parseFloat(delay).toFixed(3) });
    }, delay * 1000);
  });
};

const startTime = performance.now();

// Step 3: Run all promises
Promise.all([
  createRandomPromise("Promise 1"),
  createRandomPromise("Promise 2"),
  createRandomPromise("Promise 3")
]).then(results => {
  // Step 4: Clear loading row
  output.innerHTML = "";

  // Step 5: Add each resolved promise to the table
  results.forEach(res => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${res.name}</td><td>${res.time}</td>`;
    output.appendChild(row);
  });

  // Step 6: Calculate total time (real elapsed time)
  const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime}</strong></td>`;
  output.appendChild(totalRow);
});
