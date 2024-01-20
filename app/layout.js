import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Theme from "./theme-provider";

export const metadata = {
  title: "Gem Solis | Personal Portfolio",
  description: "Crafting visual experience into reality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Navbar />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
