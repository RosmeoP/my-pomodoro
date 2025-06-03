import './globals.css';


export const metadata = {
  title: 'PomoDoro',
  description: 'A simple Pomodoro timer application',
  icons: {
    icon: '/Tomato Timer Icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
