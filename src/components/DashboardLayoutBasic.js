import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import WorkIcon from "@mui/icons-material/Work";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import CourseCatalog from "./CourseCatalog/CourseCatalog";
import ResourcesHub from "./ResourseHub/ResourcesHub";
import ProjectShow from "./ProjectCase/ProjectShow";
import LogoutIcon from '@mui/icons-material/Logout';

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "catalogs",
    title: "Course Catalogs",
    icon: <MenuBookIcon />,
  },
  {
    segment: "resources",
    title: "Resource Hub",
    icon: <LibraryBooksIcon />,
  },
  {
    segment: "projects",
    title: "Project Showcase",
    icon: <WorkIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0, // mobile devices
      sm: 600, // small devices
      md: 960, // medium devices (adjusted)
      lg: 1280, // large devices (adjusted)
      xl: 1536, // extra large devices
    },
  },
});

function DemoPageContent({ pathname }) {
  const components = {
    "/dashboard": <StudentDashboard />,
    "/catalogs": <CourseCatalog />,
    "/resources": <ResourcesHub />,
    "/projects": <ProjectShow />,
  };
  return (
    <Box
      sx={{
        py: 4,
        px: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {components[pathname] || <Typography>Page Not Found</Typography>}
    </Box>
  );
}



function DashboardLayoutBasic() {
  const router = useDemoRouter("/dashboard");

  return (
    // preview-start
    <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
      <DashboardLayout title="ADUDC">
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

export default DashboardLayoutBasic;
