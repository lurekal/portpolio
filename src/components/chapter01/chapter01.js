import React from 'react';


import {Button,Typography} from "@material-ui/core";

function Chapter01() {


    return (
        <div >

            <Typography
                variant={"h1"}
                color={"primary"}>Hello there</Typography>
            <Button
                // disabled
                //     fullWidth
                variant={"outlined"}
                color={"secondary"}
            >This is first Button</Button>
        </div>
    );
}

export default Chapter01;
