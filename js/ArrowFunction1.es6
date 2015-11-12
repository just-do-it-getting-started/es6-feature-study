let odds  = evens.map(v => v + 1)
let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
let nums  = evens.map((v, i) => v + i)