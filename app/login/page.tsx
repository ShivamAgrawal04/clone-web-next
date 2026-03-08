"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Camera, ChevronLeft, Eye, EyeOff } from "lucide-react";

const Logo = () => (
    <div className="flex items-center justify-center mb-6 relative z-10 animate-in fade-in slide-in-from-top-4 duration-500">
        <svg width="60" height="40" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-red">
            <path d="M2 2L12 28L24 10L36 28L46 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

const MOCK_DB = {
    users: [
        { email: "test@example.com", username: "testuser" },
        { email: "admin@bennybucks.in", username: "admin" },
        { email: "creator@gmail.com", username: "creator123" }
    ]
};

type StepType = "email" | "login_password" | "otp" | "name" | "username" | "dob" | "profile_image" | "password";

export default function LoginPage() {
    const [step, setStep] = useState<StepType>("email");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [dob, setDob] = useState("");
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const goNext = (nextStep: StepType) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep(nextStep);
        }, 600);
    };

    const goBack = () => {
        const history: Record<StepType, StepType> = {
            "login_password": "email",
            "otp": "email",
            "name": "otp",
            "username": "name",
            "dob": "username",
            "profile_image": "dob",
            "password": "profile_image",
            "email": "email"
        };
        setStep(history[step]);
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        // Map API call to check if user exists based on email
        setTimeout(() => {
            setIsLoading(false);
            // Checking against mock data for demonstration
            const userExists = MOCK_DB.users.some(u => u.email.toLowerCase() === email.trim().toLowerCase());

            if (userExists) {
                setStep("login_password");
            } else {
                // Simulate generating an OTP server-side
                const mockGeneratedOTP = Math.floor(100000 + Math.random() * 900000).toString();
                console.warn(`🚨 [BennyBucks System] 📧 Sent OTP to ${email}: ${mockGeneratedOTP}`);
                alert(`[TESTING] Your mock OTP code is: ${mockGeneratedOTP}`);
                setStep("otp");
            }
        }, 600);
    };

    const handleLoginPasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!password) return;
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push("/discover");
        }, 800);
    };

    const handleOtpChange = (index: number, value: string) => {
        // Handle pasted string
        if (value.length > 1) {
            const pastedData = value.replace(/\D/g, "").split("").slice(0, 6);
            const newOtp = [...otp];
            pastedData.forEach((char, i) => {
                if (i < 6) newOtp[i] = char;
            });

            setOtp(newOtp);
            // Auto focus last filled
            const nextIndex = Math.min(pastedData.length, 5);
            document.getElementById(`otp-${nextIndex}`)?.focus();
            return;
        }

        // Handle single digit
        const digit = value.replace(/\D/g, "");
        const newOtp = [...otp];
        newOtp[index] = digit;
        setOtp(newOtp);

        if (digit !== "" && index < 5) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }
    };

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            document.getElementById(`otp-${index - 1}`)?.focus();
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setProfileImage(url);
        }
    };

    const handleSignupPasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) return;
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            // Redirect to discover page upon successful sign up
            router.push("/discover");
        }, 800);
    };

    return (
        <div className="min-h-screen bg-page-surface-alt flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Decor */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-red/10 via-page-surface-alt to-page-surface-alt pointer-events-none"></div>

            <Logo />

            <div className="w-full max-w-[420px] bg-page-bg border border-page-border shadow-2xl rounded-[2rem] p-8 md:p-10 relative z-10 min-h-[450px] flex flex-col justify-center">

                {step !== "email" && (
                    <button
                        onClick={goBack}
                        className="absolute top-8 left-8 text-text-primary/40 hover:text-text-primary transition-colors flex items-center justify-center bg-transparent z-20"
                        title="Go back"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                )}

                {/* Email Step */}
                {step === "email" && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <h1 className="text-2xl font-bold text-center text-text-primary mb-8 tracking-tight">
                            Log in or sign up
                        </h1>
                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    required
                                    autoFocus
                                    className="w-full bg-transparent border border-page-border focus:border-[#1754d8] rounded-xl px-4 py-3 text-text-primary placeholder:text-text-primary/20 outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(23,84,216,0.2)] text-lg"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || !email}
                                className="w-full bg-[#1754d8] hover:bg-[#1240a6] text-white font-bold text-lg rounded-xl py-3 mt-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center h-[52px]"
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                ) : "Continue with Email"}
                            </button>
                        </form>

                        <div className="relative flex items-center py-6">
                            <div className="flex-grow border-t border-page-border"></div>
                            <span className="flex-shrink-0 mx-4 text-text-primary/30 text-xs font-bold uppercase tracking-wider">OR</span>
                            <div className="flex-grow border-t border-page-border"></div>
                        </div>

                        <button className="w-full bg-white hover:bg-white/90 text-black font-semibold rounded-xl py-3 flex items-center justify-center gap-3 transition-colors h-[52px] text-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                )}

                {/* Login Password Step (Existing User) */}
                {step === "login_password" && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="flex justify-center mb-6">
                            <div className="px-4 py-2 rounded-full bg-text-primary/5 border border-page-border text-text-primary/80 text-sm flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#1754d8]"></div>
                                {email}
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-center text-text-primary mb-2 pt-2">Welcome back</h1>
                        <p className="text-sm text-center text-text-primary/60 mb-8">Enter your password to sign in to your account.</p>

                        <form onSubmit={handleLoginPasswordSubmit} className="space-y-4">
                            <div className="space-y-2 relative">
                                <label className="text-sm font-medium text-text-primary/60 pl-1">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                        autoFocus
                                        className="w-full bg-transparent border border-page-border focus:border-[#1754d8] rounded-xl px-4 py-3 pr-12 text-text-primary outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(23,84,216,0.2)] text-lg tracking-widest"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-primary/40 hover:text-text-primary transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <button type="button" className="text-xs text-[#1754d8] hover:text-[#1240a6] font-medium transition-colors">
                                    Forgot password?
                                </button>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || !password}
                                className="w-full bg-[#1754d8] hover:bg-[#1240a6] text-white font-bold text-lg rounded-xl py-3 mt-4 transition-all disabled:opacity-50 flex items-center justify-center h-[52px]"
                            >
                                {isLoading ? <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" /> : "Sign In"}
                            </button>
                        </form>
                    </div>
                )}

                {/* OTP Step (New User) */}
                {step === "otp" && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <h1 className="text-2xl font-bold text-text-primary mb-6 pt-2">Check your email</h1>

                        <div className="text-sm text-text-primary/70 mb-8 space-y-4">
                            <p>Hi there,</p>
                            <p>Enter the 6-digit code we sent to your email to confirm your new address. This code expires in 30 minutes.</p>
                            <p className="font-medium text-[#1754d8]">Your new email address will be {email}</p>
                            <p className="text-xs text-text-primary/40">If you didn&apos;t request this change, contact support here.</p>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); if (otp.join("").length === 6) goNext("name"); }} className="space-y-6">
                            <div className="flex justify-between gap-1 sm:gap-2">
                                {otp.map((digit, i) => (
                                    <input
                                        key={i}
                                        id={`otp-${i}`}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(i, e.target.value)}
                                        onKeyDown={(e) => handleOtpKeyDown(i, e)}
                                        className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold bg-transparent border border-page-border focus:border-[#1754d8] rounded-xl text-text-primary outline-none transition-all focus:shadow-[0_0_15px_rgba(23,84,216,0.2)]"
                                    />
                                ))}
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || otp.join("").length !== 6}
                                className="w-full bg-[#1754d8] hover:bg-[#1240a6] text-white font-bold text-lg rounded-xl py-3 mt-4 transition-all disabled:opacity-50 flex items-center justify-center h-[52px]"
                            >
                                {isLoading ? <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" /> : "Verify Code"}
                            </button>
                        </form>
                    </div>
                )}

                {/* Name Step */}
                {step === "name" && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <h1 className="text-2xl font-bold text-text-primary mb-2 pt-2">What&apos;s your name?</h1>
                        <p className="text-sm text-text-primary/60 mb-8">This will show on your profile and help others know who you are 💅</p>

                        <form onSubmit={(e) => { e.preventDefault(); if (name) goNext("username"); }} className="space-y-4">
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Appleseed"
                                    required
                                    autoFocus
                                    className="w-full bg-transparent border border-page-border focus:border-[#1754d8] rounded-xl px-4 py-3 text-text-primary placeholder:text-text-primary/20 outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(23,84,216,0.2)] text-lg font-medium"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || !name.trim()}
                                className="w-full bg-[#1754d8] hover:bg-[#1240a6] text-white font-bold text-lg rounded-xl py-3 mt-4 transition-all disabled:opacity-50 flex items-center justify-center h-[52px]"
                            >
                                {isLoading ? <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" /> : "Continue"}
                            </button>
                        </form>
                    </div>
                )}

                {/* Username Step */}
                {step === "username" && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <h1 className="text-2xl font-bold text-text-primary mb-2 pt-2">Pick your username</h1>
                        <p className="text-sm text-text-primary/60 mb-8">It&apos;s like claiming your Instagram handle in 2012 ⚡️</p>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            if (username) {
                                setIsLoading(true);
                                setTimeout(() => {
                                    setIsLoading(false);
                                    const usernameTaken = MOCK_DB.users.some(u => u.username.toLowerCase() === username.toLowerCase());
                                    if (usernameTaken) {
                                        setUsernameError("This username is already taken");
                                    } else {
                                        setUsernameError("");
                                        setStep("dob");
                                    }
                                }, 600);
                            }
                        }} className="space-y-4">
                            <div className="relative flex items-center">
                                <span className="absolute left-4 text-text-primary/50 font-medium">bennybucks.in/@</span>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value.replace(/[^a-zA-Z0-9_]/g, '').toLowerCase());
                                        setUsernameError("");
                                    }}
                                    placeholder="username"
                                    required
                                    autoFocus
                                    className={`w-full bg-transparent border rounded-xl pl-[138px] pr-4 py-3 text-text-primary placeholder:text-text-primary/20 outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(23,84,216,0.2)] text-lg font-medium ${usernameError ? 'border-brand-red focus:border-brand-red' : 'border-page-border focus:border-[#1754d8]'}`}
                                />
                            </div>
                            {usernameError && (
                                <p className="text-xs text-brand-red pl-1 font-medium">{usernameError}</p>
                            )}
                            <button
                                type="submit"
                                disabled={isLoading || username.length < 3}
                                className="w-full bg-[#1754d8] hover:bg-[#1240a6] text-white font-bold text-lg rounded-xl py-3 mt-4 transition-all disabled:opacity-50 flex items-center justify-center h-[52px]"
                            >
                                {isLoading ? <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" /> : "Continue"}
                            </button>
                        </form>
                    </div>
                )}

                {/* DOB Step */}
                {step === "dob" && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <h1 className="text-2xl font-bold text-text-primary mb-2 pt-2">What&apos;s your date of birth?</h1>
                        <p className="text-sm text-text-primary/60 mb-8">We use this to verify your age and secure your account.</p>

                        <form onSubmit={(e) => { e.preventDefault(); if (dob) goNext("profile_image"); }} className="space-y-4">
                            <div className="space-y-2">
                                <input
                                    type="date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    required
                                    className="w-full bg-transparent border border-page-border focus:border-[#1754d8] rounded-xl px-4 py-3 text-text-primary outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(23,84,216,0.2)] text-lg font-medium [color-scheme:dark]"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || !dob}
                                className="w-full bg-[#1754d8] hover:bg-[#1240a6] text-white font-bold text-lg rounded-xl py-3 mt-4 transition-all disabled:opacity-50 flex items-center justify-center h-[52px]"
                            >
                                {isLoading ? <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" /> : "Continue"}
                            </button>
                        </form>
                    </div>
                )}

                {/* Profile Image Step */}
                {step === "profile_image" && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <h1 className="text-2xl font-bold text-center text-text-primary mb-2 pt-2">Choose your profile image</h1>
                        <p className="text-sm text-center text-text-primary/60 mb-8">Upload a picture to make your profile stand out.</p>

                        <form onSubmit={(e) => { e.preventDefault(); goNext("password"); }} className="space-y-8">
                            <div className="flex justify-center">
                                <div className="relative group cursor-pointer">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="profile-upload"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                    <label htmlFor="profile-upload" className="block w-32 h-32 rounded-[2rem] border-2 border-dashed border-page-border group-hover:border-[#1754d8] overflow-hidden flex items-center justify-center bg-text-primary/5 transition-all cursor-pointer relative z-10">
                                        {profileImage ? (
                                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <Camera className="w-10 h-10 text-text-primary/40 group-hover:text-[#1754d8] transition-colors" />
                                        )}
                                    </label>
                                    <div className="absolute inset-0 bg-black/40 rounded-[2rem] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                                        <Camera className="w-10 h-10 text-white" />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#1754d8] hover:bg-[#1240a6] text-white font-bold text-lg rounded-xl py-3 mt-4 transition-all disabled:opacity-50 flex items-center justify-center h-[52px]"
                            >
                                {isLoading ? <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" /> : (profileImage ? "Continue" : "Skip for now")}
                            </button>
                        </form>
                    </div>
                )}

                {/* Signup Password Step */}
                {step === "password" && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <h1 className="text-2xl font-bold text-text-primary mb-2 pt-2">Create a password</h1>
                        <p className="text-sm text-text-primary/60 mb-8">Secure your account with a strong password.</p>

                        <form onSubmit={handleSignupPasswordSubmit} className="space-y-4">
                            <div className="space-y-2 relative">
                                <label className="text-sm font-medium text-text-primary/60 pl-1">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                        autoFocus
                                        className="w-full bg-transparent border border-page-border focus:border-[#1754d8] rounded-xl px-4 py-3 pr-12 text-text-primary outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(23,84,216,0.2)] text-lg tracking-widest"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-primary/40 hover:text-text-primary transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2 relative">
                                <label className="text-sm font-medium text-text-primary/60 pl-1">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                        className={`w-full bg-transparent border rounded-xl px-4 py-3 pr-12 text-text-primary outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(23,84,216,0.2)] text-lg tracking-widest ${confirmPassword && password !== confirmPassword
                                            ? 'border-brand-red focus:border-brand-red'
                                            : 'border-page-border focus:border-[#1754d8]'
                                            }`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-primary/40 hover:text-text-primary transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                {confirmPassword && password !== confirmPassword && (
                                    <p className="text-xs text-brand-red pl-1 font-medium select-none">Passwords do not match</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || !password || password !== confirmPassword}
                                className="w-full bg-[#1754d8] hover:bg-[#1240a6] text-white font-bold text-lg rounded-xl py-3 mt-4 transition-all disabled:opacity-50 flex items-center justify-center h-[52px]"
                            >
                                {isLoading ? <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" /> : "Complete Setup"}
                            </button>
                        </form>
                    </div>
                )}

                {step === "email" && (
                    <div className="mt-8 text-center animate-in fade-in duration-500 delay-300">
                        <p className="text-xs text-text-primary/40 leading-relaxed font-medium">
                            By continuing, you agree to BennyBucks&apos;s <br />
                            <Link href="#" className="underline hover:text-text-primary transition-colors">Terms of Service</Link> and <Link href="#" className="underline hover:text-text-primary transition-colors">Privacy Policy</Link>.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
