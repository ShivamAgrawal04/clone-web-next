import SidebarSettings from "@/components/layout/SidebarSettings";
import { MobileSidebarSettings } from "@/components/layout/MobileSidebarSettings";

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex w-full overflow-hidden flex-col md:flex-row min-h-screen">
            {/* Sidebar only on desktop */}
            <SidebarSettings />

            {/* Mobile Sidebar */}
            <MobileSidebarSettings />

            {/* Content */}
            <main className="flex-1 min-w-0 flex flex-col bg-background relative">
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    {children}
                </div>
            </main>
        </div>
    );
}
