import { Grid, Typography, Link, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  color: theme.palette.common.white,
  marginTop: theme.spacing(8),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(3),
}));

const SocialIconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  margin: theme.spacing(0, 2),
}));

export default function Footer() {
  return (
    <FooterContainer>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign={{ xs: "center", sm: "left" }} sx={{ ml: "20px" }}>
            <Typography variant="h6" gutterBottom>
              City Shop
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              We sell the best products in the city
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Customer Care
            </Link>
            <br />
            <Typography variant="body2" gutterBottom>
              +91-9038497002
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Email Us
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Refund Policy
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="h6" gutterBottom>
              Partnerships
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Become an Affiliate Partner
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Check Order Status
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign={{ xs: "center", sm: "right" }} sx={{ mr: "20px" }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <SocialIconContainer>
              <SocialIcon>
                <FacebookIcon fontSize="large" />
              </SocialIcon>
              <SocialIcon>
                <TwitterIcon fontSize="large" />
              </SocialIcon>
              <SocialIcon>
                <InstagramIcon fontSize="large" />
              </SocialIcon>
            </SocialIconContainer>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" style={{ marginTop: "20px" }}>
        © {new Date().getFullYear()} City Shop. All rights reserved.
      </Typography>
    </FooterContainer>
  );
}
