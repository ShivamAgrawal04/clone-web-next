import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./mobileSidebar";
import { SearchIcon } from "@/components/SearchIcon";

export function Topbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b bg-[#ffffff] px-4 relative z-4">
      {/* Left */}
      <div className="flex items-center gap-3">
        <MobileSidebar />
        <div className="hidden sm:block w-80 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search Whop" className="pl-10 rounded-full" />
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
