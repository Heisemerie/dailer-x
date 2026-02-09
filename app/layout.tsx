import { ChakraProvider } from "./ui/Provider";
import { nunito } from "./ui/fonts";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
