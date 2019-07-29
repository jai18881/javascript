const testAsyncAwait = async () => {
    try {
        const response = await new Promise(resolve => setTimeout(() => resolve('done'), 2000));
        console.log('after set timeout.....', response);
    }
    catch(e) {
        console.log(e);
    }
}

testAsyncAwait();
