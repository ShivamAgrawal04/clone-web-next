import BrandHeader from "@/components/BrandHeader";
import BrandFooter from "@/components/BrandFooter";

export default function CreatorsPage() {
    return (
        <div className="min-h-screen bg-page-bg text-text-primary selection:bg-brand-neon selection:text-black font-sans">
            <BrandHeader />

            {/* 1) Hero Section */}
            <section className="pt-32 lg:pt-48 pb-16 px-6 sm:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center border-b border-text-primary/5">
                {/* Left side Image (Vertical Card like Pearpop) */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
                    <div className="w-full max-w-[320px] aspect-[4/5] bg-page-surface-alt rounded-[2rem] overflow-hidden relative shadow-2xl flex items-center justify-center border border-page-border group">
                        {/* Placeholder image resembling Pearpop's creator card */}
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                            alt="Creator"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="font-extrabold text-xl mb-1">Jordan Halley</p>
                            <p className="text-xs font-bold uppercase tracking-wider opacity-80">Managed by BennyBucks Talent</p>
                        </div>
                    </div>
                </div>

                {/* Right side Text */}
                <div className="lg:col-span-8 text-center lg:text-left">
                    <h1 className="text-[11vw] sm:text-7xl lg:text-[7.5rem] leading-[0.9] font-black tracking-tight mb-8">
                        Earn a Living<br />
                        <span className="block ml-0 lg:ml-24">Doing What</span>
                        <span className="block ml-0 lg:ml-48">You Love</span>
                    </h1>
                    <div className="ml-0 lg:ml-24 max-w-2xl text-left">
                        <p className="text-lg md:text-xl font-medium text-text-primary/70 leading-relaxed">
                            To turn every passionate creator into a “creator-preneur” — someone who earns, grows, and thrives by doing what they love. We want social influence to be accessible to anyone with creativity and a loyal audience, no matter their background or platform.
                        </p>
                        <p className="text-lg md:text-xl font-medium text-text-primary/70 leading-relaxed mt-4">
                            Whether you are a niche creator, an influencer, or you run an edit page or meme page, you can earn through BennyBucks.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2) Form Section Replacement (Left side content, Right side image) */}
            <section className="py-24 px-6 sm:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left side content */}
                <div>
                    <h2 className="text-5xl md:text-[4rem] font-black tracking-tight mb-8 leading-[1.1]">
                        Unlimited Earning
                    </h2>
                    <p className="text-xl md:text-2xl font-medium text-text-primary/70 leading-relaxed">
                        Transform your content into a profitable business by becoming a creator-preneur. Imagine getting paid to do what you love and building a successful online presence at the same time. With our platform, it&apos;s not just a dream - it can be your reality.
                    </p>
                    <button className="mt-12 bg-brand-neon hover:bg-brand-neon-hover text-black font-extrabold text-lg px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 uppercase tracking-wide">
                        Start Earning Now
                    </button>
                </div>

                {/* Right side Image area (Unique Design) */}
                <div className="relative group perspective-1000 w-full max-w-xl mx-auto">
                    {/* Background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-neon/20 rounded-full blur-[100px] -z-10 group-hover:bg-brand-neon/30 transition-colors duration-700"></div>

                    {/* Main card */}
                    <div className="relative z-10 w-full aspect-[4/3] bg-page-surface/40 backdrop-blur-xl border border-page-border rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center p-8 overflow-hidden transform transition-transform duration-700 hover:scale-[1.02]">
                        {/* Decorative floating elements */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#ccff00] to-[#9dae00] rounded-full blur-2xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
                        <div className="absolute -bottom-24 -left-12 w-64 h-64 bg-gradient-to-tr from-[#fa4616] to-pink-500 rounded-full blur-3xl opacity-40 group-hover:scale-150 transition-transform duration-1000"></div>

                        {/* Inner glass pane simulating UI */}
                        <div className="w-full h-full bg-white/20 dark:bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 flex flex-col p-6 shadow-inner relative z-20">
                            {/* Fake UI Header */}
                            <div className="w-full flex items-center justify-between border-b border-white/20 dark:border-white/10 pb-4 mb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="h-4 w-32 bg-white/30 dark:bg-white/10 rounded-full"></div>
                            </div>
                            {/* Fake UI Body */}
                            <div className="flex-1 flex gap-4">
                                <div className="w-1/3 flex flex-col gap-4">
                                    <div className="h-20 w-full bg-white/20 dark:bg-white/5 rounded-xl"></div>
                                    <div className="h-10 w-full bg-white/20 dark:bg-white/5 rounded-xl"></div>
                                    <div className="h-10 w-full bg-white/20 dark:bg-white/5 rounded-xl"></div>
                                </div>
                                <div className="w-2/3 bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10 p-4 flex flex-col gap-4">
                                    <div className="h-12 w-3/4 bg-blue-500/30 rounded-lg"></div>
                                    <div className="h-8 w-1/2 bg-white/20 dark:bg-white/10 rounded-lg"></div>
                                    <div className="flex-1 w-full bg-gradient-to-br from-brand-neon/30 to-transparent rounded-lg mt-auto backdrop-blur-sm border border-white/10"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Earnings Tag */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-brand-neon font-black text-4xl px-8 py-4 rounded-full border border-brand-neon/30 shadow-2xl z-30 transform group-hover:scale-110 transition-transform duration-500 flex items-center gap-3">
                            <span className="text-white opacity-80">+</span> $4,250
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 relative overflow-hidden bg-page-bg border-y border-page-border">
                {/* Visual Navigation Button */}
                <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:scale-110 transition-transform cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-white/10 group">
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </div>

                <div className="flex gap-8 md:gap-12 overflow-x-auto snap-x snap-mandatory px-6 sm:px-12 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full items-center">

                    {/* Slide 1 */}
                    <div className="flex-none w-[90vw] md:w-[85vw] lg:w-[65vw] snap-center flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="w-full md:w-[280px] lg:w-[320px] aspect-[4/5] md:aspect-[9/16] rounded-3xl overflow-hidden relative shadow-xl flex-shrink-0 group">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Arian" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
                            <div className="absolute top-6 left-6 text-white text-sm font-medium space-y-1">
                                <p className="drop-shadow-md">Zip-Up Short Blouson</p>
                                <p className="drop-shadow-md opacity-80">Bleached Pants</p>
                            </div>
                            <div className="absolute bottom-6 right-6">
                                <svg className="w-6 h-6 text-white filter drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 1.25.29V9.45a6.38 6.38 0 0 0-1.25-.12 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.33 6.37 6.37 0 0 0 4.39-1.78 6.32 6.32 0 0 0 1.95-4.57V8.71a8.21 8.21 0 0 0 3.77 1.57V6.69z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 lg:w-[500px] text-left">
                            <p className="text-2xl sm:text-3xl md:text-3xl lg:text-[2.25rem] font-black leading-[1.2] tracking-tight mb-6">
                                Working with BennyBucks has been amazing. The support and professionalism have been excellent.
                            </p>
                            <p className="text-lg md:text-xl font-bold flex flex-col sm:flex-row sm:gap-2">
                                <span>- Arian Ballate.</span>
                                <span className="text-text-primary/70">Managed by Ellery</span>
                            </p>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="flex-none w-[90vw] md:w-[85vw] lg:w-[75vw] snap-center flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:pl-12">
                        <div className="w-full md:w-[280px] lg:w-[320px] aspect-[4/5] md:aspect-[9/16] rounded-3xl overflow-hidden relative shadow-xl flex-shrink-0 group">
                            <img src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Calli" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

                            <div className="absolute bottom-6 right-6 flex items-center gap-2">
                                <span className="text-white font-semibold text-xs drop-shadow-md">@calli_nguyen</span>
                                <svg className="w-6 h-6 text-white filter drop-shadow-md border border-white rounded-full p-1" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 1.25.29V9.45a6.38 6.38 0 0 0-1.25-.12 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.33 6.37 6.37 0 0 0 4.39-1.78 6.32 6.32 0 0 0 1.95-4.57V8.71a8.21 8.21 0 0 0 3.77 1.57V6.69z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 lg:w-[600px] text-left pr-0 lg:pr-8">
                            <p className="text-[1.5rem] sm:text-2xl md:text-3xl lg:text-[2.25rem] font-black leading-[1.2] tracking-tight mb-6">
                                My talent manager is genuinely my answered prayer, as she makes me feel so seen & understood as an AAPI creator in the industry. BennyBucks has changed my life as a creator & I couldn&apos;t be more grateful.
                            </p>
                            <p className="text-lg md:text-xl font-bold flex flex-col sm:flex-row sm:gap-2">
                                <span>- Calli Nguyen,</span>
                                <span className="text-text-primary/70">Managed by Ellery</span>
                            </p>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="flex-none w-[90vw] md:w-[85vw] lg:w-[75vw] snap-center flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:pl-12">
                        <div className="w-full md:w-[280px] lg:w-[320px] aspect-[4/5] md:aspect-[9/16] rounded-3xl overflow-hidden relative shadow-xl flex-shrink-0 group">
                            <img src="https://images.unsplash.com/photo-1593697972646-2f3488714eb8?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Marcus" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

                            <div className="absolute bottom-6 right-6 flex items-center gap-2">
                                <span className="text-white font-semibold text-xs drop-shadow-md">@marcus_clips</span>
                                <svg className="w-6 h-6 text-white filter drop-shadow-md border border-white rounded-full p-1" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 1.25.29V9.45a6.38 6.38 0 0 0-1.25-.12 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.33 6.37 6.37 0 0 0 4.39-1.78 6.32 6.32 0 0 0 1.95-4.57V8.71a8.21 8.21 0 0 0 3.77 1.57V6.69z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 lg:w-[600px] text-left pr-0 lg:pr-8">
                            <p className="text-[1.5rem] sm:text-2xl md:text-3xl lg:text-[2.25rem] font-black leading-[1.2] tracking-tight mb-6">
                                Since I started clipping and adding my own flavor through BennyBucks, my income has skyrocketed. It&apos;s the perfect side-hustle that turned into a full-time gig.
                            </p>
                            <p className="text-lg md:text-xl font-bold flex flex-col sm:flex-row sm:gap-2">
                                <span>- Marcus T.,</span>
                                <span className="text-text-primary/70">Meme Page Admin</span>
                            </p>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div className="flex-none w-[90vw] md:w-[85vw] lg:w-[75vw] snap-center flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:pl-12">
                        <div className="w-full md:w-[280px] lg:w-[320px] aspect-[4/5] md:aspect-[9/16] rounded-3xl overflow-hidden relative shadow-xl flex-shrink-0 group">
                            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Sarah" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

                            <div className="absolute bottom-6 right-6 flex items-center gap-2">
                                <span className="text-white font-semibold text-xs drop-shadow-md">@sarah_jenkins_music</span>
                                <svg className="w-6 h-6 text-white filter drop-shadow-md border border-white rounded-full p-1" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 1.25.29V9.45a6.38 6.38 0 0 0-1.25-.12 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.33 6.37 6.37 0 0 0 4.39-1.78 6.32 6.32 0 0 0 1.95-4.57V8.71a8.21 8.21 0 0 0 3.77 1.57V6.69z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 lg:w-[600px] text-left pr-0 lg:pr-8">
                            <p className="text-[1.5rem] sm:text-2xl md:text-3xl lg:text-[2.25rem] font-black leading-[1.2] tracking-tight mb-6">
                                Syncing my short videos with the right music trends on BennyBucks has been incredible. The platform makes it so easy to get paid for what I was already doing.
                            </p>
                            <p className="text-lg md:text-xl font-bold flex flex-col sm:flex-row sm:gap-2">
                                <span>- Sarah Jenkins,</span>
                                <span className="text-text-primary/70">Content Creator</span>
                            </p>
                        </div>
                    </div>

                    {/* Add spacer to allow proper scrolling on the right */}
                    <div className="flex-none w-[10vw] snap-center"></div>
                </div>
            </section>

            {/* 3) 4 Ways to Earn */}
            <section className="py-32 px-6 sm:px-12 bg-section-highlight border-y border-page-border overflow-hidden">
                <div className="max-w-[1600px] mx-auto">
                    <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight mb-20 text-center uppercase">
                        4 ways to earn through bennybucks
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* UGC Videos */}
                        <div className="bg-page-surface p-10 rounded-[2.5rem] border border-page-border hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full cursor-default">
                            <div className="w-20 h-20 bg-page-surface-alt rounded-[1.5rem] flex items-center justify-center text-brand-neon mb-8 shadow-inner group-hover:bg-brand-neon group-hover:text-black transition-colors duration-300">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.6 11.6L22 7v10l-6.4-4.6v-1z M4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /></svg>
                            </div>
                            <h3 className="text-3xl font-black mb-4">UGC Videos</h3>
                            <p className="text-lg text-text-primary/70 font-medium leading-relaxed mt-auto">
                                create ugc videos and earn a huge amount
                            </p>
                        </div>

                        {/* Music Videos */}
                        <div className="bg-page-surface p-10 rounded-[2.5rem] border border-page-border hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full cursor-default">
                            <div className="w-20 h-20 bg-page-surface-alt rounded-[1.5rem] flex items-center justify-center text-brand-red mb-8 shadow-inner group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13 M9 9l12-2 M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /></svg>
                            </div>
                            <h3 className="text-3xl font-black mb-4">Music videos</h3>
                            <p className="text-lg text-text-primary/70 font-medium leading-relaxed mt-auto">
                                Syn your videos with the music and earn a lot of money
                            </p>
                        </div>

                        {/* Clipping */}
                        <div className="bg-page-surface p-10 rounded-[2.5rem] border border-page-border hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full cursor-default">
                            <div className="w-20 h-20 bg-page-surface-alt rounded-[1.5rem] flex items-center justify-center text-purple-500 mb-8 shadow-inner group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-3a2 2 0 0 1-2-2V2 M9 18a2 2 0 0 1-2-2 2 2 0 0 1 2-2h4a2 2 0 0 1 2 2 2 2 0 0 1-2 2 M16 22l5-5 M21 21v-4h-4" /></svg>
                            </div>
                            <h3 className="text-3xl font-black mb-4">clipping</h3>
                            <p className="text-lg text-text-primary/70 font-medium leading-relaxed mt-auto">
                                edit page mem pages this is for u guys clip the given content in your style add your flavour and start printing money
                            </p>
                        </div>

                        {/* Logo */}
                        <div className="bg-page-surface p-10 rounded-[2.5rem] border border-page-border hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full cursor-default">
                            <div className="w-20 h-20 bg-page-surface-alt rounded-[1.5rem] flex items-center justify-center text-blue-500 mb-8 shadow-inner group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /></svg>
                            </div>
                            <h3 className="text-3xl font-black mb-4">logo</h3>
                            <p className="text-lg text-text-primary/70 font-medium leading-relaxed mt-auto">
                                create what u love just add given logo in your content u will start creating money with views
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4) FAQ Section */}
            <section className="py-32 px-6 sm:px-12 max-w-[1200px] mx-auto text-center border-b border-page-border">
                <h2 className="text-5xl md:text-[5rem] font-black tracking-tight mb-8">
                    Have Some Doubts?
                </h2>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-text-primary">
                    Don’t worry! We are here to help!
                </h3>
                <div className="max-w-3xl mx-auto space-y-6 mt-12">
                    <p className="text-2xl md:text-3xl font-bold text-text-primary/90">
                        Check out our FAQ page for the answers!
                    </p>
                    <p className="text-xl md:text-2xl font-medium text-text-primary/70 leading-relaxed">
                        Let us make it simpler for you. Check our FAQ section to find answers to the most common queries, or contact our support team for personalized assistance.
                    </p>
                </div>

                <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="bg-text-primary text-page-surface font-black text-xl px-12 py-5 rounded-full hover:bg-text-primary/90 transition-transform hover:scale-105 active:scale-95 uppercase">
                        FAQ PAGE
                    </button>
                    <button className="bg-transparent border-2 border-text-primary/20 text-text-primary font-black text-xl px-12 py-5 rounded-full hover:bg-text-primary/5 transition-transform hover:scale-105 active:scale-95 uppercase">
                        CONTACT SUPPORT
                    </button>
                </div>
            </section>

            <BrandFooter />
        </div>
    );
}
