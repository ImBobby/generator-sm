const fs = require('fs')

const create = name => `_${name}.scss`

const append = name => `\n@import "${name}";`

const write = name => {
    fs.writeFileSync(name, '')
}

const updateModule = (moduleFile, content) => {
    fs.writeFileSync(moduleFile, content)
}

module.exports = {
    create,
    append,
    write,
    updateModule
}
