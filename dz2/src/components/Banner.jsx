export default function Banner() {
  return (
    <section className="bg-green-100 py-32 text-center">
      <h2 className="text-5xl font-extrabold text-green-700 mb-4">
        Welcome to our landing page 🌿
      </h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
        Modern website built with React + Tailwind. Fast, clean and responsive UI.
      </p>
      <button className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 text-lg font-semibold">
        Get Started
      </button>
    </section>
  );
}
