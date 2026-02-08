import { ChakraProvider } from "./Provider";
import TopHeader from "./TopHeader";
import { nunito } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ChakraProvider>
          <TopHeader />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
