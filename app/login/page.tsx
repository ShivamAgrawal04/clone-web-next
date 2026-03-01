"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => (
    <div className="flex items-center justify-center mb-6">
        <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#e5383b]">
            <path d="M2 2L12 28L24 10L36 28L46 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

export default function LoginPage() {
    const [step, setStep] = useState<"email" | "login" | "signup">("email");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        // Simulate an API call to check if user exists
        setTimeout(() => {
            setIsLoading(false);
            // Just for demo purposes: if email includes 'new', go to signup, else login
            if (email.toLowerCase().includes("new")) {
                setStep("signup");
            } else {
                setStep("login");
            }
        }, 600);
    };

    const handleFinalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate auth process
        setTimeout(() => {
            setIsLoading(false);
            router.push("/brand-campaign");
        }, 800);
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Decor */}
            <img
                src="/login-bg.svg"
                alt="Background Pattern"
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            />

            <div className="w-full max-w-[420px] bg-[#0f0f0f] border border-white/5 shadow-2xl rounded-[2rem] p-8 md:p-10 relative z-10">

                {step !== "email" && (
                    <button
                        onClick={() => setStep("email")}
                        className="absolute top-8 left-8 text-white/40 hover:text-white transition-colors"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                )}

                <Logo />

                <h1 className="text-2xl font-bold text-center text-white mb-8 tracking-tight">
                    {step === "email" && "Enter your email"}
                    {step === "login" && "Welcome back"}
                    {step === "signup" && "Create your account"}
                </h1>

                {/* Email Step */}
                {step === "email" && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60 pl-1">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="johnappleseed@gmail.com"
                                    required
                                    className="w-full bg-transparent border border-white/20 focus:border-[#ccff00] rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(204,255,0,0.1)]"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || !email}
                                className="w-full bg-[#ccff00] hover:bg-[#bbe600] text-black font-bold text-lg rounded-xl py-3 mt-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                ) : "Continue"}
                            </button>
                        </form>

                        <div className="relative flex items-center py-6">
                            <div className="flex-grow border-t border-white/10"></div>
                            <span className="flex-shrink-0 mx-4 text-white/30 text-xs font-bold uppercase tracking-wider">OR</span>
                            <div className="flex-grow border-t border-white/10"></div>
                        </div>

                        <button className="w-full bg-white hover:bg-white/90 text-black font-semibold rounded-xl py-3 flex items-center justify-center gap-3 transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                )}

                {/* Login Step */}
                {step === "login" && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="flex justify-center mb-6">
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#ccff00]"></div>
                                {email}
                            </div>
                        </div>
                        <form onSubmit={handleFinalSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60 pl-1">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full bg-transparent border border-white/20 focus:border-[#ccff00] rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(204,255,0,0.1)]"
                                />
                            </div>
                            <div className="flex justify-start">
                                <button type="button" className="text-xs text-[#ccff00] hover:text-[#bbe600] font-medium transition-colors">
                                    Forgot password?
                                </button>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || !password}
                                className="w-full bg-[#ccff00] hover:bg-[#bbe600] text-black font-bold text-lg rounded-xl py-3 mt-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                ) : "Sign In"}
                            </button>
                        </form>
                    </div>
                )}

                {/* Signup Step */}
                {step === "signup" && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="flex justify-center mb-6">
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#e5383b]"></div>
                                {email}
                            </div>
                        </div>
                        <form onSubmit={handleFinalSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60 pl-1">Full Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Appleseed"
                                    required
                                    className="w-full bg-transparent border border-white/20 focus:border-[#ccff00] rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(204,255,0,0.1)]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60 pl-1">Choose a Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Create a secure password"
                                    required
                                    className="w-full bg-transparent border border-white/20 focus:border-[#ccff00] rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(204,255,0,0.1)]"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || !password || !name}
                                className="w-full bg-[#ccff00] hover:bg-[#bbe600] text-black font-bold text-lg rounded-xl py-3 mt-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                ) : "Sign Up"}
                            </button>
                        </form>
                    </div>
                )}

                <div className="mt-8 text-center">
                    <p className="text-xs text-white/40 leading-relaxed font-medium">
                        By continuing, you agree to BennyBucks&apos;s <br />
                        <Link href="#" className="underline hover:text-white transition-colors">Terms of Service</Link> and <Link href="#" className="underline hover:text-white transition-colors">Privacy Policy</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
