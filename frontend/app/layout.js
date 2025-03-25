import Providers from "../lib/Providers";
import "./globals.css";

export const metadata = {
  title: "Tourist Places",
  description: "Explore India where you wanna go",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
