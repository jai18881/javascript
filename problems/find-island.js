const earth = [
	[1, 0, 1, 0],
	[0, 1, 0, 1],
	[1, 0, 1, 0],
	[0, 1, 0, 1]
];

function fenceIsland(arr, i, j) {
	if ((arr[i] || [])[j] === 1) arr[i][j] = 2;
	if ((arr[i] || [])[j - 1] === 1) fenceIsland(arr, i, j - 1);
	if ((arr[i] || [])[j + 1] === 1) fenceIsland(arr, i, j + 1);
	if ((arr[i - 1] || [])[j] === 1) fenceIsland(arr, i - 1, j);
	if ((arr[i + 1] || [])[j] === 1) fenceIsland(arr, i + 1, j);
}

function findIslands(pruthvi) {

	const earth = pruthvi.map(land => [ ...land ]);
	let j = 0;
	let landCount = 0;
	let ones = false;

	for (let i = 0; i < earth.length; i++) {

		const region = earth[i];
		let len = region.length;

		if (region[j] === 1) {
			landCount += 1;
			fenceIsland(earth, i, j);
		}

		// loop saver logic
		if (j === len - 1) {
			j = 0;
		} else {
			j++;
			i -= 1;
		}
	}

	console.log(pruthvi);
	console.log(earth);

	return landCount;
}

console.log(findIslands(earth));
// console.log(earth);