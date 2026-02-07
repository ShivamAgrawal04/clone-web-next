import { CheckCircle2, Instagram, Youtube } from "lucide-react";

export default function Requirements() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Budget Progress */}
      <div className="bg-muted/30 p-6 rounded-xl border border-muted">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Campaign Budget</h2>
            <p className="text-muted-foreground text-sm">$4,995.82 of $10,145.43 paid out</p>
          </div>
          <span className="text-orange-500 font-bold text-2xl">49%</span>
        </div>
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 w-[49%] rounded-full" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="CPM" value="$0.30 / 1K" color="text-blue-500" />
        <StatCard label="Max Payout" value="$50.00" color="text-green-500" />
        <StatCard label="Min Views" value="500+" color="text-purple-500" />
        <StatCard label="Platforms" value={<><Instagram size={20} /><Youtube size={20} /></>} />
      </div>

      {/* Requirements */}
      <div className="bg-muted/20 p-6 rounded-xl border border-muted">
        <h3 className="text-sm font-bold text-muted-foreground uppercase mb-4">Requirements</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-3 text-foreground">General</h4>
            <div className="space-y-2">
              {["Gaming Niche", "English/Hindi", "18-24 Age", "Min 1k Subs"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Content</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-500" />
                <span className="text-sm text-muted-foreground">Use hashtags: <strong className="text-foreground">#Grizzy #GamingClips</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-500" />
                <span className="text-sm text-muted-foreground">Credit original creator</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-500" />
                <span className="text-sm text-muted-foreground">"Link in bio for full video"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color, children }: { 
  label: string; 
  value: string | React.ReactNode; 
  color?: string; 
  children?: React.ReactNode 
}) {
  return (
    <div className="bg-muted/30 p-4 rounded-xl border border-muted">
      <p className="text-xs text-muted-foreground uppercase mb-1">{label}</p>
      <p className={`text-lg font-bold ${color || 'text-foreground'}`}>{value}</p>
    </div>
  );
}