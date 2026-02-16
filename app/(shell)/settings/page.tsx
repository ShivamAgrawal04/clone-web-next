"use client";

import React, { useState } from "react";
import {
    UserRound,
    ShieldCheck,
    ShoppingBag,
    Bell,
    CreditCard,
    Wallet,
    LifeBuoy,
    LogOut,
    Camera,
    MapPin,
    Store,
    Users,
    Smartphone,
    Mail,
    CheckCircle2,
    MonitorSmartphone
} from "lucide-react";
import { BadgeDollarIcon } from "@/components/BadgeDollarIcon";
import BalancePage from "../balance/page";
import Image from "next/image";

type SettingsTab =
    | "edit_profile"
    | "security"
    | "orders"
    | "notifications"
    | "payments"
    | "balance"
    | "resolution";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<SettingsTab>("edit_profile");

    const [name, setName] = useState("shiv");
    const [username, setUsername] = useState("shivag04");
    const [bio, setBio] = useState("");

    const [showEarned, setShowEarned] = useState(true);
    const [showLocation, setShowLocation] = useState(true);
    const [showOwned, setShowOwned] = useState(true);
    const [showJoined, setShowJoined] = useState(true);

    const sidebarItems = [
        { id: "edit_profile", label: "Edit profile", icon: UserRound },
        { id: "security", label: "Account security", icon: ShieldCheck },
        // { id: "orders", label: "Orders", icon: ShoppingBag },
        { id: "notifications", label: "Notifications", icon: Bell },
        // { id: "payments", label: "Payment methods", icon: CreditCard },
        { id: "balance", label: "Balance", icon: BadgeDollarIcon },
        { id: "resolution", label: "Resolution center", icon: LifeBuoy },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "edit_profile":
                return (
                    <div className="max-w-2xl mx-auto py-8 px-6 space-y-8">
                        <h2 className="text-2xl font-bold text-center">Edit profile</h2>

                        {/* Banner & Avatar */}
                        <div className="relative">
                            <div className="w-full h-48 bg-muted rounded-2xl"></div>
                            <div className="absolute -bottom-10 left-20 -translate-x-1/2">
                                <div className="relative w-24 h-24 rounded-full border-4 border-background overflow-hidden bg-orange-600 flex items-center justify-center shadow-lg">
                                    <Image
                                        src="https://raw.githubusercontent.com/shivag04/assets/main/avatar.png"
                                        alt="Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                                        <Camera size={24} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-12 space-y-6">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value.slice(0, 100))}
                                        className="w-full h-12 px-4 bg-muted/30 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground">{name.length}/100</span>
                                </div>
                            </div>

                            {/* Username Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Username</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value.slice(0, 42))}
                                        className="w-full h-12 px-4 bg-muted/30 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground">{username.length}/42</span>
                                </div>
                            </div>

                            {/* Bio Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Bio</label>
                                <div className="relative">
                                    <textarea
                                        placeholder="No bio"
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value.slice(0, 200))}
                                        className="w-full h-32 p-4 bg-muted/30 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                                    />
                                    <span className="absolute right-3 bottom-3 text-[10px] text-muted-foreground">{bio.length}/200</span>
                                </div>
                            </div>

                            {/* More details */}
                            <div className="space-y-4 pt-4 border-t border-border">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold">More details</h3>
                                    <p className="text-sm text-muted-foreground">Choose what appears on your profile and other discovery surfaces.</p>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-center justify-between py-2">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-muted/50 rounded-lg"><Wallet size={18} className="text-muted-foreground" /></div>
                                            <span className="text-sm font-medium">Total earned</span>
                                        </div>
                                        <Toggle checked={showEarned} onChange={setShowEarned} />
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-muted/50 rounded-lg"><MapPin size={18} className="text-muted-foreground" /></div>
                                            <span className="text-sm font-medium">Location</span>
                                        </div>
                                        <Toggle checked={showLocation} onChange={setShowLocation} />
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-muted/50 rounded-lg"><Store size={18} className="text-muted-foreground" /></div>
                                            <span className="text-sm font-medium">Owned whops</span>
                                        </div>
                                        <Toggle checked={showOwned} onChange={setShowOwned} />
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-muted/50 rounded-lg"><Users size={18} className="text-muted-foreground" /></div>
                                            <span className="text-sm font-medium">Joined whops</span>
                                        </div>
                                        <Toggle checked={showJoined} onChange={setShowJoined} />
                                    </div>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="space-y-4 pt-4 border-t border-border">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold">Social links</h3>
                                    <p className="text-sm text-muted-foreground">Connect your other accounts to let people know where to find you.</p>
                                </div>
                                <div className="flex items-center gap-4 py-2">
                                    <span className="text-sm font-medium">Add:</span>
                                    <div className="flex gap-4">
                                        {/* Using mock social icons */}
                                        {['x', 'instagram', 'discord', 'telegram', 'twitch', 'youtube', 'tiktok'].map(s => (
                                            <div key={s} className="w-6 h-6 bg-muted-foreground/20 rounded-full cursor-pointer hover:bg-muted-foreground/40" title={s}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "security":
                return (
                    <div className="max-w-4xl mx-auto py-8 px-6 space-y-12">
                        <h2 className="text-2xl font-bold">Account security</h2>

                        {/* Email & Phone */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-muted/20 border border-border p-4 rounded-xl">
                                <Mail className="text-muted-foreground w-5 h-5" />
                                <div className="flex-1 font-medium text-sm">en23ca503169@medicaps.ac.in</div>
                                <button className="px-4 py-1.5 text-xs font-bold border border-border rounded-lg hover:bg-muted/50 transition-colors">
                                    Change
                                </button>
                            </div>

                            <div className="flex items-center gap-4 bg-muted/20 border border-border p-4 rounded-xl">
                                <Smartphone className="text-muted-foreground w-5 h-5" />
                                <input
                                    type="tel"
                                    placeholder="Add phone number"
                                    className="flex-1 bg-transparent border-none text-sm focus:outline-none placeholder:text-muted-foreground"
                                />
                                <button className="px-4 py-1.5 text-xs font-bold border border-border rounded-lg hover:bg-muted/50 transition-colors">
                                    Add
                                </button>
                            </div>
                        </div>

                        {/* Two-factor authentication */}
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="font-semibold">Two-factor authentication</h3>
                                <p className="text-sm text-muted-foreground">Secure your account by requiring a verification code when signing in.</p>
                            </div>

                            <div className="space-y-3">
                                <div className="border border-blue-600 bg-blue-600/5 p-4 rounded-xl flex items-start gap-3 cursor-pointer relative overflow-hidden">
                                    <div className="mt-1">
                                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Authenticator App (recommended)</h4>
                                        <p className="text-xs text-muted-foreground">Receive a code via an authenticator app.</p>
                                    </div>
                                </div>

                                <div className="border border-border hover:border-muted-foreground/50 p-4 rounded-xl flex items-start gap-3 cursor-pointer transition-colors">
                                    <div className="mt-1">
                                        <div className="w-5 h-5 border-2 border-muted-foreground rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Text message</h4>
                                        <p className="text-xs text-muted-foreground">Receive a code via SMS.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-2">
                                <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20">
                                    Enable two-factor authentication
                                </button>
                            </div>
                        </div>

                        {/* Connected apps */}
                        <div className="space-y-4 pt-8 border-t border-border">
                            <div className="space-y-1">
                                <h3 className="font-semibold">Connected apps</h3>
                                <p className="text-sm text-muted-foreground">Manage apps that can access your account.</p>
                            </div>

                            <div className="h-40 bg-muted/10 border border-border rounded-xl flex flex-col items-center justify-center space-y-2">
                                <MonitorSmartphone className="w-8 h-8 text-muted-foreground/50" />
                                <div className="text-center">
                                    <h4 className="font-bold text-sm">No connected apps</h4>
                                    <p className="text-xs text-muted-foreground">When you authorize an app, it will show up here.</p>
                                </div>
                            </div>
                        </div>

                        {/* Danger zone */}
                        <div className="space-y-4 pt-8 border-t border-border">
                            <h3 className="font-semibold text-red-500">Danger zone</h3>
                            <button className="px-4 py-2 text-xs font-bold text-red-500 border border-red-500/30 hover:bg-red-500/10 rounded-lg transition-colors">
                                Delete account
                            </button>
                        </div>
                    </div>
                );
            case "notifications":
                return (
                    <div className="max-w-2xl mx-auto py-8 px-6 space-y-8 text-center">
                        <h2 className="text-2xl font-bold">Notifications</h2>
                        <div className="space-y-4">
                            <div className="bg-card border border-border p-5 rounded-xl flex items-center justify-between">
                                <div className="flex items-center gap-4 text-left">
                                    <div className="p-3 bg-muted rounded-xl"><Bell size={24} className="text-muted-foreground" /></div>
                                    <div>
                                        <h4 className="font-semibold text-sm">Pop-up notifications</h4>
                                        <p className="text-xs text-muted-foreground">Receive pop-up notifications for activity in Whops you&apos;ve joined</p>
                                    </div>
                                </div>
                                <Toggle checked={true} onChange={() => { }} />
                            </div>
                            <div className="bg-card border border-border p-5 rounded-xl flex items-center justify-between">
                                <div className="flex items-center gap-4 text-left">
                                    <div className="p-3 bg-muted rounded-xl text-muted-foreground">🔊</div>
                                    <div>
                                        <h4 className="font-semibold text-sm">Sound effects</h4>
                                        <p className="text-xs text-muted-foreground">Enhance platform interactions with sound effects.</p>
                                    </div>
                                </div>
                                <Toggle checked={true} onChange={() => { }} />
                            </div>
                        </div>
                    </div>
                );
            case "balance":
                return <BalancePage isSettingsView={true} />;
            case "resolution":
                return (
                    <div className="max-w-4xl mx-auto py-8 px-6 space-y-8">
                        <h2 className="text-2xl font-bold">Resolution center</h2>
                        <div className="border border-border rounded-2xl">
                            <div className="grid grid-cols-7 gap-4 px-6 py-4 text-[10px] font-bold text-muted-foreground border-b border-border bg-muted/20">
                                <span>Reason</span>
                                <span>Status</span>
                                <span>Product</span>
                                <span>Amount</span>
                                <span>Opened on</span>
                                <span>Due date</span>
                                <span>Closed on</span>
                            </div>
                            <div className="flex flex-col items-center justify-center py-24 space-y-4">
                                <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center border border-border">
                                    <span className="text-3xl text-muted-foreground">😊</span>
                                </div>
                                <div className="text-center">
                                    <h3 className="font-bold">No resolution cases yet</h3>
                                    <p className="text-sm text-muted-foreground max-w-xs">When you report an issue with a Whop membership, it will be listed here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center justify-center h-full text-muted-foreground italic">
                        Component for {activeTab} is under development
                    </div>
                );
        }
    };

    return (
        <div className="flex h-screen bg-background overflow-hidden border-t border-border">
            {/* Settings Sidebar */}
            <div className="w-64 border-r border-border h-full flex flex-col bg-card/10">
                <div className="p-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Account settings
                </div>
                <nav className="flex-1 px-3 space-y-1">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon;
                        const active = activeTab === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id as SettingsTab)}
                                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                  ${active
                                        ? "bg-muted text-foreground font-semibold"
                                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"}
                `}
                            >
                                <Icon size={20} className={active ? "text-foreground" : "text-muted-foreground"} />
                                <span className="text-sm">{item.label}</span>
                            </button>
                        );
                    })}
                </nav>
                <div className="p-4 border-t border-border">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors">
                        <LogOut size={20} />
                        <span className="text-sm font-semibold">Log out</span>
                    </button>
                </div>
            </div>

            {/* Settings Content */}
            <div className="flex-1 h-full overflow-y-auto relative">
                <div className="sticky top-0 right-0 p-6 flex justify-end z-10 pointer-events-none">
                    <button className="h-10 px-6 bg-muted border border-border text-muted-foreground font-bold rounded-xl pointer-events-auto opacity-50 cursor-not-allowed">
                        Save changes
                    </button>
                </div>
                {renderContent()}
            </div>
        </div>
    );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
    return (
        <button
            onClick={() => onChange(!checked)}
            className={`
        relative w-11 h-6 rounded-full transition-colors duration-200
        ${checked ? "bg-blue-600" : "bg-muted"}
      `}
        >
            <div className={`
        absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200
        ${checked ? "translate-x-5" : "translate-x-0"}
      `} />
        </button>
    );
}
