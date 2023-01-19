import "@/styles/globals.css";
import { Inter } from "@next/font/google";
const inter = Inter({
  display: "swap",
  variable: "--font-inter",
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
