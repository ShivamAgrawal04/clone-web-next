import React from "react";

export default function CliprPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-black text-orange-500 font-bold">
            c
          </div>
          <span className="text-lg font-semibold">Clipr Clipping</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-3">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          {/* Video / Banner */}
          <div className="aspect-video w-full rounded-xl bg-black flex items-center justify-center">
            <span className="text-5xl font-extrabold text-orange-500">
              clipr
            </span>
          </div>

          {/* Meta info */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="rounded-full border border-border px-3 py-1 text-foreground">Free</span>
            <span>👤 90.9K members</span>
            <span>By Prithvi (PB)</span>
          </div>

          {/* Title */}
          <h1 className="mt-8 text-3xl font-bold">
            Join The Best Clipping Community
          </h1>

          {/* Description */}
          <div className="mt-4 space-y-2 text-muted-foreground">
            <p>
              Welcome to <strong>Clipr</strong> — The New Standard in Clipping.
            </p>
            <p>
              Clipr is the leading community for clippers and creators who want
              to dominate the short-form space.
            </p>
            <p>
              <strong>Elite Training:</strong> Everything you need to know about
              content, virality, and monetization.
            </p>
            <p>
              <strong>Premier Campaigns:</strong> Exclusive access to some of
              the top communities.
            </p>
            <p>
              <strong>Pro Community:</strong> Join a powerhouse of clippers
              helping each other scale.
            </p>
            <p>
              From day-one beginners to seasoned pros, Clipr is the ultimate
              home for the next generation of clippers.
            </p>
          </div>

          {/* Reviews header */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">⭐ 4.6</span>
              <span className="text-muted-foreground">(512 reviews)</span>
            </div>
            <button className="text-sm text-blue-600 hover:underline">
              View all
            </button>
          </div>

          {/* Reviews */}
          <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                name: "John",
                text: "Amazing Campaigns are available here do check it guys",
              },
              {
                name: "Go Gadas",
                text: "Trying and learning",
              },
              {
                name: "Iliyas bhaikatti",
                text: "very nice",
              },
              {
                name: "AMAN",
                text: "Very nice",
              },
            ].map((review, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted" />
                  <span className="font-medium">{review.name}</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </div>
            ))}
          </section>

          {/* Report */}
          <div className="mt-12 flex justify-center">
            <button className="text-sm text-muted-foreground hover:underline">
              Report this creator
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside>
          <div className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm">
            <div className="h-40 bg-black flex items-center justify-center">
              <span className="text-3xl font-bold text-orange-500">clipr</span>
            </div>

            <div className="p-5">
              <div className="mb-2 flex items-center gap-2 text-sm">
                <span className="text-yellow-500">★★★★★</span>
                <span className="font-medium">4.6</span>
                <span className="text-muted-foreground">(512)</span>
              </div>

              <h2 className="text-lg font-semibold">Clipr Campaigns</h2>

              <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
                Join for free
              </button>

              <div className="mt-6 divide-y text-sm">
                <details className="py-3">
                  <summary className="cursor-pointer font-medium">
                    Is this group free?
                  </summary>
                </details>

                <details className="py-3">
                  <summary className="cursor-pointer font-medium">
                    How often do payouts get sent?
                  </summary>
                </details>
              </div>

              <p className="mt-6 text-center text-xs text-muted-foreground">
                Powered by Whop
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
