import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`container mx-auto sm:px-4 px-2`}
      >
          {children}
      </body>
    </html>
  );
}
