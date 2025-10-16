import "../styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://irbcoin.example.com"),
  title: "IRBCOIN — It’s Really Bullish | Official Site",
  description: "The official site of IRBCOIN ($IRB) — the luxury-tier meme token built on Solana. No Promises. Just Vibes.",
  icons: { icon: "/assets/coin-hero.png" },
  openGraph: {
    title: "IRBCOIN — It’s Really Bullish",
    description: "The luxury-tier meme coin built on Solana. No Promises. Just Vibes.",
    url: "https://irbcoin.example.com",
    siteName: "IRBCOIN",
    images: [{ url: "/assets/coin-hero.png", width: 1200, height: 630, alt: "IRBCOIN Gold Coin" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "IRBCOIN — It’s Really Bullish",
    description: "The luxury-tier meme coin built on Solana.",
    images: ["/assets/coin-hero.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-200">{children}</body>
    </html>
  );
}
