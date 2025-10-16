"use client";
export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-yellow-400/30 selection:text-yellow-50 flex flex-col">
      <header className="py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            IRBCOIN Whitepaper v1.2 (EN)
          </span>
        </h1>
        <p className="mt-3 text-zinc-400 italic text-lg">It’s Really Bullish.</p>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-5">
        <div className="w-full max-w-6xl h-[80vh] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          <iframe src="/IRBCOIN_Whitepaper_v1.2_EN.pdf" title="IRBCOIN Whitepaper v1.2" className="w-full h-full" />
        </div>
      </main>
      <footer className="py-10 flex flex-col md:flex-row items-center justify-center gap-4">
        <a href="/IRBCOIN_Whitepaper_v1.2_EN.pdf" download className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-black font-semibold">
          Download PDF
        </a>
        <a href="/" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 border border-zinc-700 text-zinc-200 hover:bg-zinc-800/60">
          Back to Main Site
        </a>
      </footer>
    </div>
  );
}
