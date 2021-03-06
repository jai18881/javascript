const testAsyncAwait = async () => {
    try {
        const response = await new Promise(resolve => setTimeout(() => resolve('done'), 2000));
        console.log('after set timeout.....', response);
        return response;
    }
    catch(e) {
        console.log(e);
    }
}

// testAsyncAwait().then((res) => { console.log('test :', res); return res; }).then((res) => console.log('test1 :', res));

async function anotherFunction() {
	console.log('anotherFunction waiting......');
	await testAsyncAwait();
	console.log('anotherFunction waited......');
	await testAsyncAwait();
}

anotherFunction().then(() => {
	console.log('more wait');
});