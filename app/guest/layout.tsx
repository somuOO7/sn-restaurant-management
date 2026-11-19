export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {/* Layout UI */}
      {/* Place children where you want to render a page or nested layout */}
      {children}
    </main>
  );
}
