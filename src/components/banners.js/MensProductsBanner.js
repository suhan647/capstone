// import { Typography, colors, useMediaQuery } from "@mui/material";
// import { createTheme, useTheme } from "@mui/material/styles";
// import { styled } from "@mui/material/styles";
// import { Box } from "@mui/system";
// import shoplogo from "../images/shoplogo.png";

// import React from "react";

// // const theme = createTheme({
// //   palette: {
// //     primary: {
// //       main: colors.primary,
// //     },
// //     secondary: {
// //       main: colors.secondary,
// //     },
// //   },
// // });

// export const BnnerContainer = styled(Box)((theme) => ({
//   display: "flex",
//   justifyContent: "center",
//   width: "100%",
//   height: "100%",
//   padding: "0px 0px",
//   backgroundColor: "lightblue",
//   //   [theme.breakpoints.down("sm")]: {
//   //     flexDirection: "column",
//   //     allignItems: "center",
//   // },
// }));

// export const BannerImage = styled("img")(({ src }) => ({
//   src: shoplogo,
//   width: "500px",
// }));

// export const BannerContent = styled(Box)(() => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   maxWidth: 420,
//   padding: "30px",
// }));

// export const BannerTitle = styled(Typography)((theme) => ({
//   lineHeight: 1.5,
//   fontSize: "20px",
//   marginBottom: "20px",
//   //   [theme.breakpoints.down("sm")]: {
//   //     fontSize: "42px",
//   //   },
// }));

// export const BannerDescription = styled(Typography)((theme) => ({
//   lineHeight: 1.25,
//   letterSpacing: 1.25,
//   marginBottom: "3em",
//   //   [theme.breakpoints.down("md")]: {
//   //     lineHeight: 1.15,
//   //     letterSpacing: 1.15,
//   //     marginBottom: " 1.5em",
//   //   },
// }));

// const MensProductsBanner = () => {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("md"));
//   return (
//     <div>
//       <BnnerContainer>
//         <BannerContent>
//           <Typography variant="h6">Discount</Typography>
//           <BannerTitle>Upto 50% of on Mens Select Products</BannerTitle>
//           <BannerDescription variant="subtitle">
//             This is biggest sale of the Year
//           </BannerDescription>
//         </BannerContent>
//       </BnnerContainer>
//     </div>
//   );
// };

// export default MensProductsBanner;
