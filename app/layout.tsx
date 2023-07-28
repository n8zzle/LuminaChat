import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/Navbar";
import Login from "./components/Login";

export const metadata: Metadata = {
  title: "Lumina-Chat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Login />;
  } else {
    return (
      <html lang="en">
        <body className="w-screen h-screen flex">
          <NavBar />
          {children}
        </body>
      </html>
    );
  }
}
