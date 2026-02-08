"use client";

import { 
  Youtube, 
  Instagram,
  FolderOpen,
  ExternalLink
} from "lucide-react";

const links = [
  {
    id: 1,
    title: "YouTube Channel",
    type: "youtube",
    url: "https://youtube.com/@raystonheem",
    description: "Subscribe to our YouTube channel"
  },
  {
    id: 2,
    title: "Instagram Profile",
    type: "instagram",
    url: "https://instagram.com/raystonheem",
    description: "Follow us on Instagram"
  },
  {
    id: 3,
    title: "Google Drive",
    type: "drive",
    url: "https://drive.google.com/drive/folders/123",
    description: "Access our shared files"
  }
];

export default function Assets() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="border-b bg-background">
        <div className="px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Links
            </h1>
            <p className="text-muted-foreground">
              Quick access to our platforms
            </p>
          </div>
        </div>
      </section>

      {/* Links Grid */}
      <section className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-200 p-6"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    link.type === "youtube" ? "bg-red-500" :
                    link.type === "instagram" ? "bg-gradient-to-r from-purple-500 to-pink-500" :
                    "bg-blue-500"
                  }`}>
                    {link.type === "youtube" ? (
                      <Youtube className="h-6 w-6 text-white" />
                    ) : link.type === "instagram" ? (
                      <Instagram className="h-6 w-6 text-white" />
                    ) : (
                      <FolderOpen className="h-6 w-6 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}