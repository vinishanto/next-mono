/** @type {import('next').NextConfig} */
const path = require('path')
const withTM = require('next-transpile-modules')(['components']);

module.exports = withTM(
    {
        sassOptions: {
            includePaths: [path.join(__dirname, './src/styles')],
            prependData: `@import "variables.scss";`
        }
    }
)
