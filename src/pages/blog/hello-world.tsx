import * as React from 'react';
import type {NextPage} from 'next';
import AppThemeProvider from "../../c/theme_provider";
import {Container, Box, Typography, Divider, Link} from "@mui/material";
import Image from 'next/image'


const Home: NextPage = () => {
    return (
        <AppThemeProvider>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 1,
                        pt: 4
                    }}
                >
                    <Typography variant="h4">
                        <code>
                            Hello World
                        </code>
                    </Typography>
                </Box>


                <Box>
                    <img
                        src="/blog/hello-world-1.png"
                        alt="Hello World"
                        width={550}
                    />
                </Box>


                <Box paddingY={1}>
                    <Divider/>
                </Box>

                <Box paddingY={.5}>
                    <Typography variant="body1">
                        <code>
                            A {"\"Hello, World!\""} program generally is a computer program that outputs or displays the
                            message {"\"Hello, World!\""}. Such a program is very simple in most programming languages, and is
                            often used to illustrate the basic syntax of a programming language. It is often the first
                            program written by people learning to code. It can also be used as a sanity test to
                            make sure that computer software intended to compile or run source code is correctly
                            installed, and that the operator understands how to use it.
                        </code>
                    </Typography>
                </Box>


                <Box paddingY={.5}>
                    <Divider/>
                </Box>

                <Box paddingY={.5}>
                    <Typography variant="body2">
                        <code>
                            <Link href="/">Home</Link>
                        </code>
                    </Typography>
                </Box>

            </Container>

        </AppThemeProvider>
    );
};

export default Home;

// some of this codes are LEGACY CODE,
// try not to use them.
// thank you.
