import * as React from "react";
import Container from "@mui/material/Container";
// import shoplogo from "../Images/shoplogo.png";
// import Image from "material-ui-image";
import Link from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function GuestFooter() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        position: "",
        bottom: 0,
        width: "100%",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          {/* <Link href="/">
            <Image
              priority
              src="images/shoplogo.png"
              width={75}
              height={30}
              alt="Logo"
            />
          </Link> */}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2022. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
