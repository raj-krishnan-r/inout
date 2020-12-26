import { IconButton, Typography,AppBar,Toolbar,Button,Container,Grid, ButtonGroup,Card,Paper, TextField,Box} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
const In=()=>{
    return(
<Box>
    <Appbar/>
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h4" style={{color:"grey"}}>
                Inbound
            </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid justify="flex-end" container style={{padding:3}}>
            <ButtonGroup>
                <Button variant="contained"><AddIcon/></Button>
                <Button variant="contained"><EditIcon/></Button>
                <Button variant="contained"><SearchIcon/></Button>
            </ButtonGroup>
            </Grid>
            </Grid>
            <Grid item xs={12}>
                <Paper>
        <Grid item xs={6}><Card><POHead/></Card></Grid>
        <Grid item xs={12}>
            <Grid container justify="flex-end" style={{padding:3}}>
            <ButtonGroup>
                <Button variant="contained"><AddIcon/></Button>
            </ButtonGroup>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Card>
            <PODetails/>
            <PODetails/>
            <PODetails/>
</Card>
        </Grid>
    </Paper>
    </Grid>
    </Grid>
</Box>
    );
}
export default In;
const Appbar = ()=>{
    return(
    <AppBar position="static">
    <Toolbar>
        <IconButton edge="start">
            <MenuIcon/>
        </IconButton>
        <Typography variant="h6" style={{flexGrow:1}}>
            In/Out Stock
        </Typography>
        <Button color="inherit">
            Logout
        </Button>
    </Toolbar>
</AppBar>
    );
}

const POHead=()=>{
    return(
        <Grid container style={{margin:20,padding:10}}>
            <Grid item xs={3}>
            <TextField label="Doc Number"></TextField></Grid>
            <Grid item xs={3}><TextField label="Supplier"></TextField></Grid>
            <Grid item xs={3}><TextField label="PO Number"></TextField>
            </Grid><Grid item xs={3}><TextField label="Date"></TextField></Grid>        
        </Grid>
    );
}

const PODetails=()=>{
    return(
        <Box style={{marginTop:2}}>
        <Grid container spacing={6} style={{margin:3}}>
            <Grid  item xs><TextField label="Sl. No"></TextField></Grid>
            <Grid  item xs><TextField label="Barcode"></TextField></Grid>
            <Grid  item xs><TextField label="Code"></TextField></Grid>
            <Grid  item xs><TextField label="Description"></TextField></Grid>
            <Grid  item xs><TextField label="Unit"></TextField></Grid>
            <Grid  item xs><TextField label="Qty"></TextField></Grid>
            <Grid  item xs><TextField label="Location"></TextField></Grid>
            <Grid  item xs><TextField label="Fr"></TextField></Grid>
            <Grid  item xs><TextField label="Quantity"></TextField></Grid>
            <Grid  item xs><Button><DeleteIcon/></Button></Grid>
        </Grid>
        </Box>
        
    );
}