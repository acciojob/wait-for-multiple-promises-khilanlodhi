const output = document.getElementById("output");

output.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`

const promise1 = () => 
 new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve({ name: "Promise 1", time: 2 });
		}, 2000);
	});


	const promise2 = () => 
 new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve({ name: "Promise 2", time: 1 });
		}, 1000);
	});

		const promise3 = () => 
 new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve({ name: "Promise 3", time: 3 });
		}, 3000);
	});


const start = performance.now();

Promise.all([promise1(), promise2(), promise3()]).then(results => {
  output.innerHTML = ""; 

	results.forEach(res=>{
		const row = document.createElement("tr");
		 row.innerHTML = `<td>${res.name}</td><td>${res.time}</td>`;
         output.appendChild(row);
	});

	
const totalTime = ((performance.now() - start) / 1000).toFixed(3);
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime}</strong></td>`;
  output.appendChild(totalRow);
});
