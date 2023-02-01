import '../styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className="space-y-4 p-8">
      <header className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iure
        exercitationem fugiat neque corporis perferendis ut repellendus modi
        porro, dolorum consequuntur sunt similique nostrum autem!
      </header>
      <main className="bg-white text-gray-700">{children}</main>
      <footer className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iure
        exercitationem fugiat neque corporis perferendis ut repellendus modi
        porro, dolorum consequuntur sunt similique nostrum autem!
      </footer>
    </body>
  </html>
);

export default RootLayout;
