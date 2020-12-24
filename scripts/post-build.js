// Zip the build directory
const manifest = require('../src/ext/manifest.common.json')
const package = require('../package.json')
const { mkdirSync, existsSync } = require('fs')
const { zip } = require('zip-a-folder')
const { resolve } = require('path')
const dist = resolve(__dirname, '../dist')
const outDir = resolve(__dirname, '../zips')
const out = resolve(outDir, `${package.name}-${manifest.version}.zip`)

async function main() {
    if (!existsSync(outDir)) {
        mkdirSync(outDir)
    }
    await zip(dist, out)
}
main()
