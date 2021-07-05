const withPWA = require('next-pwa');

const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');


module.exports = (

    (phase, {defaultConfig}) => {
        return {
            pwa: {
                dest: 'public',
                disable: false,
                register: false,
                scope: '/',
                sw: 'sw.js',
                startUrl: "."
            },


            compress: true,
            poweredByHeader: true,
            generateEtags: true,
            env: {},
            pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],

            PATH_PREFIX: "",

            webpack(config, { isServer, buildId, dev }) {
                return config;
            },


            exportPathMap: async function (
                defaultPathMap,
                {dev, dir, outDir, distDir, buildId}
            ) {
                return {
                    '/': {
                        page: '/',
                    },
                }
            },
        }
    }

);
