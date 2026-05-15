export default function PrivacyPage() {
  return (
    <div className="bg-gray-950 text-gray-200 px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Privacy <span className="text-yellow-400">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Your data. Your control. Our responsibility.
          </p>
        </div>

        {/* Intro */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            At <span className="text-white font-semibold">Volt Store</span>, your privacy isn’t a checkbox—
            it’s a promise. This policy explains how we collect, use, and protect your information
            when you interact with our platform.
          </p>

          <p className="text-gray-400">
            By using Volt Store, you trust us with your data. We take that seriously.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          <Section
            title="Information We Collect"
            content={[
              "Personal details such as name, email address, phone number, and shipping information.",
              "Order and payment-related data needed to complete purchases.",
              "Technical data like device type, browser, and usage patterns to improve performance."
            ]}
          />

          <Section
            title="How We Use Your Information"
            content={[
              "To process orders and deliver products efficiently.",
              "To communicate updates, order status, and support responses.",
              "To improve our services, security, and user experience."
            ]}
          />

          <Section
            title="Data Protection"
            content={[
              "We use industry-standard security practices to protect your information.",
              "Sensitive data is handled with encryption and restricted access.",
              "We never sell or trade your personal information."
            ]}
          />

          <Section
            title="Cookies & Tracking"
            content={[
              "Cookies help us remember preferences and improve site performance.",
              "You can disable cookies through your browser settings if you choose.",
            ]}
          />

          <Section
            title="Third-Party Services"
            content={[
              "We may use trusted third-party tools for payments, analytics, or delivery.",
              "These services only receive the data required to perform their function.",
            ]}
          />

          <Section
            title="Your Rights"
            content={[
              "You can request access, correction, or deletion of your personal data.",
              "You may opt out of promotional communications at any time.",
            ]}
          />

          <Section
            title="Policy Updates"
            content={[
              "We may update this Privacy Policy as our services evolve.",
              "Changes will be reflected on this page with an updated date.",
            ]}
          />

        </div>

        {/* Closing */}
        <div className="border-t border-gray-800 pt-8 text-gray-400 text-sm">
          <p>
            If you have questions about this Privacy Policy or how your data is handled,
            feel free to contact us. Transparency matters.
          </p>
          <p className="mt-2 text-white font-medium">
            Volt Store — powered by trust.
          </p>
        </div>

      </div>
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, content }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4 hover:border-yellow-400 transition">
      <h2 className="text-2xl font-semibold text-white">⚡ {title}</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-400">
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}