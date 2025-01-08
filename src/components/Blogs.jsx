import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import FullPostView from "@/components/FullPostView";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://cosmictech-api.vercel.app/api/blogs"
        ); // Correct path
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // handlePostClick function
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handlePostClose = () => {
    setSelectedPost(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Blogs</h1>
      {selectedPost ? (
        <FullPostView post={selectedPost} onClose={handlePostClose} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="w-full cursor-pointer">
                  <CardHeader>
                    <Skeleton className="h-4 w-2/3" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-4 w-1/3" />
                  </CardFooter>
                </Card>
              ))
            : posts?.map((post) => (
                <Card
                  key={post._id}
                  onClick={() => handlePostClick(post)}
                  className="w-full"
                >
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3">{post.content}</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">By {post.author}</p>
                  </CardFooter>
                </Card>
              ))}
        </div>
      )}
      ;
    </div>
  );
};

export default Blogs;
