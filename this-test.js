function baseFunc() {
    this.firstName = '';
    this.lastName = '';
}

baseFunc.prototype.getName = () => {
    return this.firstName +' '+this.lastName;
}

const b = baseFunc();
console.log(b.getName());
