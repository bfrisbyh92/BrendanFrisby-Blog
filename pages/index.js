import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import Header from "../components/Header";

import { getPosts } from "../services/index";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Brendan Frisby - Tech Blog</title>
        <link rel="icon" href="me.jpeg" />
      </Head>
      {/* <Header /> */}
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 text-white-500">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8 text-white-500">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  };
}
