import * as React from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
import Typography from "@mui/material/Typography";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Tooltip } from "@material-ui/core";

// function Router(props: { children?: React.ReactNode }) {
//   const { children } = props;
//   if (typeof window === "undefined") {
//     return <StaticRouter location="/drafts">{children}</StaticRouter>;
//   }

//   return (
//     <MemoryRouter initialEntries={["/drafts"]} initialIndex={0}>
//       {children}
//     </MemoryRouter>
//   );
// }

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  open: boolean;
  index: number;
}

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref
) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

export default function ListItemLink(props: ListItemLinkProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event: any, index: any) => {
    setSelectedIndex(index);
  };
  const { icon, primary, to, open, index } = props;

  return (
    <li>
      <Tooltip title={open ? "" : primary} placement="right" arrow={true}>
        <ListItem
          button
          component={Link}
          to={to}
          //   selected={selectedIndex === index}
          //   onClick={(event) => handleListItemClick(event, index)}
        >
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </Tooltip>
    </li>
  );
}

// function Content() {
//   const location = useLocation();
//   return (
//     <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
//       Current route: {location.pathname}
//     </Typography>
//   );
// }

// export default function ListRouter() {
//   return (
//     <Router>
//       <Box sx={{ width: 360 }}>
//         <Routes>
//           <Route path="*" element={<Content />} />
//         </Routes>

//         <Paper elevation={0}>
//           <List aria-label="main mailbox folders">
//             <ListItemLink to="/inbox" primary="Inbox" icon={<InboxIcon />} />
//             <ListItemLink to="/drafts" primary="Drafts" icon={<DraftsIcon />} />
//           </List>
//           <Divider />
//           <List aria-label="secondary mailbox folders">
//             <ListItemLink to="/trash" primary="Trash" />
//             <ListItemLink to="/spam" primary="Spam" />
//           </List>
//         </Paper>
//       </Box>
//     </Router>
//   );
// }
