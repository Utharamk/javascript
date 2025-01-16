function palindrome(a){
    let c=a.split('')
    c=c.reverse()
    c=c.join('')
    return c==a
}
console.log(palindrome("world"))