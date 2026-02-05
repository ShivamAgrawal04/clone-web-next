import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />

      {/* Right content */}
      <div className="ml-64 flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 overflow-y-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
