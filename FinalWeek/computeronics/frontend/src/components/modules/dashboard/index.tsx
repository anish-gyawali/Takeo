import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    m: 5,
  },
  card: {
    width: 500,
    mr: 4,
    height: "auto",
    minHeight: 400,
  },
  cardMedia: {
    height: 250,
    minHeight: 250,
  },
  btn: {
    width: "100%",
  },
};
const DESKTOP_IMAGE = "/desktop.png";
const WINDOWS_IMAGE = "/windows.jpg";
interface DashboardProps {
  setIsModelOpen: any;
  isModelOpen: boolean;
}
const Dashboard = ({ setIsModelOpen, isModelOpen }: DashboardProps) => {
  const userData = useSelector((state: any) => state.loginData);
  const navigate = useNavigate();
  const goToOrder = () => {
    if (userData?._id) {
      navigate("/order");
    } else {
      setIsModelOpen(true);
    }
  };
  const goToTicket = () => {
    if (userData?._id) {
      navigate("/ticket");
    } else {
      setIsModelOpen(true);
    }
  };
  return (
    <Box sx={styles.wrapper}>
      <Card sx={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={DESKTOP_IMAGE}
            alt="green iguana"
            sx={styles.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Get your issue resolved on Windows
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={styles.btn}
            onClick={goToTicket}
          >
            Raise Ticket
          </Button>
        </CardActions>
      </Card>
      <Card sx={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={WINDOWS_IMAGE}
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
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={styles.btn}
            onClick={goToOrder}
          >
            Order
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Dashboard;
