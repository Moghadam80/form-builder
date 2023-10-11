import { Inter } from "next/font/google";
import "./globals.css";
import FormContextProvider from "@/components/context/FormContext";
import DesignerContextProvider from "@/components/context/DesignerContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormContextProvider>
          <DesignerContextProvider>{children}</DesignerContextProvider>
        </FormContextProvider>
      </body>
    </html>
  );
}
