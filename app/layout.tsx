import Navigation from "./components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navigation />
        <div>
          {children}
          &copy; NextJS is great!
        </div>
      </body>
    </html>
  );
}
