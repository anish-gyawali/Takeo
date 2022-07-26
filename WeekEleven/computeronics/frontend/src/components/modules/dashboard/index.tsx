import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

const styles={
  wrapper:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    m:5,
  },
  card:{
    Width: 500,
    height:'auto',
    minHeight:400,
    m:5 
  },
  cardMedia:{
    height:250,
    minHeight:250,
  }
}
const ISSUE_IMAGE="/issue.jpg";
const ORDER_IMAGE="/order.jpg"
const Dashboard=()=> {
  return (
    <Box sx={styles.wrapper}>
    <Card sx={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ISSUE_IMAGE}
          alt="green iguana"
          sx={styles.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Get your issue resolved here
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size='large' fullWidth color="primary">
          RAISE TICKET
        </Button>
      </CardActions>
    </Card>
    <Card sx={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ORDER_IMAGE}
          alt="green iguana"
          sx={styles.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Order System/Accessories on rent
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size='large' fullWidth color="primary">
          ORDER
        </Button>
      </CardActions>
    </Card>
    </Box>
  );
}
export default Dashboard;