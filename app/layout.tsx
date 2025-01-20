import { Analytics } from "@vercel/analytics/react"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

import Footer from "./components/footer"
import { Navbar } from "./components/nav"
import "./global.css"
import { baseUrl } from "./sitemap"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Alexander.",
    template: "%s | The Codefather Co.",
  },
  description:
    "Fast, out-of-the-box thinker with an amazing, efficient, hyper-focused mind, that reads people in a second, that stays calm during a crisis while everyone is in panic mode, bringing unique and creative solutions that your competitors won't think about, giving you a competitive advantage in any project.",
  openGraph: {
    title: "Alexander.",
    description:
      "Fast, out-of-the-box thinker with an amazing, efficient, hyper-focused mind, that reads people in a second, that stays calm during a crisis while everyone is in panic mode, bringing unique and creative solutions that your competitors won't think about, giving you a competitive advantage in any project.",
    url: baseUrl,
    siteName: "Alexander.",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(" ")

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
