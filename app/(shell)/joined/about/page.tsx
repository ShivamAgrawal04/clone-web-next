"use client";

import { useState } from "react";
import { Play, Pause, Volume2, Maximize2, Download, Check, Zap, Target } from "lucide-react";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="h-full w-full overflow-y-auto pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full bg-gradient-to-br from-primary/10 to-secondary/5 flex items-center justify-center">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        <div className="relative z-10 px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Rayston Heem Clipping
          </h1>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            Professional video editing and content creation services tailored for your unique vision.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-16">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: About & Stats */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
                About Our Brand
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  Rayston Heem Clipping is a premier content creation platform 
                  specializing in high-quality video editing, clipping, and 
                  digital content production. We help creators and businesses 
                  transform their ideas into engaging visual stories.
                </p>
                <p>
                  With years of experience in the industry, our team combines 
                  technical expertise with creative vision to deliver content that 
                  captivates audiences and drives results.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group bg-muted/30 hover:bg-muted/50 border border-border/50 rounded-xl p-6 text-center transition-colors">
                <div className="text-3xl font-bold text-foreground mb-1 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="group bg-muted/30 hover:bg-muted/50 border border-border/50 rounded-xl p-6 text-center transition-colors">
                <div className="text-3xl font-bold text-foreground mb-1 group-hover:scale-110 transition-transform duration-300">50K+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Column: Video Showcase */}
          <div className="space-y-6">
             <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
                Featured Work
             </h2>
             
             {/* Custom Video Player Wrapper */}
             <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80" 
                  alt="Video Thumbnail"
                  className={`w-full h-full object-cover opacity-80 transition-opacity duration-500 ${isPlaying ? 'opacity-40' : 'opacity-80'}`}
                />
                
                {/* Overlay Controls */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group-hover:bg-primary/90 group-hover:text-white"
                  >
                     {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                  </button>
                </div>

                {/* Bottom Bar placeholder */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-medium">01:24 / 03:45</span>
                    <div className="flex gap-3">
                        <Volume2 size={18} className="cursor-pointer hover:text-white" />
                        <Maximize2 size={18} className="cursor-pointer hover:text-white" />
                    </div>
                </div>
             </div>

             <div className="bg-muted/20 rounded-xl p-5 border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-2">Sample Project Showcase</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Experience the quality and creativity that defines our work. 
                  This demonstration video showcases our editing capabilities.
                </p>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium text-sm">
                  <Download size={16} />
                  Download Portfolio
                </button>
             </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="pt-10 border-t border-border/40">
           <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Check className="text-white" size={24} />}
              color="bg-green-500"
              title="Quality First"
              desc="We never compromise on quality. Every project is delivered with precision and attention to detail."
            />
             <FeatureCard 
              icon={<Zap className="text-white" size={24} />}
              color="bg-blue-500"
              title="Fast Delivery"
              desc="Quick turnaround times without sacrificing quality. We understand the importance of meeting deadlines."
            />
             <FeatureCard 
              icon={<Target className="text-white" size={24} />}
              color="bg-purple-500"
              title="Target Results"
              desc="Strategic approach to content that drives engagement and meets your specific goals."
            />
          </div>
        </div>

      </div>
    </div>
  );
}

function FeatureCard({ icon, color, title, desc }: { icon: React.ReactNode, color: string, title: string, desc: string }) {
    return (
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/20 hover:bg-muted/40 border border-transparent hover:border-border/50 transition-all duration-300">
            <div className={`h-12 w-12 rounded-xl ${color} shadow-lg flex items-center justify-center mb-5 transform transition-transform hover:rotate-6`}>
                {icon}
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
            </p>
        </div>
    )
}