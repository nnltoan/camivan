import { POSTS } from '../../lib/blogPosts';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  return <BlogPostClient slug={params.slug} />;
}
