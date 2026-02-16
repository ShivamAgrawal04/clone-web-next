import { Bell, Volume2 } from "lucide-react";

export default function NotificationsSettingsPage() {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-center mb-12">
                    <h1 className="text-2xl font-bold">Notifications</h1>
                </div>

                {/* Notification Options */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-[28px] hover:bg-zinc-900/60 transition-colors group">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                                <Bell size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Pop-up notifications</h3>
                                <p className="text-sm text-zinc-500">Receive pop-up notifications for activity in Whops you&apos;ve joined</p>
                            </div>
                        </div>
                        <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-[28px] hover:bg-zinc-900/60 transition-colors group">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                                <Volume2 size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Sound effects</h3>
                                <p className="text-sm text-zinc-500">Enhance platform interactions with sound effects.</p>
                            </div>
                        </div>
                        <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
