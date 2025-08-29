import React, { useState } from 'react';
import { Calendar, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '2025 Interior Design Trends: What\'s Hot This Year',
    excerpt: 'Discover the latest trends shaping interior design, from warm earth tones to sustainable materials and biophilic design elements.',
    author: 'Sarah Singh',
    date: 'January 15, 2025',
    category: 'Trends',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
  },
  {
    id: 2,
    title: 'Creating Harmony: Balancing Function and Beauty',
    excerpt: 'Learn how to design spaces that are both stunning and practical, with expert tips on layout, storage, and flow.',
    author: 'Sarah Singh',
    date: 'January 10, 2025',
    category: 'Tips',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
  },
  {
    id: 3,
    title: 'Sustainable Design: Luxury Meets Responsibility',
    excerpt: 'Explore how luxury interior design can embrace sustainability without compromising on style or comfort.',
    author: 'Design Team',
    date: 'January 5, 2025',
    category: 'Sustainability',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
  },
  {
    id: 4,
    title: 'Color Psychology in Interior Design',
    excerpt: 'Understanding how different colors affect mood and energy levels can transform how you feel in your space.',
    author: 'Sarah Singh',
    date: 'December 28, 2024',
    category: 'Color Theory',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
  },
  {
    id: 5,
    title: 'Small Space, Big Impact: Maximizing Every Square Foot',
    excerpt: 'Clever design strategies to make small spaces feel larger, more functional, and absolutely beautiful.',
    author: 'Design Team',
    date: 'December 20, 2024',
    category: 'Tips',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
  },
  {
    id: 6,
    title: 'The Art of Lighting: Setting the Perfect Mood',
    excerpt: 'Master the fundamentals of lighting design to create ambiance and enhance the beauty of your interiors.',
    author: 'Sarah Singh',
    date: 'December 15, 2024',
    category: 'Lighting',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
  }
];

const categories = ['All', 'Trends', 'Tips', 'Sustainability', 'Color Theory', 'Lighting'];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-sage-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-ivory mb-6">
            <span className="font-serif">Design</span>
            <span className="font-sans ml-2 text-deep-gold">Insights</span>
          </h1>
          <p className="text-xl text-warm-taupe max-w-3xl mx-auto">
            Expert insights, design tips, and inspiration to help you create beautiful, functional spaces that enhance your daily life.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-navy text-ivory text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Featured Article
              </span>
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                <span className="font-serif text-navy">{blogPosts[0].title}</span>
              </h2>
              <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center space-x-4 text-sm text-charcoal/60 mb-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <button className="bg-navy text-ivory px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors">
                Read Full Article
              </button>
            </div>
            <div>
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-warm-taupe border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-navy text-ivory'
                    : 'text-charcoal hover:bg-ivory'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sage-green text-ivory text-xs font-semibold px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-navy transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-charcoal/60">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ivory mb-4">
            <span className="font-serif">Stay</span>
            <span className="font-sans ml-2 text-deep-gold">Inspired</span>
          </h2>
          <p className="text-warm-taupe mb-8">
            Get our latest design insights, tips, and project updates delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-lg sm:rounded-r-none rounded-r-lg bg-ivory text-charcoal placeholder-charcoal/60 focus:outline-none focus:ring-2 focus:ring-deep-gold"
            />
            <button className="bg-deep-gold text-charcoal px-6 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg font-semibold hover:bg-deep-gold/90 transition-colors mt-2 sm:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;