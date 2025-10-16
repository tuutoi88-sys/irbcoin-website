// IRBCOIN Website v6.2.3 — Build Fix Edition
"use client";
import { motion } from "framer-motion";
import { ExternalLink, Twitter, Send, Link as LinkIcon, Crown, Shield } from "lucide-react";
import Image from "next/image";

const GoldText = ({ children, className = "" }) => (
  <span className={`bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="text-sm uppercase tracking-widest text-zinc-400">{label}</div>
    <div className="text-2xl md:text-3xl font-semibold text-white mt-1">
      <GoldText>{value}</GoldText>
    </div>
  </div>
);

const NavLinkItem = ({ href, children, target }) => (
  <a href={href} target={target} rel={target === "_blank" ? "noreferrer noopener" : undefined} className="text-zinc-300 hover:text-white transition-colors text-sm md:text-base">{children}</a>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md shadow-2xl p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-yellow-400/30 selection:text-yellow-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-700" />
            <div className="font-semibold tracking-wide text-white">IRBCOIN</div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLinkItem href="#hero">Home</NavLinkItem>
            <NavLinkItem href="#about">About</NavLinkItem>
            <NavLinkItem href="#manifesto">Manifesto</NavLinkItem>
            <NavLinkItem href="#tokenomics">Tokenomics</NavLinkItem>
            <NavLinkItem href="#vision">Vision</NavLinkItem>
            <NavLinkItem href="#buy">Buy</NavLinkItem>
            <NavLinkItem href="#documents">Documents</NavLinkItem>
            <NavLinkItem href="/whitepaper" target="_blank">Whitepaper</NavLinkItem>
          </nav>
        </div>
      </header>

      {/* HERO with z-index fix */}
      <section id="hero" className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-5 pt-24 pb-16 md:pt-28 md:pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">
                <Crown className="size-4" /> Luxury Meme Power
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
                <GoldText>It’s Really Bullish.</GoldText>
              </h1>
              <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
                IRBCOIN is a luxury-tier meme token: ironic, ambitious, and built for value.
                <span className="block mt-3 text-zinc-400">The Internet’s Real Boss. No Promises. Just Vibes.</span>
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center">
                <a href="https://jup.ag/tokens/3gbmqPH5PGvfpzDRcpg2mMALr8VMJ7cemoh75Th9gaiA" target="_blank" rel="noreferrer noopener" className="flex flex-col items-center">
                  <Image src="/assets/coin-button.jpg" alt="Buy IRBCOIN" width={56} height={56} className="w-14 h-14 rounded-full border border-yellow-500/50 shadow-lg mb-2 object-cover" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent tracking-wider">BUY</span>
                </a>
                <a href="https://birdeye.so/solana/token/3gbmqPH5PGvfpzDRcpg2mMALr8VMJ7cemoh75Th9gaiA" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-sm md:text-base border border-zinc-800 text-zinc-200 px-5 py-3 rounded-xl hover:bg-zinc-800/60 transition-all">
                  View Chart <ExternalLink className="size-4" />
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
                <Stat label="Supply" value="1,000,000,000" />
                <Stat label="Tax" value="0%" />
                <Stat label="Chain" value="Solana" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 md:p-8 flex items-center justify-center shadow-2xl">
                <Image src="/assets/coin-hero.png" alt="IRBCOIN Gold Coin" width={640} height={640} className="rounded-full shadow-[0_0_120px_rgba(234,179,8,0.2)] object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white"><GoldText>What is IRBCOIN?</GoldText></h2>
            <p className="text-zinc-400 mt-4 leading-relaxed">IRBCOIN is a Solana-native luxury meme: a confident brand with self-aware humor and strong community energy.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card><h3 className="text-lg font-semibold text-white mb-2">DNA</h3><p className="text-zinc-400">Gold identity, Solana glow, and ironic confidence.</p></Card>
            <Card><h3 className="text-lg font-semibold text-white mb-2">Value Proposition</h3><p className="text-zinc-400">Memetics + practical integrations at one click.</p></Card>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="max-w-5xl mx-auto px-5 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8"><GoldText>The IRBCOIN Manifesto</GoldText></h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            We believe in irony, confidence, and community. <br />
            We believe memes are culture — and culture drives value. <br />
            IRBCOIN is not a promise; it’s a movement. <br />
            It’s the rebellion of confidence. <br />
            It’s the laughter of resilience. <br />
            It’s the irony that wins. <br /><br />
            And when people ask what IRBCOIN is, <br />
            We’ll smile and say:
          </p>
          <div className="mt-10">
            <p className="text-3xl font-semibold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">It’s Really Bullish.</p>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white"><GoldText>Clear and Punchy Tokenomics</GoldText></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card><div className="text-sm uppercase tracking-widest text-zinc-400 mb-2">Total Supply</div><div className="text-3xl font-semibold text-white"><GoldText>1,000,000,000</GoldText></div></Card>
            <Card><div className="text-sm uppercase tracking-widest text-zinc-400 mb-2">Tax</div><div className="text-3xl font-semibold text-white"><GoldText>0%</GoldText></div></Card>
            <Card><div className="text-sm uppercase tracking-widest text-zinc-400 mb-2">Liquidity</div><div className="text-3xl font-semibold text-white"><GoldText>Strategic Burns</GoldText></div><p className="text-zinc-500 text-sm mt-2">LP managed with strategic surprise burns (Policy v1.1).</p></Card>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.05),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white"><GoldText>Vision 2025–2026</GoldText></h2>
            <p className="text-zinc-400 mt-4 leading-relaxed">We are building a sustainable meme ecosystem: visibility, products, and the power of community.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card><h3 className="text-lg font-semibold text-white mb-2">Q4 2025</h3><ul className="text-zinc-400 list-disc list-inside space-y-1"><li>Dexscreener & Birdeye visibility</li><li>10k holders target</li><li>LP fees trending up</li></ul></Card>
            <Card><h3 className="text-lg font-semibold text-white mb-2">Q1–Q2 2026</h3><ul className="text-zinc-400 list-disc list-inside space-y-1"><li>NFT “IRB Legends”</li><li>Merch + CEX prep</li><li>Community mechanics</li></ul></Card>
            <Card><h3 className="text-lg font-semibold text-white mb-2">Q3 2026+</h3><ul className="text-zinc-400 list-disc list-inside space-y-1"><li>Ecosystem partnerships</li><li>Scaled growth</li><li>IRB = cult status</li></ul></Card>
          </div>
        </div>
      </section>

      {/* BUY */}
      <section id="buy" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://jup.ag/tokens/3gbmqPH5PGvfpzDRcpg2mMALr8VMJ7cemoh75Th9gaiA" target="_blank" rel="noreferrer noopener" className="flex flex-col items-center">
              <Image src="/assets/coin-button.jpg" alt="Buy IRBCOIN" width={56} height={56} className="w-14 h-14 rounded-full border border-yellow-500/50 shadow-lg mb-2 object-cover" />
              <span className="text-sm font-semibold bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent tracking-wider">BUY</span>
            </a>
            <a href="https://birdeye.so/solana/token/3gbmqPH5PGvfpzDRcpg2mMALr8VMJ7cemoh75Th9gaiA" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-sm md:text-base border border-zinc-800 text-zinc-200 px-5 py-3 rounded-xl hover:bg-zinc-800/60 transition-all">
              View Chart <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section id="transparency" className="max-w-5xl mx-auto px-5 pb-16">
        <Card className="text-center">
          <div className="flex flex-col items-center gap-3 mb-6">
            <Shield className="size-8 text-yellow-500" />
            <h2 className="text-2xl md:text-3xl font-semibold"><GoldText>Transparency & Security Statement</GoldText></h2>
          </div>
          <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto">IRBCOIN operates under full transparency and trust.</p>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>• Contract ownership: Renounced</li>
            <li>• Liquidity: Managed by official LP Policy</li>
            <li>• Mint authority: Revoked</li>
            <li>• Freeze authority: Verified</li>
          </ul>
          <div className="mt-6">
            <a href="https://jup.ag/tokens/3gbmqPH5PGvfpzDRcpg2mMALr8VMJ7cemoh75Th9gaiA" target="_blank" rel="noreferrer noopener" className="text-sm font-semibold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              View on Jupiter ↗
            </a>
          </div>
        </Card>
      </section>

      {/* SOCIALS */}
      <section id="socials" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white"><GoldText>Join the Movement</GoldText></h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card><div className="flex items-center gap-3"><Twitter className="size-5 text-yellow-400" /><div className="font-medium text-white">X (Twitter)</div></div><a className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white" href="https://x.com/IRBCoinOfficial" target="_blank" rel="noreferrer noopener">@IRBCoinOfficial <ExternalLink className="size-4" /></a></Card>
            <Card><div className="flex items-center gap-3"><Send className="size-5 text-yellow-400" /><div className="font-medium text-white">Telegram</div></div><a className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white" href="https://t.me/IRBCoinOfficial" target="_blank" rel="noreferrer noopener">IRBCoinOfficial <ExternalLink className="size-4" /></a></Card>
            <Card><div className="flex items-center gap-3"><LinkIcon className="size-5 text-yellow-400" /><div className="font-medium text-white">TikTok</div></div><a className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white" href="https://www.tiktok.com/@irbcoin_official" target="_blank" rel="noreferrer noopener">@irbcoin_official <ExternalLink className="size-4" /></a></Card>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section id="documents" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white"><GoldText>Official Documents</GoldText></h2>
            <p className="text-zinc-400 mt-4 leading-relaxed">Whitepaper, Manifesto, Policies, and Brand Kit.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="font-medium text-white">Whitepaper (EN)</div>
              <p className="text-zinc-500 text-sm mt-2">Open in new tab</p>
              <a className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white" href="/whitepaper" target="_blank" rel="noreferrer noopener">
                /whitepaper <ExternalLink className="size-4" />
              </a>
            </Card>
            <Card>
              <div className="font-medium text-white">Manifesto (EN)</div>
              <p className="text-zinc-500 text-sm mt-2">Open PDF in new tab</p>
              <a className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white" href="/IRBCOIN_Manifesto_v1.0_EN.pdf" target="_blank" rel="noreferrer noopener">
                Manifesto.pdf <ExternalLink className="size-4" />
              </a>
            </Card>
            <Card>
              <div className="font-medium text-white">Brand Kit</div>
              <p className="text-zinc-500 text-sm mt-2">Coming soon</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-10">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-500">© 2025 IRBCOIN — <GoldText>It’s Really Bullish.</GoldText></div>
          <div className="flex items-center gap-6 text-sm">
            <a href="https://x.com/IRBCoinOfficial" target="_blank" className="text-zinc-400 hover:text-white">X</a>
            <a href="https://t.me/IRBCoinOfficial" target="_blank" className="text-zinc-400 hover:text-white">Telegram</a>
            <a href="https://www.tiktok.com/@irbcoin_official" target="_blank" className="text-zinc-400 hover:text-white">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
