import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { formatDate, posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre DevOps, cloud, desarrollo de software y producto, escritos por el equipo de Digitalis Labs.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Lo que aprendemos, por escrito"
        description="Notas técnicas y de producto sobre DevOps, desarrollo de software y cómo construir cosas que funcionan."
      />

      <Container className="py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.07} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-muted transition-all duration-300 hover:-translate-y-1 hover:shadow-elevation-3"
              >
                <div className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.src}
                    alt={post.alt}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-fg-muted">
                    <span className="rounded-full border border-border px-2.5 py-0.5 font-medium text-fg-secondary">
                      {post.category}
                    </span>
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-fg">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-secondary">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Leer artículo
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
