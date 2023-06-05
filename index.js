// Write your solution here!
const cats =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const catsAppend= [...cats, name]
    return catsAppend 
}

function prependCat(name) {
    const catsPrepend= [name, ...cats]
    return catsPrepend
}

function removeLastCat(name) {
    return cats.slice(0, -1)
}

function removeFirstCat(name) {
    return cats.slice(1)
}