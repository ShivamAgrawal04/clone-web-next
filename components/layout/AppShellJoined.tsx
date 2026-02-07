import SidebarJoined from "./SidebarJoined";
import { MobileSidebarJoined } from "./MobileSidebarJoined";

export default function AppShellJoined({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden flex-col md:flex-row">
      {/* Sidebar only on desktop */}
      <aside className="hidden md:block w-64">
        <SidebarJoined />
      </aside>

      {/* Mobile Sidebar */}
      <MobileSidebarJoined />

      {/* Content */}
   <main className="flex-1 min-w-0 flex flex-col bg-background relative">
        {/* 1. 'flex-1' space fill karega.
          2. 'min-w-0' magic class hai jo flex-child ko screen se bahar stretch hone se rokiti hai.
          3. 'overflow-y-auto' vertical scroll ke liye.
        */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}
