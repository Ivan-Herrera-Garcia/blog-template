import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Code Hunters | Blog",
//   description: "A blog about programming, technology, video games, and more. Forbidden furry content.",
//   icons: {
//     icon: "/logo.ico", // Favicon en public/
//   },
//   openGraph: {
//     title: "Code Hunters | Blog",
//     description: "A blog about programming, technology, video games, and more. Forbidden furry content.",
//     url: "http://devhunters.netlify.app/sitemap.xml",
//     siteName: "Code Hunters",
//     images: [
//       {
//         url: "https://codehunters.dev/logo.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Code Hunters Blog",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Code Hunters | Blog",
//     description: "A blog about programming, technology, video games, and more. Forbidden furry content.",
//     images: ["https://codehunters.dev/logo.jpg"],
//   },
//   themeColor: "#000000",
//   robots: {
//     index: true,
//     follow: true,
//   },
//   keywords: [
//     "programming",
//     "technology",
//     "video games",
//     "blog", 
//   ],
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
      <title>Code Hunters | Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Code Hunters - Blog sobre programación y tecnología" />
        <meta name="keywords" content="Code Hunters, blog, programación, tecnología" />
        <meta name="author" content="Code Hunters" />
        <link rel="icon" href="https://code-hunters.netlify.app/logo.ico" />

        <meta property="og:title" content="Code Hunters | Blog" />
        <meta property="og:description" content="Un blog sobre programación, tecnología, videojuegos y más." />
        <meta property="og:image" content="https://code-hunters.netlify.app/logo.jpg" />
        <meta property="og:url" content="https://code-hunters.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Code Hunters" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Code Hunters | Blog" />
        <meta name="twitter:description" content="Un blog sobre programación, tecnología, videojuegos y más." />
        <meta name="twitter:image" content="https://code-hunters.netlify.app/logo.jpg" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
