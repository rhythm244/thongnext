import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import Layout from '../../components/layout'

// If you’ve used <a href="…"> instead of <Link href="…"> and did this, the background color will be cleared on link clicks because the browser does a full refresh.
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>

            <Image
                src="/images/profile.jpg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="wasawat"
            />
            
        </Layout>
    )
  }