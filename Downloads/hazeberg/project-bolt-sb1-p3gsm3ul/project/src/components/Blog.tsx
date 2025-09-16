import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 'digital-transformation-2024',
      title: 'Digital Transformation Trends Shaping 2024',
      excerpt: 'Explore the latest digital transformation trends that are revolutionizing businesses across industries and how to leverage them for competitive advantage.',
      author: 'Maria Rodriguez',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Digital Strategy',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: true
    },
    {
      id: 'workday-implementation-guide',
      title: 'Complete Guide to Successful Workday Implementation',
      excerpt: 'A comprehensive roadmap for organizations planning their Workday implementation, covering best practices, common pitfalls, and success strategies.',
      author: 'James Chen',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'HR Technology',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: false
    },
    {
      id: 'cloud-migration-strategies',
      title: 'Cloud Migration Strategies for Enterprise Success',
      excerpt: 'Learn proven strategies for migrating enterprise applications to the cloud while minimizing risks and maximizing business value.',
      author: 'Sarah Williams',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Cloud Solutions',
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: false
    },
    {
      id: 'operational-excellence-framework',
      title: 'Building an Operational Excellence Framework',
      excerpt: 'Discover how to create and implement a robust operational excellence framework that drives continuous improvement and sustainable growth.',
      author: 'David Thompson',
      date: '2023-12-28',
      readTime: '15 min read',
      category: 'Operations',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: false
    },
    {
      id: 'ai-business-transformation',
      title: 'AI-Driven Business Transformation: A Practical Approach',
      excerpt: 'How artificial intelligence is reshaping business processes and what leaders need to know to successfully integrate AI into their operations.',
      author: 'Maria Rodriguez',
      date: '2023-12-20',
      readTime: '11 min read',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: false
    },
    {
      id: 'change-management-best-practices',
      title: 'Change Management Best Practices for Digital Age',
      excerpt: 'Essential change management strategies that help organizations navigate digital transformation while maintaining employee engagement and productivity.',
      author: 'James Chen',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Change Management',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: false
    }
  ];

  const categories = ['All', 'Digital Strategy', 'HR Technology', 'Cloud Solutions', 'Operations', 'Innovation', 'Change Management'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleReadMore = (postId: string) => {
    // Navigate to the blog HTML files in the blog directory
    window.open(`blog/${postId}.html`, '_blank');
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-yellow-200 to-orange-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest <span className="text-yellow-500">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with our expert analysis, industry trends, and practical insights 
              to help you navigate the evolving business landscape.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 hover:shadow-md'
                } liquid-hover`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {selectedCategory === 'All' && (
            <div className="mb-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <div key={post.id} className="glossy-card liquid-hover vibrant-hover golden-hover rounded-3xl overflow-hidden border border-yellow-200">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={16} className="mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{post.author}</div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Clock size={14} className="mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleReadMore(post.id)}
                          className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center liquid-hover"
                        >
                          Read More
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured || selectedCategory !== 'All').map((post, index) => (
              <article key={post.id} className="group glossy-card liquid-hover vibrant-hover golden-hover rounded-2xl overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 relative">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-yellow-600 transition-colors duration-300 relative z-10">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{post.author}</span>
                    </div>
                    
                    <button
                      onClick={() => handleReadMore(post.id)}
                      className="group text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300 flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={14} />
                    </button>
                  </div>
                </div>
                
                {/* Blog Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75 z-20">
                  Article
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 liquid-hover">
              Load More Articles
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 md:p-12 text-white liquid-hover vibrant-hover border border-yellow-400">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with Our Insights
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest industry insights, 
                trends, and expert advice delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-4 rounded-full text-gray-900 focus:ring-4 focus:ring-white/30 focus:outline-none transition-all duration-300"
                />
                <button className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 liquid-hover whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;