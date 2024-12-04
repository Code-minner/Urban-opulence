'use client';

import React, { useEffect, useState } from 'react';
import { client } from '../../../sanity/lib/client';  // Correct import path for client

// Define a TypeScript interface for the post structure
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
  const postsPerPage = 6; // You can adjust this number as needed

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts: Post[] = await client.fetch(blogQuery);
      setPosts(fetchedPosts);
      setFilteredPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  // Search functionality
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when searching

    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(value) ||
      post.excerpt.toLowerCase().includes(value)
    );

    setFilteredPosts(filtered);
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="py-10">
      {/* Search Input */}
      <div className="mb-6 px-[5%]">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
        onChange={handleSearch}
        className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary font-satoshi text-[1.6em] max-sm:text-[1.4em] rounded-[80px] absolute top-[60%] left-[10%] max-w-[80%] mx-auto px-5 py-2.5 max-sm:top-[50%]"
        />
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-[5%]">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <a href={`/blog/${post.slug.current}`} >
            <div key={post.slug.current} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={post.featuredImage?.asset?.url}
                alt={post.featuredImage?.alt}
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-4">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <a href={`/blog/${post.slug.current}`} className="text-white mt-4 bg-purple-900 py-2 px-4 rounded-md inline-block">Read More</a>
            </div></a>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No posts found matching your search.
          </div>
        )}
      </div>

      {/* Pagination Controls - Only show if more than 6 posts */}
      {filteredPosts.length > postsPerPage && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 border rounded-md ${currentPage === number
                ? 'bg-primary text-white'
                : 'bg-white text-black hover:bg-gray-100'
                }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Body;