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
            Master AI, with a gamified version to learn prompting.
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-10 opacity-95 font-medium max-w-3xl mx-auto">
            Level up your ChatGPT, Claude, and Midjourney skills with gamified challenges
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
                Daily Bonus Challenges
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Prompting challenges to build your skills gradually and consistently with new puzzles across text, image, code, and creative prompting.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-[#6366F1] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl mb-6">🏆</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Compete & Earn Points
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

            <div className="bg-gradient-to-br from-[#1F2937] to-[#111827] p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#6366F1] relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#6366F1] rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#22C55E] rounded-full opacity-10 blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Challenge Header with Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-[#22C55E] font-bold text-sm mb-2 tracking-widest">CHALLENGE #001</p>
                <h3 className="text-3xl md:text-4xl font-black text-white">
                💻 Simple Web Page 
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white rounded-full text-sm font-bold shadow-lg">
                Beginner
                </span>
                <div className="px-4 py-2 bg-[#6366F1] text-white rounded-full font-bold">
                ⭐ 100 XP
                </div>
              </div>
              </div>

              {/* Challenge Content */}
              <div className="space-y-6 mb-10">
              <div className="bg-[#1F2937] border-l-4 border-[#6366F1] p-4 md:p-5 rounded-lg">
                <p className="text-base md:text-lg text-gray-300">
                <span className="text-[#22C55E] font-bold">🎯 OBJECTIVE:</span> Get the AI to write code for you to create a webpage that prints "PromptQuest" and has your name as the title.
                </p>
              </div>

              <div className="bg-[#1F2937] border-l-4 border-[#FBBF24] p-4 md:p-5 rounded-lg">
                <p className="text-base md:text-lg text-gray-300">
                <span className="text-[#FBBF24] font-bold">⚔️ YOUR TASK:</span> Craft a prompt that makes ChatGPT or Claude write a html code for you. It must have title as your name and body should print "PromptQuest". The prompt should use less token and should be creative and concise.
                </p>
              </div>

              <div className="bg-[#1F2937] border-l-4 border-[#EC4899] p-4 md:p-5 rounded-lg">
                <p className="text-base md:text-lg font-bold text-[#EC4899] mb-3">
                ✅ SUCCESS CRITERIA:
                </p>
                <ul className="space-y-2 text-base md:text-lg">
                <li className="flex items-start text-gray-300">
                  <span className="text-[#22C55E] mr-3 font-bold text-xl">→</span>
                  <span>Prompt should use less than 20 tokens</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#22C55E] mr-3 font-bold text-xl">→</span>
                  <span>A simple html code with title and body tag</span>
                </li>
                </ul>
              </div>
              </div>

              {/* CTA Button */}
                <div className="flex flex-wrap gap-4 items-center justify-center">
                <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 bg-linear-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#4338CA] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                  Try it on ChatGPT
                </button>
                </a>
                <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 bg-linear-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#4338CA] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                  Try it on Claude
                </button>
                </a>
              {/* <span className="text-gray-400 text-sm">~3 min average</span> */}
              </div>
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