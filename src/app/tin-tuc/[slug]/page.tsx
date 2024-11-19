import NewsDetail from '@/components/news/NewsDetail';

import React from 'react';
import Head from 'next/head';
type Props = {};

const ChiTietTinTuc = (props: Props) => {
  return (
    <>
      <Head>
        <title>Chi tiết tin tức</title>
        <meta name="description" content={`Đây là chi tiết của tin tức: `} />
        <meta property="og:title" content={`Chi tiết tin tức -`} />
        <meta
          property="og:description"
          content={`Đây là chi tiết của tin tức:`}
        />
        <meta property="og:url" content={`https://yourwebsite.com/news`} />
        <meta
          property="og:image"
          content={`https://yourwebsite.com/images.jpg`}
        />
      </Head>
      <NewsDetail />
    </>
  );
};

export default ChiTietTinTuc;
