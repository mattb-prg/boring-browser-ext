const { existsSync, removeSync } = require('fs-extra')
const { resolve } = require('path')
const dist = resolve(__dirname, '../dist')

if (existsSync(dist)) {
    removeSync(dist)
}
