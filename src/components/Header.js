import React from 'react'
import { AppBar, Toolbar,Grid,InputBase } from '@material-ui/core';


function Header() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item>
                            <InputBase/>
                            </Grid>
                            <Grid item>
                                </Grid>

                        </Grid>
                    </Toolbar>
                </AppBar>
        </>
    )
}

export default Header
