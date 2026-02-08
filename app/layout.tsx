import { Provider } from "../components/ui/provider";
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
        <TopHeader />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
