import Container from "./Container";
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
          <Container>{children}</Container>
        </ChakraProvider>
      </body>
    </html>
  );
}
