import { Rubik } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import ReduxProvider from "@/providers/redux-provider";
import I18nProvider from "@/providers/i18n-provider";
import { getServerLanguage } from "@/helpers/server-language";
import { initI18nextServer } from "@/i18n/server";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: [ "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Course Marketplace",
  description: "Your premier destination for online courses",
};

export default async function RootLayout({ children }) {
  // Get the current language from cookies
  const currentLanguage = await getServerLanguage();
      
  // Initialize i18n on server side
  await initI18nextServer(currentLanguage);

  return (
    <html lang={currentLanguage}>
      <body
        className={`${rubik.variable} antialiased`}
        suppressHydrationWarning
      >
        <AppRouterCacheProvider>
          <ThemeProvider {...{ theme }}>
            <ReduxProvider>
              <I18nProvider lang={currentLanguage}>
                {children}
              </I18nProvider>
            </ReduxProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
