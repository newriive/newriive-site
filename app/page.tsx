import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import ComingSoon from '@/components/ComingSoon'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <main className="flex flex-col bg-white text-gray-900">
      <Hero />
      <ProblemSolution />
      <ComingSoon />
      <CallToAction />
    </main>
  )
}
