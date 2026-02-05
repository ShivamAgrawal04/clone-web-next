import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./mobileSidebar";

export function Topbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b bg-background px-4">
      {/* Left */}
      <div className="flex items-center gap-3">
        <MobileSidebar />
        <div className="hidden sm:block w-80">
          <Input placeholder="Search Whop" className="rounded-full" />
        </div>
      </div>

      {/* Right (desktop only) */}
      <div className="hidden sm:flex items-center gap-4">
        <Button variant="ghost">API</Button>
        <Button variant="ghost">Sign in</Button>
        <Button className="rounded-full">Create a business</Button>
      </div>
    </header>
  );
}
