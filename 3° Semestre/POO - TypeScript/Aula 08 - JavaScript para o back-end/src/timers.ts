// setTimout
console.log("Antes do setTimeout")

setTimeout(
    ()=>console.log("Timeout"),
    2000
)

console.log("Depois do setTimeout")

// setInterval
let id = setInterval(
    ()=>console.log("Interval..."),
    2000
)

setTimeout(()=>clearInterval(id), 8200)