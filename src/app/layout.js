import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { UserProvider } from "@/context/UserContext";
import ThemeProvider from "@/components/ui/theme-provider"


export const metadata = {
  title: "Hiresense",
  description: "AI powered Recruiter!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <UserProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <Toaster />
            {children}
          </ThemeProvider>
          </UserProvider>
        </body>
      </html>
    </>
  )
}
