import BrandHeader from "@/components/BrandHeader";
import BrandFooter from "@/components/BrandFooter";

const CheckIcon = () => (
    <svg className="text-brand-neon flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export default function LogoPage() {

    const features = [
        {
            title: "Non-Conscious Familiarity",
            desc: "The Mere-Exposure Effect proves that repeated, subtle viewing of your logo builds a positive association and sense of trust, all without the audience even realizing it.",
            icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        },
        {
            title: "Subliminal Brand Recall",
            desc: "Through Implicit Memory, your logo is processed at a non-conscious level. This ensures that even if viewers don't remember seeing the logo, their future brand choices are positively influenced.",
            icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        },
        {
            title: "Viral Social Validation",
            desc: "The principle of Social Proof shows that people trust a brand endorsed by others. When creators use your logo, it acts as a powerful, authentic form of peer validation.",
            icon: <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        },
        {
            title: "Reach Niche Audiences",
            desc: "Target specific creator communities to get your brand in front of the exact right people, amplifying your context.",
            icon: <circle cx="12" cy="12" r="10" />
        },
        {
            title: "Build Curiosity & Stop Getting Skipped",
            desc: "Brands spend crores on ads that get skipped in 3 seconds. By blending your branding into creative content people choose to watch, viewers are encouraged to learn more.",
            icon: <path d="M2 12h4l3-9 5 18 3-9h5" />
        },
        {
            title: "Boost SEO",
            desc: "Creator mentions and brand-specific hashtags dramatically improve your online presence, making it easier for people to find your brand via search engines.",
            icon: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        }
    ];

    const timelineSteps = [
        {
            title: "Campaign Configuration",
            content: (
                <div className="space-y-4 max-w-lg">
                    <p className="font-medium text-lg leading-relaxed text-text-primary/80">
                        e.g., <strong>A top consumer brand launches a campaign</strong> to boost visibility natively using their logo drop.
                    </p>
                    <div className="bg-page-surface border border-page-border rounded-2xl p-6 text-sm md:text-base space-y-4 shadow-xl w-full text-left">
                        <div className="flex justify-between border-b border-page-border pb-3">
                            <span className="text-text-primary/50">Budget</span>
                            <span className="font-bold text-text-primary">₹1 Lac</span>
                        </div>
                        <div className="flex flex-col border-b border-page-border pb-4">
                            <span className="text-text-primary/50 mb-3">Requirements</span>
                            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 font-semibold text-text-primary/90">
                                <li className="flex items-center gap-2"><span className="text-brand-red">&bull;</span> Min followers: 10k</li>
                                <li className="flex items-center gap-2"><span className="text-brand-red">&bull;</span> Niche: Lifestyle</li>
                                <li className="flex items-center gap-2"><span className="text-brand-red">&bull;</span> Demographic: Both</li>
                                <li className="flex items-center gap-2"><span className="text-brand-red">&bull;</span> Assets: Transparent PNG</li>
                            </ul>
                        </div>
                        <div className="flex flex-col border-b border-page-border pb-4">
                            <span className="text-text-primary/50 mb-2">Brief</span>
                            <span className="font-medium text-text-primary/80 leading-relaxed text-sm">
                                Integrate the brand logo creatively into engaging videos or photos. Ensure high visibility.
                            </span>
                        </div>
                        <div className="flex justify-between pt-1">
                            <span className="text-text-primary/50 font-medium">Target Payout</span>
                            <span className="font-extrabold text-brand-neon">₹15k CPM / 100k views</span>
                        </div>
                    </div>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2564&auto=format&fit=crop"
        },
        {
            title: "Now Impact",
            content: (
                <p className="md:text-xl font-medium leading-relaxed max-w-lg text-text-primary/80">
                    Creators participate by creating highly engaging videos. They seamlessly drop or wear the brand logo within their content and submit the links, creating widespread subliminal impressions across massive audiences.
                </p>
            ),
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
        },
        {
            title: "Whoofy AI Model",
            content: (
                <div className="space-y-6 max-w-lg">
                    <p className="md:text-xl font-medium leading-relaxed text-text-primary/80">
                        We have built an AI module <strong>Whoofy</strong> to prevent any fake or low performance reels. You set your requirement, we feed your requirements to Whoofy, and Whoofy identifies if every single requirement matches the reel or not.
                    </p>
                    <ul className="space-y-4 text-text-primary/70 md:text-lg text-left inline-block w-full font-medium">
                        <li className="flex items-start gap-3"><CheckIcon /> <span className="flex-1">Scans frame-by-frame for exact logo usage</span></li>
                        <li className="flex items-start gap-3"><CheckIcon /> <span className="flex-1">Identifies requirement match (niche, demographics)</span></li>
                        <li className="flex items-start gap-3"><CheckIcon /> <span className="flex-1">Detects positive or negative brand sentiment</span></li>
                    </ul>
                    <div className="inline-block mt-4 px-4 py-2 bg-brand-neon/10 border border-brand-neon/30 rounded-lg">
                        <p className="text-brand-neon font-bold text-sm uppercase tracking-widest text-left">Once approved</p>
                    </div>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Real-time Tracking",
            content: (
                <p className="md:text-xl font-medium leading-relaxed max-w-lg text-text-primary/80">
                    Each and every reel is shown on a dedicated dashboard. If you are not happy with the AI decision, you also get the option to flag it, and our team will review that reel manually.
                </p>
            ),
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2564&auto=format&fit=crop"
        },
        {
            title: "Creator Payouts",
            content: (
                <p className="md:text-xl font-medium leading-relaxed max-w-lg text-text-primary/80">
                    Once all the videos get approved, the creators are paid based directly on the views they have earned.
                </p>
            ),
            image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=2574&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-page-bg text-text-primary selection:bg-blue-600 selection:text-text-primary">
            <BrandHeader />

            {/* ── Hero ── */}
            <section className="pt-[180px] pb-24 px-4 sm:px-8 flex flex-col items-center justify-center text-center">
                <div className="inline-block py-1 px-4 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-sm font-bold mb-8 tracking-widest uppercase">
                    Let Your Brand Show Its Mark
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tight mb-8 leading-[1.05]">
                    Build Trust Natively.<br /> <span className="text-brand-red">Watch Your Brand Grow.</span>
                </h1>
                <p className="text-xl md:text-2xl text-text-primary/60 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
                    LogoDrop gets your brand seen by millions. When creators use your logo, you build trust and connect with a fresh, excited audience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <button className="rounded-xl bg-[#1754d8] hover:bg-[#1240a6] text-white text-lg font-bold px-10 py-5 transition-transform hover:scale-105 uppercase tracking-wide">
                        Start Your LogoDrop Campaign
                    </button>
                    <button className="rounded-full bg-transparent border-2 border-text-primary/30 hover:border-text-primary/60 hover:bg-text-primary/5 text-text-primary flex items-center justify-center gap-3 text-lg font-bold px-10 py-5 transition-colors uppercase tracking-wide">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        Watch 60s Explainer
                    </button>
                </div>
            </section>



            {/* ── Timeline Section (How it works) ── */}
            {/* <section className="py-24 bg-page-surface-alt border-t border-page-border relative overflow-hidden">
                <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">

                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">The Logo Validation Pipeline</h2>
                        <p className="text-xl text-text-primary/50 max-w-2xl mx-auto font-medium">From campaign creation to payout verification</p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-text-primary/10 md:-translate-x-1/2 rounded-full hidden md:block"></div>

                        <div className="absolute left-[24px] md:left-1/2 top-4 h-[30%] w-[2px] bg-gradient-to-b from-[#ccff00] to-transparent md:-translate-x-1/2 rounded-full hidden md:block"></div>

                        <div className="flex flex-col gap-24 md:gap-32 relative">
                            {timelineSteps.map((step, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <div key={index} className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                        <div className={`w-full md:w-1/2 flex flex-col justify-center text-center md:text-left ${isEven ? 'md:pr-16 lg:pr-24 md:items-end md:text-right' : 'md:pl-16 lg:pl-24 md:items-start'}`}>
                                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-brand-red tracking-tight">{step.title}</h3>
                                            <div className={`w-full flex ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                                                {step.content}
                                            </div>
                                        </div>

                                        <div className="absolute left-[24px] md:left-1/2 w-8 h-8 rounded-full bg-page-surface border-[4px] border-brand-neon transform -translate-x-1/2 shadow-[0_0_20px_rgba(204,255,0,0.3)] z-20 top-0 md:top-auto hidden md:block"></div>

                                        <div className={`w-full md:w-1/2 flex justify-center ${isEven ? 'md:justify-start md:pl-16 lg:pl-24' : 'md:justify-end md:pr-16 lg:pr-24'}`}>
                                            <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-page-border shadow-2xl bg-page-surface group">
                                                <img src={step.image} alt={step.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 scale-[1.02] group-hover:scale-100 mix-blend-lighten" />
                                            </div>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section> */}

            {/* ── Case Study / Showcase Section ── */}
            <section className="bg-section-highlight text-text-primary w-full overflow-hidden py-24">
                <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">

                    {/* Header: Logo and Title */}
                    <div className="mb-16">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-text-primary rounded-lg flex items-center justify-center text-page-surface shrink-0">
                                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                                    <path d="M4 6l4 12 6-8 6 8 4-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-text-primary">Logo Content</h2>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-text-primary/80">Bennybucks Powers Logo Content</h3>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-20 text-text-primary">
                        <div>
                            <h4 className="text-2xl font-bold mb-4 tracking-tight">Challenge</h4>
                            <p className="text-lg leading-relaxed font-medium text-text-primary/80">
                                Brands struggle to produce authentic content at scale. High production costs, agency bottlenecks, and long turnaround times make it difficult to maintain an active social presence that resonates with everyday consumers and drives ad performance.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-4 tracking-tight">Solution</h4>
                            <p className="text-lg leading-relaxed font-medium text-text-primary/80">
                                Bennybucks partnered with top brands to spotlight how authentic logo integration powers modern marketing. We curated a mix of voices: micro-influencers, product superfans, and everyday consumers, who used their phones to show how your product fuels their daily lives. From raw reviews to aesthetic unboxings, our creators turn ideas into impact.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Container for Videos (Full Screen Edge-to-Edge) */}
                <div className="w-full px-0 sm:px-4">
                    <div className="bg-page-surface rounded-[2rem] p-4 sm:p-8 md:p-12 lg:py-16 border border-page-border overflow-hidden w-full">
                        <div className="w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <div className="flex gap-4 sm:gap-6 w-max px-4">
                                {/* Video Cards */}
                                {[
                                    { video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", brand: "Logo Showcase 1" },
                                    { video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", brand: "Logo Showcase 2" },
                                    { video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", brand: "Logo Showcase 3" },
                                    { video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", brand: "Logo Showcase 4" },
                                    { video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", brand: "Logo Showcase 5" }
                                ].map((item, i) => (
                                    <div key={i} className="relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] aspect-[9/16] rounded-2xl md:rounded-[1.5rem] overflow-hidden group snap-center cursor-pointer shadow-md bg-page-bg">
                                        <video
                                            src={item.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                                        <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-white/20">#BennyPartner</span>
                                        </div>
                                        <div className="absolute bottom-8 inset-x-0 flex justify-center pointer-events-none">
                                            <span className="bg-white text-black font-bold text-sm px-6 py-2.5 rounded-full shadow-xl">
                                                {item.brand}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Features Grid ── */}
            <section className="py-24 bg-page-surface-alt border-t border-page-border">
                <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">How LogoDrop Helps Your Brand</h2>
                        <p className="text-lg text-text-primary/50 max-w-2xl mx-auto font-medium">Deploy your branding without turning your marketing into a skippable ad.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="bg-page-surface border border-page-border p-8 rounded-[2rem] hover:border-white/30 transition-colors group">
                                <div className="w-14 h-14 bg-text-primary/5 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-text-primary transition-colors">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {feature.icon}
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-text-primary/60 leading-relaxed font-medium text-sm md:text-base">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BrandFooter />
        </div>
    );
}
