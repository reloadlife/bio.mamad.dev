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
                // Fixes npm packages that depend on `fs` module
                config.node = {
                    fs: 'empty',
                };

                const workboxOptions = {
                    clientsClaim: true,
                    skipWaiting: true,
                    globPatterns: ['.next/static/*', '.next/static/commons/*'],
                    modifyUrlPrefix: {
                        '.next': '/server',
                    },
                    runtimeCaching: [
                        {
                            urlPattern: '/',
                            handler: 'networkFirst',
                            options: {
                                cacheName: 'html-cache',
                            },
                        },
                        {
                            urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
                            handler: 'cacheFirst',
                            options: {
                                cacheName: 'image-cache',
                                cacheableResponse: {
                                    statuses: [0, 200],
                                },
                            },
                        },
                    ],
                };

                if (!isServer && !dev) {
                    config.plugins.push(
                        new NextWorkboxPlugin({
                            buildId,
                            ...workboxOptions,
                        }),
                        new WebpackPwaManifest({
                            filename: 'static/manifest.json',
                            name: 'AmuMovies',
                            short_name: 'AmuMovies',
                            description: 'AmuMovies',
                            background_color: '#ffffff',
                            theme_color: '#d6004a',
                            display: 'standalone',
                            orientation: 'portrait',
                            fingerprints: false,
                            inject: false,
                            start_url: '/',
                            ios: {
                                'apple-mobile-web-app-title': 'AmuMovies',
                                'apple-mobile-web-app-status-bar-style': '#d6004a',
                            },
                            includeDirectory: true,
                            publicPath: '..',
                        })
                    );
                }

                return config;
            },


            exportPathMap: async function (
                defaultPathMap,
                {dev, dir, outDir, distDir, buildId}
            ) {
                return {
                    '/': {
                        page: '/',
                        query: {
                            q: ''
                        }
                    },
                }
            },
        }
    }

);
