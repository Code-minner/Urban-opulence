"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { client } from '../../sanity/lib/client';
import { PortableText } from '@portabletext/react';




interface PortableTextBlock {
  _key: string;
  _type: string;
  [key: string]: any;
}

interface PostType {
  title: string;
  slug: { current: string };
  body: PortableTextBlock[];
  featuredImage?: {
    asset?: {
      _id: string;
      url: string;
    };
  };
}

const Post = () => {
  const [post, setPost] = useState<PostType | null>(null);
  
  const { query } = useRouter();
  const { slug } = query;

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        console.log('Fetching post for slug:', slug); // Debugging line
        const fetchedPost = await client.fetch(
          `*[_type == "post" && slug.current == $slug][0]{
            title,
            slug,
            body,
            featuredImage {
              asset->{
                _id,
                url
              }
            }
          }`,
          { slug }
        );
        console.log('Fetched Post:', fetchedPost); // Debugging line
        setPost(fetchedPost);
      }
    };
    fetchPost();
  }, [slug]);
  

  if (!post) return <div>Loading...</div>;

  
  return (
    <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '2rem',
      padding: '5%',
      paddingTop: '2%',
    }}
  >
    <h1
      style={{
        fontFamily: 'Satoshi, sans-serif',
        fontSize: '1.8rem', // Tailwind's 'text-xl'
        fontWeight: 'bold',
        marginTop: '1px', // Tailwind's 'mt-4'
      }}
    >
      {post.title}
    </h1>
    {post.featuredImage?.asset?.url && (
      <img
        src={post.featuredImage.asset.url}
        alt={post.title}
        style={{
          width: '100%',
          height: '33rem', // Tailwind's 'h-64'
          objectFit: 'cover',
          borderRadius: '0.375rem', // Tailwind's 'rounded-md'
        }}
      />
    )}
    <div
      style={{
        fontSize: '1.4rem',
        lineHeight: '1.75', // Approximate Tailwind's prose style
        maxWidth: '100%',
        fontFamily: 'Satoshi, sans-serif', // Tailwind's prose limits width to about 65 characters
      }}
    >
      <PortableText value={post.body} />
    </div>
  </div>
  
  );
  
};

export default Post;