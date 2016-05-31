#!/usr/bin/env node
'use strict'

const fs = require('fs')
const helper = require('./helper.js')

const pwd = process.env.PWD
const moduleName = process.argv[2]
const modulePath = `${pwd}/dev/sass/modules/`
const moduleFile = `${modulePath}_modules.scss`
const generatedFile = helper.create(moduleName)
const appendedContent = helper.append(moduleName)

if (!moduleName) {
    console.log('No module name specified')
    process.exit(0)
}

fs.readFile(moduleFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Gagal membuka file _modules.scss.`)
        process.exit(1)
    }

    data += appendedContent

    helper.write(`${modulePath}${generatedFile}`)
    helper.updateModule(moduleFile, data)
    console.log(`Module ${generatedFile} has been created`)
})
