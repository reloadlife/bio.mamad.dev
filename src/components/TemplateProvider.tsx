import React from 'react';
import {Theme} from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import withRouter from "next/dist/client/with-router";
import {withTheme} from "@material-ui/styles";
import {withSnackbar} from "notistack";
import {CssBaseline} from "@material-ui/core";

class TemplateProvider extends React.Component<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <div>
                <CssBaseline/>

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }

}




const style = (theme: Theme) => ({

});

// @ts-ignore
export default withStyles(style)(withTheme(withSnackbar<any>(withRouter(TemplateProvider))));