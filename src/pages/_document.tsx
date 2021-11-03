import React from 'react';
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import {ServerStyleSheets} from "@material-ui/styles";
import theme from "../theme";


export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) =>
                    (props) => sheets.collect(
                        <App {...props} />
                    ),
            });
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        };
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head prefix="og: https://ogp.me/ns">
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                    <link rel='manifest' href='/manifest.json' />

                    <meta name="theme-color" content={theme.palette.primary.main}/>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport"
                          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta name="robots" content="INDEX, FOLLOW"/>

                    <meta property="og:type" content="og:profile" />
                    <meta property="profile:first_name" content="Mohammad Mahdi"/>
                    <meta property="profile:last_name" content="Afshar"/>
                    <meta property="profile:username" content="mamad"/>
                    <meta property="profile:gender" content="male"/>

                    <meta property="og:site_name" content="Mohammad Mahdi Afshar | bio"/>

                    <meta property="og:url" content="https://bio.mamad.dev" />
                    <meta property="og:image" content="https://bio.mamad.dev/mamad.png" />
                    <meta name='og:description' content={`20 years old, full stack developer.`} />


                    <meta name='description' content={`20 years old, full stack developer.`} />
                    <meta name="twitter:card" content="summery_large_image"/>

                    <title>bio.mamad.dev</title>
                </Head>

                <body style={{margin: "0px"}} id="body">
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

