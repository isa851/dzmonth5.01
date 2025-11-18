export default function Features() {
  return (
    <section className="py-20 px-10 text-center">
      <h3 className="text-4xl font-bold text-green-700 mb-10">Features</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="p-10 bg-white shadow rounded-xl">
          <h4 className="text-xl font-bold mb-2">Fast</h4>
          <p className="text-gray-600">Super speed optimized architecture</p>
        </div>

        <div className="p-10 bg-white shadow rounded-xl">
          <h4 className="text-xl font-bold mb-2">Responsive</h4>
          <p className="text-gray-600">Perfect on any device</p>
        </div>

        <div className="p-10 bg-white shadow rounded-xl">
          <h4 className="text-xl font-bold mb-2">Modern</h4>
          <p className="text-gray-600">Clean UI and UX design</p>
        </div>

      </div>
    </section>
  );
}
