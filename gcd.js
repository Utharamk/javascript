function gcd(a,b){
    while(b!==0){
        temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
console.log(gcd(60,120))