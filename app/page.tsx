import { EmailForm } from '@/components/landing/EmailForm'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6366F1] via-[#4F46E5] to-[#4338CA] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="w-12 h-12 bg-[#22C55E] rounded-xl flex items-center justify-center text-2xl">
              ⚡
            </div>
            <h1 className="text-4xl font-bold">PromptQuest</h1>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Master AI, One Prompt at a Time
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-10 opacity-95 font-medium">
            Level up your ChatGPT, Claude, and Midjourney skills with gamified daily challenges
          </p>

          {/* Email Form */}
          <EmailForm formNumber={1} />

          {/* Social Proof */}
          <p className="mt-6 text-sm opacity-90">
            Join <strong className="text-[#22C55E] font-bold">2,000+</strong> people mastering AI prompting
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Why PromptQuest?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: '🎮',
                title: 'Daily Challenges',
                description: 'New prompting challenges every day. Build your skills one quest at a time.'
              },
              {
                icon: '🏆',
                title: 'Compete & Earn',
                description: 'Climb leaderboards, earn achievements, and maintain streaks.'
              },
              {
                icon: '📈',
                title: 'Track Your Growth',
                description: 'From beginner to expert across 7 skill trees. Visual progress tracking.'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Try a Sample Challenge
          </h2>

          <div className="bg-white p-10 rounded-2xl shadow-xl border-l-4 border-primary-500">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Coffee Haiku</h3>
              <span className="px-4 py-2 bg-success text-white rounded-full text-sm font-semibold">
                Beginner
              </span>
            </div>

            <div className="space-y-4 text-gray-700 mb-6">
              <p><strong>Objective:</strong> Get the AI to write a haiku about coffee with the traditional 5-7-5 syllable pattern.</p>
              <p><strong>Success Criteria:</strong></p>
              <ul className="ml-5 list-disc space-y-1">
                <li>✓ Correct syllable count (5-7-5)</li>
                <li>✓ Topic is clearly about coffee</li>
                <li>✓ Sounds natural and poetic</li>
              </ul>
            </div>

            <div className="inline-block px-4 py-2 bg-warning/20 text-warning-foreground rounded-lg font-bold">
              ⭐ 100 Points + Bonuses
            </div>
          </div>

          <p className="text-center mt-10 text-lg text-gray-600">
            This is just 1 of <strong>500+ challenges</strong> across text, image, code, and creative prompting
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-[#6366F1] via-[#4F46E5] to-[#4338CA] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Level Up Your AI Skills?
          </h2>
          <p className="text-xl mb-10 opacity-95">
            Join the waitlist and get early access + exclusive launch discount
          </p>
          <EmailForm formNumber={2} />
        </div>
      </section>
    </div>
  )
}