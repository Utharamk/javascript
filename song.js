const songs=["aa","bb","cc","dd","ee"]

songs.push("fff")
console.log(songs);


songs.pop()
console.log(songs);


console.log(songs.length)

l=songs.length-1
console.log("first element: ",songs.at(0));
console.log("last element: ",songs.at(l));

console.log(songs.join(","));


songs2=["abc","bcd","cde"]
console.log(songs.concat(songs2))


songs3=[["aaa","bbb"],["abc","cde"]]
console.log(songs3.flat())

songs.splice(0,2,"qwe","rty")
console.log(songs);


console.log(songs.sort());


le=songs.length-2
console.log(le)
songs.copyWithin(le,0,2)
console.log(songs);