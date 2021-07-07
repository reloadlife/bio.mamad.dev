import React from 'react';
import TemplateProvider from "../components/TemplateProvider";
import {Box, Divider, Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {SvgIcon} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';


class Index extends React.Component<any, any> {

    render() {

        const age = Math.abs(
            Math.round(
                (
                    new Date("11/27/2001").getTime() - new Date().getTime()
                ) / ( (1000 * 3600 * 24) * 365 )
            )
        ) ;

        return (
            <TemplateProvider>
                <Box p={4}>
                    <Box p={3}>
                        <Typography variant="h5">
                            <code>
                                <b>Mohammad Mahdi Afshar !</b>
                            </code>
                        </Typography>
                    </Box>

                    <Box p={3} paddingTop={0}>
                        <Divider/>
                    </Box>

                    <Box p={3} paddingTop={0}>
                        <Typography variant="body1">
                            <code>
                                <b>{age} years old, full stack developer.</b>
                            </code>
                        </Typography>
                    </Box>


                    <Box p={3} paddingTop={0}>
                        <Typography variant="body2">
                            <code>
                                Languages:
                            </code>
                        </Typography>
                        <Typography variant="body2">
                            <code>
                                TypeScript, JavaScript, PHP, Bash, HTML5/CSS3, Lua
                            </code>
                        </Typography>
                    </Box>

                    <Box p={3} paddingTop={0}>
                        <Typography variant="body2">
                            <code>
                                Interests:
                            </code>
                        </Typography>
                        <Typography variant="body2">
                            <code>
                                Scripting, Front-end, Laravel, Gaming, Streaming, Premiere Pro, Web Scraping, Docker, Virtualization, ...
                            </code>
                        </Typography>
                    </Box>


                    <Box p={3} paddingTop={0}>
                        <Typography variant="subtitle2">
                            <code>
                                Email: <Link href="mailto:me@mamad.dev">me@mamad.dev</Link>
                                <span> | </span>
                                Phone: <Link href="tel:+989359310395">+98 935 931 0395</Link>
                                <span> | </span>
                                Resume: email me to get my resume
                            </code>
                        </Typography>
                    </Box>



                    <Box p={3}>
                        <Divider/>
                    </Box>


                    <Box p={3} paddingTop={0}>
                        <IconButton href="https://twitter.com/MrReloadLife" target="_blank">
                            <TwitterIcon/>
                        </IconButton>
                        <IconButton href="https://t.me/reloadlife" target="_blank">
                            <TelegramIcon/>
                        </IconButton>
                        <IconButton href="https://instagram.com/reloadlife" target="_blank">
                            <InstagramIcon/>
                        </IconButton>
                        <IconButton href="https://youtube.com/channel/UCjTZIBpln06RcS53oUIiCDA?sub_confirmation=1" target="_blank">
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
                        <IconButton href="https://reddit.com/user/reloadlifeme" target="_blank">
                            <RedditIcon/>
                        </IconButton>
                    </Box>

                </Box>
            </TemplateProvider>
        );
    }
}

export default Index;