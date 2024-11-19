import NewsDetail from '@/components/news/NewsDetail';
import { fnGetAnnounceDetail } from '@/services/announce';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const ChiTietTinTucCb = async ({ params }: Props) => {
  const { slug } = params;
  const data = await fnGetAnnounceDetail(slug);
  return (
    <>
      <NewsDetail data={data?.data?.data?.announce_by_id?.raw_content} />
    </>
  );
};
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params

  const { slug } = params;
  const data = await fnGetAnnounceDetail(slug);
  return {
    title: data?.data?.data?.posts_by_id?.raw_content?.meta_title,
    description: data?.data?.data?.posts_by_id?.raw_content?.meta_description,
    keywords: data?.data?.data?.posts_by_id?.raw_content?.meta_keyword,
    openGraph: {
      images: [`${data?.data?.data?.posts_by_id?.raw_content?.cover?.id}`],
    },
  };
}
export default ChiTietTinTucCb;
