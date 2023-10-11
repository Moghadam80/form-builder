import "./globals.css";
import FormContextProvider from "@/components/context/FormContext";
import DesignerContextProvider from "@/components/context/DesignerContext";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FormContextProvider>
          <DesignerContextProvider>{children}</DesignerContextProvider>
        </FormContextProvider>
      </body>
    </html>
  );
}
