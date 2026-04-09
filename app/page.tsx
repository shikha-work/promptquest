import { EmailForm } from '@/components/landing/EmailForm'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#6366F1] via-[#4F46E5] to-[#4338CA] text-white py-16 md:py-24 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#22C55E] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4F46E5] rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="mb-8 inline-flex items-center gap-3">
            <div className="w-14 h-14 bg-[#22C55E] rounded-xl flex items-center justify-center text-3xl shadow-lg">
              ⚡
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              PromptQuest
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            Master AI, One Prompt at a Time
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-10 opacity-95 font-medium max-w-3xl mx-auto">
            Level up your ChatGPT, Claude, and Midjourney skills with gamified daily challenges
          </p>

          {/* Email Form */}
          <div className="mb-8">
            <EmailForm formNumber={1} />
          </div>

          {/* Social Proof */}
          <p className="text-base md:text-lg opacity-90">
            Join <strong className="text-[#22C55E] font-bold">2,000+</strong> people mastering AI prompting
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-20 text-gray-900">
            Why PromptQuest?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-[#6366F1] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl mb-6">🎮</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Daily Challenges
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                New prompting challenges every day. Build your skills one quest at a time with structured, progressive difficulty.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-[#6366F1] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl mb-6">🏆</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Compete & Earn
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Climb leaderboards, earn achievements, and maintain streaks. See how you stack up against prompt engineers worldwide.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-[#6366F1] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl mb-6">📈</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Track Your Growth
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                From beginner to expert across 7 skill trees. Visual progress tracking shows exactly how you're improving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Preview Section */}
      <section className="py-16 md:py-24 px-4 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-20 text-gray-900">
            Try a Sample Challenge
          </h2>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-l-4 border-[#6366F1]">
            {/* Challenge Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Coffee Haiku
              </h3>
              <span className="px-5 py-2 bg-[#22C55E] text-white rounded-full text-sm font-bold shadow-md">
                Beginner
              </span>
            </div>

            {/* Challenge Content */}
            <div className="space-y-5 text-gray-700 mb-8">
              <p className="text-base md:text-lg">
                <strong className="text-gray-900">Objective:</strong> Get the AI to write a haiku about coffee that follows the traditional 5-7-5 syllable pattern.
              </p>

              <p className="text-base md:text-lg">
                <strong className="text-gray-900">Your Task:</strong> Craft a prompt that makes ChatGPT or Claude write a perfect haiku. It must have exactly 3 lines with 5, 7, and 5 syllables.
              </p>

              <div>
                <p className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  Success Criteria:
                </p>
                <ul className="ml-6 space-y-2 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#22C55E] mr-2 font-bold">✓</span>
                    <span>Correct syllable count (5-7-5)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#22C55E] mr-2 font-bold">✓</span>
                    <span>Topic is clearly about coffee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#22C55E] mr-2 font-bold">✓</span>
                    <span>Sounds natural and poetic</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Points Badge */}
            <div className="inline-block px-6 py-3 bg-linear-to-r from-[#FBBF24] to-[#F59E0B] text-gray-900 rounded-xl font-bold text-base shadow-md">
              ⭐ 100 Points + Bonuses
            </div>
          </div>

          <p className="text-center mt-10 text-lg md:text-xl text-gray-600">
            This is just 1 of <strong className="text-[#6366F1] font-bold">500+ challenges</strong> across text, image, code, and creative prompting
          </p>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative bg-linear-to-br from-[#6366F1] via-[#4F46E5] to-[#4338CA] text-white py-16 md:py-24 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#22C55E] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4F46E5] rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Level Up Your AI Skills?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto">
            Join the waitlist and get early access + exclusive launch discount
          </p>
          <EmailForm formNumber={2} />
        </div>
      </section>
    </div>
  )
}