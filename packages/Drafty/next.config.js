/** @type {import('next').NextConfig} */
const path = require('path')
const withTM = require('next-transpile-modules')(['components']);

module.exports = withTM(
    {
        sassOptions: {
            includePaths: [path.join(__dirname, './src/styles')],
            prependData: `@import "variables.scss";`
        },
        webpack: (config, options) => {
            if (options.isServer) {
                config.externals = ['react', ...config.externals];
            }
            
            config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');
        
            return config
        },
    }
)
