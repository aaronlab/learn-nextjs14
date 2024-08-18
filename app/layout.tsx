import { Metadata } from "next";
import Navigation from "./components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: "The best movies in the world",
};

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
