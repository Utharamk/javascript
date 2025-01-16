function fact(i){
    let fa=1,b=1;
    for(b=1;b<=i;b++){
        fa*=b;
    }
    return fa;
}
console.log(fact(5));