'use client';
import NewsDetail from '@/components/news/NewsDetail';
import { useParams } from 'next/navigation';
import React from 'react';
import Head from 'next/head';
type Props = {};

const ChiTietTinTuc = (props: Props) => {
  const { slug } = useParams();

  return (
    <>
      <Head>
        <title>Chi tiết tin tức - {slug}</title>
        <meta
          name="description"
          content={`Đây là chi tiết của tin tức: ${slug}`}
        />
        <meta property="og:title" content={`Chi tiết tin tức - ${slug}`} />
        <meta
          property="og:description"
          content={`Đây là chi tiết của tin tức: ${slug}`}
        />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/news/${slug}`}
        />
        <meta
          property="og:image"
          content={`https://yourwebsite.com/images/${slug}.jpg`}
        />
      </Head>
      <NewsDetail />
    </>
  );
};

export default ChiTietTinTuc;
