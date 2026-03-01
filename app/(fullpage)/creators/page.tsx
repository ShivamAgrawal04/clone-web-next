import BrandHeader from "@/components/BrandHeader";
import BrandFooter from "@/components/BrandFooter";

export default function CreatorsPage() {
    const earningWays = [
        {
            title: "UGC Videos",
            desc: "Create high-quality user-generated content for top brands and earn massive payouts natively.",
            icon: <path d="M15.6 11.6L22 7v10l-6.4-4.6v-1z M4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
        },
        {
            title: "Music Sync",
            desc: "Sync your reels or shorts with trending music tracks and earn a lot of money as your views scale.",
            icon: <path d="M9 18V5l12-2v13 M9 9l12-2 M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        },
        {
            title: "Clipping Edits",
            desc: "Perfect for edit/meme pages: clip the given content in your style, add your flavor, and start printing money.",
            icon: <path d="M20 7h-3a2 2 0 0 1-2-2V2 M9 18a2 2 0 0 1-2-2 2 2 0 0 1 2-2h4a2 2 0 0 1 2 2 2 2 0 0 1-2 2 M16 22l5-5 M21 21v-4h-4" />
        },
        {
            title: "Logo Drops",
            desc: "Create what you love—just drop the given brand logo in your content seamlessly and start creating money with views.",
            icon: <circle cx="12" cy="12" r="10" />
        }
    ];

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white selection:bg-[#3b6ff5] selection:text-white">
            <BrandHeader />

            {/* ── Hero ── */}
            <section className="pt-[180px] pb-24 px-4 sm:px-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ccff00]/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 w-full max-w-5xl mx-auto">
                    <div className="inline-block py-1 px-4 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-sm font-bold mb-8 tracking-widest uppercase">
                        Designed for Creators
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-extrabold tracking-tight mb-8 leading-[1.05]">
                        Earn a Living<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#e5383b]">Doing What You Love.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
                        Whether you are a niche creator, an influencer, or you run an edit page or meme page, you can earn securely and rapidly through BennyBucks.
                    </p>
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto mt-12 text-left relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#e5383b]/10 rounded-full blur-[80px]"></div>
                        <h3 className="text-[#ccff00] font-bold text-sm tracking-wider uppercase mb-3">Unlimited Earning</h3>
                        <p className="text-lg md:text-xl font-medium text-white/80 leading-relaxed max-w-3xl relative z-10">
                            Transform your content into a profitable business by becoming a <span className="text-white font-bold">creator-preneur</span>. Imagine getting paid to do what you love and building a successful online presence at the same time. With our platform, it&apos;s not just a dream — it can be your reality.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Our Mission Statement ── */}
            <section className="py-24 bg-[#0a0a0a] border-t border-white/10">
                <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-[1.2] text-white/90">
                        &quot;To turn every passionate creator into a <span className="text-[#ccff00]">creator-preneur</span>, someone who earns, grows, and thrives by doing what they love. We want social influence to be accessible to anyone with creativity and a loyal audience, no matter their background or platform.&quot;
                    </h2>
                    <div className="w-24 h-1 bg-[#ccff00] mx-auto rounded-full mt-12 mb-8"></div>
                </div>
            </section>

            {/* ── 4 Ways to Earn Grid ── */}
            <section className="py-24 bg-[#0f0f0f] relative">
                <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">4 Ways To Earn <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Through Bennybucks</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {earningWays.map((way, i) => (
                            <div key={i} className="bg-[#1a1a1a] border border-white/10 p-8 rounded-[2rem] hover:-translate-y-2 hover:border-[#ccff00]/50 transition-all duration-300 group">
                                <div className="w-16 h-16 bg-[#0a0a0a] rounded-2xl flex items-center justify-center text-[#e5383b] group-hover:bg-[#ccff00] group-hover:text-black mb-6 transition-colors shadow-lg">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {way.icon}
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{way.title}</h3>
                                <p className="text-white/60 leading-relaxed font-medium">{way.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ / Contact CTA ── */}
            <section className="py-24 bg-[#050505] border-t border-b border-white/10 mt-12 mb-24">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-xl">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e5383b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Have Some Doubts?</h2>
                    <p className="text-xl md:text-2xl text-white/60 mb-8 font-medium max-w-2xl mx-auto">
                        Don&apos;t worry! We are here to help. Let us make it simpler for you.
                    </p>
                    <p className="text-lg text-white/40 mb-12 font-medium max-w-2xl mx-auto">
                        Check out our FAQ section to find answers to the most common queries, or contact our support team for personalized assistance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="rounded-full bg-[#ccff00] hover:bg-[#bbe600] text-black text-lg font-bold px-10 py-5 transition-transform hover:scale-105 uppercase tracking-wide">
                            Check FAQ Page
                        </button>
                        <button className="rounded-full bg-transparent border border-white/20 hover:bg-white/5 text-white flex items-center justify-center gap-2 text-lg font-bold px-10 py-5 transition-colors uppercase tracking-wide">
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>

            <BrandFooter />
        </div>
    );
}
