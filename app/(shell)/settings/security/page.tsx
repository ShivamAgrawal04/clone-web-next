import { Mail, Smartphone, Monitor, CheckCircle2 } from "lucide-react";

export default function SecuritySettingsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-2xl font-bold">Account security</h1>
                    <button className="px-5 py-2 bg-muted text-muted-foreground rounded-xl font-bold text-sm cursor-not-allowed border border-border">
                        Save changes
                    </button>
                </div>

                {/* Email & Phone */}
                <div className="space-y-4 mb-12">
                    <div className="flex items-center justify-between p-5 bg-muted/30 border border-border rounded-2xl">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-muted rounded-lg text-muted-foreground">
                                <Mail size={18} />
                            </div>
                            <span className="font-medium">en23ca503169@medicaps.ac.in</span>
                        </div>
                        <button className="px-4 py-1.5 bg-muted hover:bg-accent rounded-lg text-sm font-bold transition-colors">
                            Change
                        </button>
                    </div>

                    <div className="flex items-center justify-between p-5 bg-muted/30 border border-border rounded-2xl">
                        <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="p-2 bg-muted rounded-lg">
                                <Smartphone size={18} />
                            </div>
                            <span className="font-medium">Add phone number</span>
                        </div>
                        <button className="px-4 py-1.5 bg-muted hover:bg-accent rounded-lg text-sm font-bold transition-colors">
                            Add
                        </button>
                    </div>
                </div>

                {/* 2FA Section */}
                <div className="space-y-6 mb-12">
                    <div>
                        <h2 className="text-lg font-bold mb-1">Two-factor authentication</h2>
                        <p className="text-sm text-muted-foreground">Secure your account by requiring a verification code when signing in.</p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-5 bg-muted/30 border border-blue-600/50 rounded-2xl ring-1 ring-blue-600/20">
                            <div className="flex items-center gap-4">
                                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                    <CheckCircle2 size={12} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Authenticator App (recommended)</h3>
                                    <p className="text-xs text-muted-foreground">Receive a code via an authenticator app.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-5 bg-muted/30 border border-border rounded-2xl">
                            <div className="flex items-center gap-4">
                                <div className="w-5 h-5 rounded-full border-2 border-border" />
                                <div>
                                    <h3 className="font-bold text-sm text-muted-foreground">Text message</h3>
                                    <p className="text-xs text-muted-foreground">Receive a code via SMS.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold shadow-lg shadow-blue-500/20 transition-all">
                            Enable two-factor authentication
                        </button>
                    </div>
                </div>

                {/* Connected Apps */}
                <div className="space-y-6 mb-12">
                    <div>
                        <h2 className="text-lg font-bold mb-1">Connected apps</h2>
                        <p className="text-sm text-muted-foreground">Manage apps that can access your account.</p>
                    </div>

                    <div className="p-12 bg-muted/10 border border-border rounded-3xl flex flex-col items-center justify-center text-center">
                        <Monitor size={32} className="text-muted-foreground/40 mb-4" />
                        <h3 className="font-bold text-muted-foreground">No connected apps</h3>
                        <p className="text-xs text-muted-foreground mt-1">When you authorize an app, it will show up here.</p>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="pt-8 border-t border-border">
                    <h2 className="text-lg font-bold text-red-500 mb-4">Danger zone</h2>
                    <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded-xl text-sm font-bold transition-all">
                        Delete account
                    </button>
                </div>
            </div>
        </div>
    );
}
