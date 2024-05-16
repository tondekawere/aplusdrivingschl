// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

// interface Props {
//   window?: () => Window;
// }

// const drawerWidth = 240;
// const navItems = ["HOME", "ABOUT", "SERVICES", "GALLERY", "CONTACT"];

// export default function DrawerAppBar(props: Props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <img src="./Images/logo.png" alt="Logo" style={{ height: 40 }} />
//       <Divider />
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         component="nav"
//         sx={{ backgroundColor: "#fff", padding: { lg: "1% 5%" } }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon style={{ color: "black" }} />
//           </IconButton>
//           <Typography
//             component="div"
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", sm: "block" },
//             }}
//           >
//             <img src="./Images/logo.png" alt="Logo" style={{ height: 40 }} />
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item}
//                 sx={{
//                   color: "#000000",
//                   fontWeight: 800,
//                   textDecoration: "none",
//                   position: "relative",
//                   "&:hover::before": {
//                     content: '""',
//                     position: "absolute",
//                     left: 0,
//                     bottom: 0,
//                     height: 2,
//                     width: "100%",
//                     backgroundColor: "red",
//                     transition: "width 0.3s ease-in-out",
//                   },
//                 }}
//               >
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }
