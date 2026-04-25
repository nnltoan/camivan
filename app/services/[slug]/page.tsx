import { SERVICE_DETAILS } from '../../lib/servicesContent';
import ServiceDetailClient from './ServiceDetailClient';

export function generateStaticParams() {
  return SERVICE_DETAILS.map((s) => ({ slug: s.slug }));
}

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  return <ServiceDetailClient slug={params.slug} />;
}
