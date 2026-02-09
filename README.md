# 🚀 Creator & Brand Campaign Dashboard (Whop Clone)

A premium, state-of-the-art dashboard built for creators and brands to manage campaigns, reward content contributors, and verify social engagement. This project features a high-end, responsive UI with deep-scan social verification logic.

## ✨ Features

- **🎯 Discover Campaigns**: Browse and join premium campaigns from top creators.
- **🏆 Content Rewards**: Track payouts, CPM rates, and campaign progress with real-time progress bars.
- **🔒 Social Verification**: A multi-step verification system to link and validate social media accounts (Instagram, YouTube, Twitter, etc.) using unique codes and bio-scans.
- **📁 Asset Management**: Centralized access to brand assets, Google Drive links, and community channels.
- **📊 Submission Tracking**: Manage and track the status of your content submissions.
- **📱 Ultra-Responsive**: Fully optimized for mobile with a dedicated bottom navigation and gesture-friendly sidebar.
- **🎨 Premium UI/UX**: Built with a sleek dark-mode aesthetic, glassmorphism, and smooth micro-animations using Framer Motion.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) / Custom Components
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone [your-repo-link]
   cd my-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Visit the app**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```bash
/app
  /(shell)       # Main application layout and routes
    /joined      # Routes for the joined campaign dashboard
      /accounts  # Social verification functionality
      /rewards   # Reward tracking components
      /about     # Campaign overview
/components
  /layout        # Sidebar, Topbar, and AppShell components
  /ui            # Reusable UI primitives
```

## 🔒 Social Verification Flow

The project implements a "Proper Verification" logic:
1. **Identify**: User enters their platform handle.
2. **Validate**: A unique `WHOP-XXXXXX` code is generated. The user must add this to their bio or message a bot.
3. **Deep-Scan**: The system performs a simulated API scan to cross-reference the unique code with the profile bio to ensure ownership.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for the Creator Economy.
