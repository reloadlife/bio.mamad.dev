import * as React from 'react';
import type {NextPage} from 'next';
import AppThemeProvider from "../c/theme_provider";
import {Container, Box, Avatar, Typography, Grid, Chip, Divider, IconButton, SvgIcon, Link} from "@mui/material";

import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

import Head from 'next/head';
import {textAlign} from "@mui/system";

const Home: NextPage = () => {
    const age = Math.abs(
        Math.round(
            (
                new Date("11/27/2001").getTime() - new Date().getTime()
            ) / ((1000 * 3600 * 24) * 365)
        )
    );

    return (
        <AppThemeProvider>
            <Head>
                <title>Mohammad Mahdi Afshar | محمد مهدی افشار</title>
                <meta
                    name='description'
                    content={`${age} years old, Web Developer.; Full time Front-end Developer, with +3 years experience as a React developer; and +6 years experience in back-end development as a PHP developer;`}
                />
                <link rel='icon' href='/favicon.ico'/>
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
                />
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/icon?family=Material+Icons'
                />
            </Head>

            <Container maxWidth="sm">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        pt: 2
                    }}
                >
                    <Avatar
                        src="/profile.jpg"
                        style={{
                            height: 200,
                            width: 200
                        }}
                    >
                        M
                    </Avatar>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 1
                    }}
                >
                    <Typography variant="h5">
                        <code>
                            Mohammad Mahdi Afshar
                            <small style={{fontSize: 10}}> he/him</small>
                        </code>
                    </Typography>
                </Box>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item xs={12} md={4}>
                        <Chip variant="outlined" label="Karaj, Alborz, Iran" icon={<LocationOnIcon/>}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Chip variant="outlined" label="me@mamad.dev" component="a" clickable
                              href="mailto:me@mamad.dev" icon={<MailIcon/>}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Chip variant="outlined" label="+98 935 931 0395" component="a" clickable
                              href="tel:+989359310395" icon={<PhoneIcon/>}/>
                    </Grid>
                </Grid>


                <Box paddingY={1}>
                    <Divider/>
                </Box>

                <Box paddingY={.5}>
                    <Typography variant="body1">
                        <code>
                            <b>{age} years old, Web Developer.</b>
                        </code>
                    </Typography>

                    <Typography variant="body2">
                        <code>
                            <b>
                                Full time Front-end Developer, with +3 years experience as a React
                                developer;
                                and +6 years experience in back-end development as a PHP developer;
                            </b>
                        </code>
                    </Typography>
                </Box>

                <Box paddingY={1}>
                    <Divider/>
                </Box>

                <Box paddingY={.5}>
                    <Typography variant="body2">
                        <code>
                            Skills:
                        </code>
                    </Typography>
                    <Box p={2} paddingTop={1} paddingBottom={0}>
                        <Typography variant="body2">
                            <code>
                                <b>Technology: </b>
                            </code>

                            <code>
                                React.JS, React, Next.JS, MaterialUI, TailwindCSS,
                                ChakraUi, TypeScript, JavaScript,
                                HTML5/CSS3, Git, PHP, Laravel, Redis, MySQL, TelegramBots, Telegram MTProto,
                                Bash, Lua, MoonScript, Ruby, Python, DevOps, Linux,
                                Server Management, Server Configuration, Virtualization.
                            </code>
                        </Typography>
                    </Box>
                    <Box p={2} paddingTop={1} paddingBottom={0}>
                        <Typography variant="body2">
                            <code>
                                <b>Tools: </b>
                            </code>
                            <code>
                                Jetbrains Idea, Github, GitLab, Docker, Discord/Slack,
                                VS-Code, Linux, Figma, Adobe XD
                            </code>
                        </Typography>
                    </Box>
                    <Box p={2} paddingTop={1} paddingBottom={0}>
                        <Typography variant="body2">
                            <code>
                                <b>Languages: </b>
                            </code>
                            <code>
                                Persian (Native), English (Fluent), Turkish (Conversational)
                            </code>
                        </Typography>
                    </Box>

                    <Box p={2} paddingTop={1} paddingBottom={0}>
                        <Typography variant="body2">
                            <code>
                                <b>Interests: </b>
                            </code>
                            <code>
                                Scripting, Front-end, Laravel, Gaming, Streaming, Premiere Pro, Web Scraping,
                                Docker, Hacking, Pentesting,
                                Virtualization, Learning new Stuff.
                            </code>
                        </Typography>
                    </Box>
                </Box>

                <Box paddingY={1}>
                    <Divider/>
                </Box>

                <Box paddingY={.5}>
                    <Typography variant="body2">
                        <code>
                            Programming Experience:
                        </code>
                    </Typography>
                    <Box p={2} paddingTop={1} paddingBottom={0}>
                        <Typography variant="body2">
                            <code>
                                {"< this part is to be written >"}
                            </code>
                        </Typography>
                    </Box>
                </Box>

                <Box paddingY={.5}>
                    <Typography variant="body2">
                        <code>
                            Education:
                        </code>
                    </Typography>
                    <Box p={2} paddingTop={1} paddingBottom={0}>
                        <Typography variant="body2">
                            <code>
                                {"< this part is to be written >"}
                            </code>
                        </Typography>
                    </Box>
                </Box>

                <Box paddingY={.5}>
                    <Typography variant="body2">
                        <code>
                            Professional Experience:
                        </code>
                    </Typography>
                    <Box p={2} paddingTop={1} paddingBottom={0}>
                        <Typography variant="body2">
                            <code>
                                {"< this part is to be written >"}
                            </code>
                        </Typography>
                    </Box>
                </Box>


                <Box paddingY={.5}>
                    <Divider/>
                </Box>

                <Box paddingY={.5}>
                    <Typography variant="body2">
                        <code>
                            Recent Blog Posts:
                        </code>
                    </Typography>
                    <Box p={2} paddingTop={1} paddingBottom={0}>
                        <Typography variant="body2">
                            <code>
                                <ul>
                                    <li>
                                        <Box sx={{display: 'flex'}}>
                                            <Link style={{flexGrow: 1}} href="/blog/hello-world">Hello World</Link>
                                            <small style={{color: 'gray'}}>12/9/2021</small>
                                        </Box>
                                    </li>

                                </ul>
                            </code>
                        </Typography>
                    </Box>
                </Box>


                <Box paddingY={.5}>
                    <Divider/>
                </Box>


                <Box paddingY={.5}
                     display="flex"
                     justifyContent="center"
                     alignItems="center">
                    <IconButton href="https://twitter.com/Mamikachuu" target="_blank">
                        <TwitterIcon/>
                    </IconButton>
                    <IconButton href="https://t.me/reloadlife" target="_blank">
                        <TelegramIcon/>
                    </IconButton>
                    <IconButton href="https://instagram.com/reloadlife" target="_blank">
                        <InstagramIcon/>
                    </IconButton>
                    <IconButton
                        href="https://youtube.com/channel/UCjTZIBpln06RcS53oUIiCDA?sub_confirmation=1"
                        target="_blank">
                        <YouTubeIcon/>
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/reloadlife/" target="_blank">
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton href="https://github.com/reloadlife" target="_blank">
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton href="https://gitlab.com/reloadlife" target="_blank">
                        <SvgIcon>
                            <path
                                d="M21.94 13.11l-1.05-3.22c0-.03-.01-.06-.02-.09l-2.11-6.48a.859.859 0 0 0-.8-.57c-.36 0-.68.25-.79.58l-2 6.17H8.84L6.83 3.33a.851.851 0 0 0-.79-.58c-.37 0-.69.25-.8.58L3.13 9.82v.01l-1.07 3.28c-.16.5.01 1.04.44 1.34l9.22 6.71c.17.12.39.12.56-.01l9.22-6.7c.43-.3.6-.84.44-1.34M8.15 10.45l2.57 7.91l-6.17-7.91m8.73 7.92l2.47-7.59l.1-.33h3.61l-5.59 7.16m4.1-13.67l1.81 5.56h-3.62m-1.3.95l-1.79 5.51L12 19.24l-2.86-8.79M6.03 3.94L7.84 9.5H4.23m-1.18 4.19c-.09-.07-.13-.19-.09-.29l.79-2.43l5.82 7.45m11.38-4.73l-6.51 4.73l.02-.03l5.79-7.42l.79 2.43c.04.1 0 .22-.09.29"
                                fill="#FEFEFE"/>
                        </SvgIcon>
                    </IconButton>
                    <IconButton href="https://open.spotify.com/user/reloadlife" target="_blank">
                        <SvgIcon>
                            <path
                                d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12s12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24c-2.82-1.74-6.36-2.101-10.561-1.141c-.418.122-.779-.179-.899-.539c-.12-.421.18-.78.54-.9c4.56-1.021 8.52-.6 11.64 1.32c.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3c-3.239-1.98-8.159-2.58-11.939-1.38c-.479.12-1.02-.12-1.14-.6c-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721c-.18-.601.18-1.2.72-1.381c4.26-1.26 11.28-1.02 15.721 1.621c.539.3.719 1.02.419 1.56c-.299.421-1.02.599-1.559.3z"
                                fill="#FEFEFE"/>
                        </SvgIcon>
                    </IconButton>
                    <IconButton href="https://reddit.com/user/reloadlifeme" target="_blank"
                                title="DO NOT EVER GO THERE. thank you <3">
                        <RedditIcon/>
                    </IconButton>
                </Box>

                <Box
                     sx={{
                         textAlign: "center",
                         py: 1,
                     }}
                >
                    <Typography variant="body2" fontSize={10}>
                        <code>
                            With {"<3"} and TypeScript, hosted on CloudFlare Pages.
                        </code>
                        <br/>
                        <Link href="https://github.com/reloadlife/bio.mamad.dev">GitHub</Link>
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
