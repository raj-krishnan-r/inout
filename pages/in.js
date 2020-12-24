import { IconButton, Typography,AppBar,Toolbar,Button,Container,Grid, ButtonGroup,Card,Paper, TextField,Box} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import { Search } from "@material-ui/icons";
const In=()=>{
    return(
<Container>
    <Appbar/>
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h4" style={{color:"grey"}}>
                Inbound
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <ButtonGroup>
                <Button><AddIcon/></Button>
                <Button><EditIcon/></Button>
                <Button><SearchIcon/></Button>
            </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
                <Paper>
        <Grid item xs={8}><Card><POHead/></Card></Grid>
        <Grid item xs={12}>
            <PODetails/>
        </Grid>
    </Paper>
    </Grid>
    </Grid>
</Container>
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
        <Grid container>
            <Grid item xs={3}>
            Doc Number
            </Grid>
            <Grid item xs={3}>Supplier</Grid>
            <Grid item xs={3}>PO Number
            </Grid>
            <Grid item xs={3}>Date</Grid>
            <Grid item xs={3}>
            <Typography variant="h6">#123</Typography>
            </Grid>
            <Grid item xs={3}>
<TextField></TextField>
            </Grid>
            <Grid item xs={3}>
            <TextField></TextField>
            </Grid>
            <Grid item xs={3}>
<Typography variant="h6">3rd September 1993</Typography>
            </Grid>
        </Grid>
    );
}

const PODetails=()=>{
    return(
        <Box>
        <Grid container spacing={6}>
            <Grid  item xs={1.3}>Sl. no</Grid>
            <Grid  item xs={1.3}>Barcode</Grid>
            <Grid  item xs={1.3}>Product Code</Grid>
            <Grid  item xs={1.3}>Product Description</Grid>
            <Grid  item xs={1.3}>Unit</Grid>
            <Grid  item xs={1.3}>Qty</Grid>
            <Grid  item xs={1.3}>Location</Grid>
            <Grid  item xs={1.3}>Fr</Grid>
            <Grid  item xs={1.3}>Quantity</Grid>
        </Grid>
        <Grid container spacing={6}>
            <Grid  item xs={1.3}>Sl. no</Grid>
            <Grid  item xs={1.3}>Barcode</Grid>
            <Grid  item xs={1.3}>Product Code</Grid>
            <Grid  item xs={1.3}>Product Description</Grid>
            <Grid  item xs={1.3}>Unit</Grid>
            <Grid  item xs={1.3}>Qty</Grid>
            <Grid  item xs={1.3}>Location</Grid>
            <Grid  item xs={1.3}>Fr</Grid>
            <Grid  item xs={1.3}>Quantity</Grid>
        </Grid>
        </Box>
        
    );
}