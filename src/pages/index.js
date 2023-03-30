//import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

import ProductList from '@containers/ProductList';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Shop</title>
      </Head>
      <ProductList />
    </>
  );
}
