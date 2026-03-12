import './globals.css'

export const metadata = {
  title: "You're Insight",
  description: "A community platform redefining the 9-5 for Black professionals, amplifying perspectives, achievements, and ideas through storytelling, programs, events, and networking.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
