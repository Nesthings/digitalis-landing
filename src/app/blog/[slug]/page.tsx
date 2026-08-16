import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { formatDate, getPost, posts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Container className="pb-16 pt-28 md:pt-36">
        <article className="mx-auto max-w-2xl">
          <header>
            <div className="flex items-center gap-2 text-xs text-fg-muted">
              <span className="rounded-full border border-border px-2.5 py-0.5 font-medium text-fg-secondary">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden>·</span>
              <span>{post.readTime} de lectura</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-fg text-balance md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-fg-secondary text-pretty">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3 border-b border-border pb-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 font-mono text-sm font-semibold text-accent">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </span>
              <div>
                <div className="text-sm font-medium text-fg">{post.author}</div>
                <div className="text-xs text-fg-muted">Digitalis Labs</div>
              </div>
            </div>
          </header>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-elevation-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.src}
              alt={post.alt}
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-10 space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-fg-secondary text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </Container>
      <CtaSection
        title="¿Te interesa hablar de este tema?"
        description="Escríbenos y conversamos sobre cómo aplicar esto a tu proyecto concreto."
        link="/contacto"
        linkLabel="Hablemos de tu proyecto"
      />
    </>
  );
}
