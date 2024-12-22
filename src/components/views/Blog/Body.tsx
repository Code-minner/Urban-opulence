'use client';

import React, { useEffect, useState } from 'react';
import { client } from '../../../sanity/lib/client'; // Adjust the path if necessary
import BlogHero from './BlogHero'; // Ensure this path is correct

// Define the TypeScript interface for posts
interface Post {
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  featuredImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
}

const blogQuery = `
  *[_type == "post"]{
    title,
    slug,
    excerpt,
    featuredImage {
      asset->{
        _id,
        url
      },
      alt
    }
  } | order(publishedAt desc)
`;

const Body = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts: Post[] = await client.fetch(blogQuery);
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = (value: string) => {
    const searchValue = value.toLowerCase();
    setSearchTerm(searchValue);
    setCurrentPage(1);

    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchValue) ||
        post.excerpt.toLowerCase().includes(searchValue)
    );

    setFilteredPosts(filtered);
  };

  // Pagination calculations
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Render BlogHero once */}
      <BlogHero onSearch={handleSearch} />

      {/* Main content */}
      <section className="py-10">
        {filteredPosts.length === 0 ? (
          // Display message if no posts are available
          <div className="text-center text-gray-600 font-medium">
            <p>Blog post not available ......</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-[5%]">
              {currentPosts.map((post) => (
                <a href={`/blog/${post.slug.current}`} key={post.slug.current}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img
                      src={post.featuredImage?.asset?.url}
                      alt={post.featuredImage?.alt || 'Blog post image'}
                      className="w-full h-64 object-cover rounded-md"
                    />
                    <h2 className="text-xl font-bold mt-4">{post.title}</h2>
                    <p className="text-gray-600 mt-2">{post.excerpt}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 mx-1 rounded-md ${
                      currentPage === index + 1
                        ? 'bg-purple-900 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Body;
