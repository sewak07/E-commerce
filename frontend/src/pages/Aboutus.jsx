export default function Aboutus() {
  return (
    <div className="bg-gray-950 text-gray-200 px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            About <span className="text-indigo-500">Volt Store</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Where technology meets intention.
          </p>
        </div>

        {/* Intro */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            We’re not here to sell noise. We’re here to deliver <span className="text-white font-semibold">power </span> 
            the kind that fits in your pocket, fuels your work, and sharpens your everyday life.
          </p>

          <p>
            From cutting-edge mobiles and sleek tablets to immersive audio gear and essential accessories,
            Volt Store is built for people who expect more from their tech.
          </p>

          <p className="text-gray-400">
            Every product on our shelf is chosen with care. No random listings. No shortcuts.
            If it doesn’t spark confidence, it doesn’t make the cut.
          </p>
        </div>

        {/* Belief Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            "Smooth to use",
            "Strong in performance",
            "Honest in pricing",
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-xl p-6 text-center bg-gray-900 hover:border-indigo-500 transition"
            >
              <span className="text-indigo-500">⚡</span>
              <p className="mt-3 font-medium text-white">{item}</p>
            </div>
          ))}
        </div>

        {/* Statement */}
        <div className="space-y-4 text-lg">
          <p>
            Volt Store exists for <span className="text-white">creators, professionals, gamers, and students</span> —
            anyone who refuses to settle for outdated gear or inflated promises.
          </p>
          <p className="italic text-gray-400">
            This isn’t just an e-commerce store.
            <br />
            It’s a signal. A charge. A promise.
          </p>
          <p className="font-semibold text-white">
            Stay connected. Stay charged.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-white">
            Why Choose <span className="text-indigo-500">Volt Store?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Curated Tech, Not Clutter",
                desc: "Every product is selected for real-world performance, not marketing hype.",
              },
              {
                title: "Power Meets Quality",
                desc: "Durability, efficiency, and design that lasts beyond trends.",
              },
              {
                title: "Honest Pricing",
                desc: "No fake discounts. No inflated tags. Just true value.",
              },
              {
                title: "Built for Everyday Hustle",
                desc: "For work, study, gaming, and life on the move.",
              },
              {
                title: "Customer-First Mindset",
                desc: "Clear communication, real support, earned trust.",
              },
              {
                title: "Always Evolving",
                desc: "We move with tech—so you’re never left behind.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-500 transition"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  ⚡ {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}