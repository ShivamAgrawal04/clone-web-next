"use client";

import { Bell, Volume2, Play } from "lucide-react";
import { useState } from "react";
import { playSound } from "@/lib/sounds";

export default function NotificationsSettingsPage() {
    const [popupEnabled, setPopupEnabled] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('popup-notifications-enabled');
            return saved !== null ? saved === 'true' : true;
        }
        return true;
    });

    const [soundEnabled, setSoundEnabled] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('sound-effects-enabled');
            return saved !== null ? saved === 'true' : true;
        }
        return true;
    });

    const togglePopup = () => {
        const newValue = !popupEnabled;
        setPopupEnabled(newValue);
        localStorage.setItem('popup-notifications-enabled', String(newValue));
    };

    const toggleSound = () => {
        const newValue = !soundEnabled;
        setSoundEnabled(newValue);
        localStorage.setItem('sound-effects-enabled', String(newValue));
    };

    const handleTestSound = (type: 'message' | 'notification') => {
        playSound(type);
    };

    return (
        <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-center mb-12">
                    <h1 className="text-2xl font-bold">Notifications</h1>
                </div>

                {/* Notification Options */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-6 bg-muted/20 border border-border rounded-[28px] hover:bg-muted/30 transition-colors group">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                                <Bell size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Pop-up notifications</h3>
                                <p className="text-sm text-muted-foreground">Receive pop-up notifications for activity in Whops you&apos;ve joined</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => handleTestSound('notification')}
                                className="p-2 bg-muted hover:bg-muted/80 rounded-xl text-muted-foreground hover:text-foreground transition-all"
                                title="Test notification sound"
                            >
                                <Play size={16} fill="currentColor" />
                            </button>
                            <div
                                onClick={togglePopup}
                                className={`w-12 h-6 rounded-full relative cursor-pointer font-bold transition-all duration-200 ${popupEnabled ? 'bg-blue-600' : 'bg-muted'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 ${popupEnabled ? 'right-1' : 'left-1'}`} />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-muted/20 border border-border rounded-[28px] hover:bg-muted/30 transition-colors group">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                                <Volume2 size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Sound effects</h3>
                                <p className="text-sm text-muted-foreground">Enhance platform interactions with sound effects.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => handleTestSound('message')}
                                className="p-2 bg-muted hover:bg-muted/80 rounded-xl text-muted-foreground hover:text-foreground transition-all"
                                title="Test message sound"
                            >
                                <Play size={16} fill="currentColor" />
                            </button>
                            <div
                                onClick={toggleSound}
                                className={`w-12 h-6 rounded-full relative cursor-pointer font-bold transition-all duration-200 ${soundEnabled ? 'bg-blue-600' : 'bg-muted'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 ${soundEnabled ? 'right-1' : 'left-1'}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
