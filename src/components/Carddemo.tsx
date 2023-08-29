import {
  Card,
  CardMedia,
  CardContent,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useStyles } from "../styles";
import React from "react";
import Title from "./Title";

export default function Carddemo() {
  const classes = useStyles();
  return (
    // <Container maxWidth="lg" className={classes.container}>
    //   <Grid container spacing={3}>
    //     <Grid item xs={12} md={4} lg={3}>
    //       <Paper className={classes.paper}>
    //         <Title>Card grid demo</Title>
    //         <Card raised={true} sx={{ maxWidth: 200 }}>
    //           <CardMedia
    //             component="img"
    //             height="200"
    //             image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png"
    //             alt="GFG Logo"
    //           />
    //           <CardContent sx={{ bgcolor: "#E8E8E8" }}>
    //             <h3>DSA Self Paced Course</h3>
    //             <h4 style={{ color: "green" }}>
    //               Most popular course on DSA trusted by over 75,000 students!
    //               Built with years of experience by industry.
    //               <br />
    //               Start Today !
    //             </h4>
    //           </CardContent>
    //         </Card>
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </Container>
    <React.Fragment>
      <Paper className={classes.paper}>
        <Title>Cards grid demo</Title>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {Array.from(Array(60)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card raised={true} sx={{ maxWidth: 200 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png"
                  alt="GFG Logo"
                />
                <CardContent sx={{ bgcolor: "#E8E8E8" }}>
                  <h3>DSA Self Paced Course</h3>
                  <h4 style={{ color: "green" }}>
                    Most popular course on DSA trusted by over 75,000 students!
                    Built with years of experience by industry.
                    <br />
                    Start Today !
                  </h4>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </React.Fragment>
  );
}
