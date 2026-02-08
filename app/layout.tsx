import LayoutContainer from "./ui/LayoutContainer";
import { ChakraProvider } from "./Provider";
import TopHeader from "./ui/TopHeader";
import { nunito } from "./ui/fonts";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ChakraProvider>
          <TopHeader />
          <LayoutContainer>{children}</LayoutContainer>
        </ChakraProvider>
      </body>
    </html>
  );
}
