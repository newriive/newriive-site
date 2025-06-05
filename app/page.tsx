import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import ComingSoon from '@/components/ComingSoon'
// import CallToAction from '@/components/CallToAction'
import EmailSignup from '@/components/EmailSignup'

export default function Home() {
  return (
    <main className="flex flex-col bg-white text-gray-900">
      <Hero />
      <ProblemSolution />
      <ComingSoon />
      <EmailSignup />
      {/* <CallToAction /> */}
    </main>
  )
}
