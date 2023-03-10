import Link from 'next/link';

import React from 'react';
import '../../node_modules/video-react/dist/video-react.css';
import Layout from '../../components/Layout';
import Product from '../../models/Product';
import db from '../../utils/db';

import { Player } from 'video-react';

export default function ProductScreen(props) {
  const { product } = props;

  if (!product) {
    return <Layout title="Produt Not Found">Produt Not Found</Layout>;
  }

  return (
    <Layout title={product.name}>
      <div className="  py-2">
        <Link href="/">time machine</Link>
      </div>

      <div className="text-white">
        <Player
          playsInline
          poster={product.image}
          src={product.video}
          ControlBar
          ReplayControl
          ForwardControl
          CurrentTimeDisplay
          TimeDivider
          PlaybackRateMenuButton
          VolumeMenuButton
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
