import { BlogPosts } from "app/components/posts"

export const metadata = {
  title: "Blog",
  description: "Get the best articles on the web from a passionate developer.",
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Articles</h1>
      <BlogPosts />
    </section>
  )
}
