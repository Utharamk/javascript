function isprime(i) {
    if (i <= 1) {
        return false;
    }
    for (x=2;x<i;x++) { 
        if (i%x==0) {
            return false;
        }
    }
    return true;
}

console.log(isprime(1)); 
console.log(isprime(4));