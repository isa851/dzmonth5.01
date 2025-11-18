export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-10 bg-white shadow">
      <h1 className="text-2xl font-bold text-green-600">MyLanding</h1>

      <nav className="flex gap-6 text-gray-600 font-medium">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
      </nav>

      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
        Sign up
      </button>
    </header>
  );
}
