export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-blue-50 text-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Newriive</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Tools, guidance, and community — designed for immigrants starting a new chapter.
      </p>
      <button className="bg-[#2BB3A3] text-white px-6 py-3 rounded-full hover:bg-[#229f91] transition">
        Learn More
      </button>
    </section>
  )
}
