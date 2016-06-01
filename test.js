const fs = require('fs')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const helper = require('./helper.js')

const generatedFile = helper.create('foo')
const generatedExt = generatedFile.substr(generatedFile.length - 5)
const appendedContent = helper.append('foo')
const trimmedAppendedContent = appendedContent.substr(appendedContent.length - (appendedContent.length - 1))

mkdirp.sync('dev/sass/modules')
helper.write(`dev/sass/modules/_modules.scss`)
helper.write(`dev/sass/modules/${generatedFile}`)

exports[`filename start with "_"`] = test => {
    test.equal(generatedFile.charAt(0), '_', 'First character should be "_"')
    test.done()
}

exports[`filename must end with ".scss"`] = test => {
    test.equal(generatedExt, '.scss', 'Filename should end with ".scss"')
    test.done()
}

exports[`appended content start with new line`] = test => {
    test.equal(appendedContent.charAt(0), '\n', `Appended content must start with new line`)
    test.done()
}

exports['appended content is exactly @import "foo";'] = test => {
    test.equal(trimmedAppendedContent, '@import "foo";', 'Appended content must exactly equal to @import "foo";')
    test.done()
}

exports['Create new module with empty content'] = test => {
    this.content = fs.readFileSync(`dev/sass/modules/${generatedFile}`, {encoding: 'utf8'})
    test.equal(this.content, '', '_foo.scss must be created in dev/sass/modules/')
    test.done()
}

exports['Update _modules.scss file'] = test => {
    helper.updateModule('dev/sass/modules/_modules.scss', appendedContent)
    this.content = fs.readFileSync('dev/sass/modules/_modules.scss', {encoding: 'utf8'})
    this.content = this.content.replace('\n', '')
    test.equal(this.content, '@import "foo";', 'Appended content should be "@import foo;"')
    test.done()

    rimraf.sync('./dev')
}
