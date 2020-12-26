import React from 'react';
import {Grid, Typography, FormControl,TextField, Button} from '@material-ui/core';

const Index=()=>{
return(
<Grid container direction="row" justify="center" alignItems="center">
<Grid item xs={6} alignItems>
<Grid item xs={12}>
<Typography>Log In</Typography></Grid>
 <FormControl>
     <TextField required id="username" label="Username"/>

     <TextField type="password" required id="password" label="Password"/>
         <Grid container style={{marginTop:5}} justify="center" alignItems="center">
         <Button style={{margin:'dense'}} variant="contained" color="primary">Login</Button>
         </Grid>
 </FormControl>
</Grid></Grid>
);
}
export default Index;