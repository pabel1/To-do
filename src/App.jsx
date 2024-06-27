import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: `'Outfit', sans-serif`,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
