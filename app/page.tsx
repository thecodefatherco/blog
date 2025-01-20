import { useMemo } from "react"

import { BlogPosts } from "app/components/posts"

export default function Page() {
  const currentTime = new Date().getHours()

  const greeting = useMemo(() => {
    if (currentTime < 11) {
      return "Good morning"
    } else if (currentTime < 18) {
      return "Good afternoon"
    } else {
      return "Good evening"
    }
  }, [currentTime])

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {`${greeting}!`}
      </h1>
      <p className="mb-4">
        {`Fast, out-of-the-box thinker with an amazing, efficient, hyper-focused mind, that reads people in a second, that stays calm during a crisis while everyone is in panic mode, bringing unique and creative solutions that your competitors won't think about, giving you a competitive advantage in any project.`}
      </p>
      <p className="mb-4">
        {`
Empathetic and resilient — a high-energy person that is super fun to be around, with an amazing judge of character, packed with a lot of resilience, intuition and top-notch pattern recognition skills.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
