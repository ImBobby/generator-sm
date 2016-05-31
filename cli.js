#!/usr/bin/env node
'use strict'

const fs = require('fs')

const pwd = process.env.PWD
const moduleName = process.argv[2]
const modulePath = `${pwd}/dev/sass/modules/`
const moduleFile = `${modulePath}_modules.scss`

if (!moduleName) {
    console.log('No module name specified')
    process.exit(0)
}

fs.readFile(moduleFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Gagal membuka file _modules.scss.`)
        process.exit(1)
    }

    data += `\n@import "${moduleName}";`
    
    fs.writeFile(`${modulePath}_${moduleName}.scss`, '', err => {
        if (err) throw err

        fs.writeFile(moduleFile, data, err => {
            if (err) throw err
            console.log(`Module _${moduleName}.scss has been created`)
        })
    })
})
