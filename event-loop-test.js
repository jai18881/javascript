const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
	console.log('foo')
	setTimeout(bar, 1000)
	new Promise((resolve, reject) => setTimeout(() => resolve('should be right after baz, before bar'), 500)
	).then(resolve => console.log(resolve))
	baz()
}

foo()