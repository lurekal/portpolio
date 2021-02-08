import React from "react";
import CoffeCard from "./CoffeCard";
import coffeMakerList from './constants';
import {Grid} from "@material-ui/core";

const Content= () =>{


    const getCoffeMakerCard =(coffeMakerObj) =>{

        return (
            <Grid item xs={12} sm={4}>
                <CoffeCard{...coffeMakerObj}/>
            </Grid>
        )


    }

    return (
        <Grid container spacing={2}>

            {coffeMakerList.map((value,index)=>
            getCoffeMakerCard (value)
            )}

        </Grid>

    )
}

export default Content
