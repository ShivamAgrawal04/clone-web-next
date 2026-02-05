import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Sidebar />

      {/* Content area */}
      <div className="ml-64 flex min-h-screen flex-col">
        <Topbar />

        {/* Only this scrolls */}
        <main className="flex-1 overflow-y-auto bg-background">{children}</main>
      </div>
    </div>
  );
}
