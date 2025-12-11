export default function Landing() {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white flex items-center justify-center">
      <main className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          Hello World
        </h1>
        <p className="text-xl md:text-2xl font-light">
          Welcome to your new landing page
        </p>
      </main>
    </div>
  );
}

