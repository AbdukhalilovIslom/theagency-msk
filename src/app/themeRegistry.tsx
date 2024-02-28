// app/ThemeRegistry.tsx
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/site";

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902

interface ThemeRegistryProps {
  children: React.ReactNode;
  options: { key: string }
}

export default function ThemeRegistry({ options, children }: ThemeRegistryProps) {


  return (
    <AppRouterCacheProvider options={options}>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        {children}
      </ThemeProvider>

    </AppRouterCacheProvider>
  );
}
