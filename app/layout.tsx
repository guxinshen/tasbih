export const metadata = {
  title: "Beqi Tasbih Indonesia",
  description: "Tasbih online gratis untuk Muslim Indonesia"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body style={{ margin: 0, fontFamily: "Arial" }}>{children}</body>
    </html>
  );
}
