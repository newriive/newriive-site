export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-12 text-center bg-blue-50 text-gray-900">
      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to Newriive
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Tools, guidance, and community — designed for immigrants starting a
          new chapter.
        </p>
        <button className="w-full sm:w-auto bg-[#2BB3A3] text-white px-6 py-3 rounded-full hover:bg-[#229f91] transition">
          Learn More
        </button>
      </div>
    </section>
  )
}
