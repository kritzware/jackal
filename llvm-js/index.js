const fs = require('fs')

function NewModule(name) {
    return fs.createWriteStream(`${name}.ll`)
}
function NewMethod(name, ret_type) {
    return `define ${ret_type} @${name}() #0 {`
}
function NewInt(name, value) {
    return `%${name} = alloca i32\nstore i32 ${value}, i32* %${name}`
}
function NewMethodReturn(value) {
    return `ret i32 ${value}\n}`
}

const file = NewModule("test")
file.once('open', () => {

    const main = NewMethod("main", 'i32')
    file.write(`${main}\n`)

    const x = NewInt('x', 42)
    file.write(`${x}\n`)

    const return_val = NewMethodReturn(25)
    file.write(`${return_val}\n`)

    const test2 = NewMethod("test2", 'i32')
    file.write(`${test2}\n`)

    const y = NewInt('y', 24)
    file.write(`${y}\n`)

    const z = NewMethodReturn(420)
    file.write(z)

    file.end()
})