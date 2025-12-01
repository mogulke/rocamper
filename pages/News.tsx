import React from 'react';
import { NEWS_ARTICLES } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Blog</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6">
            Latest <span className="text-primary">News</span> & Stories
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Tips, guides, and inspiration for your next outdoor expedition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS_ARTICLES.map((article, index) => (
            <article 
              key={article.id} 
              className="group cursor-pointer flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-dark uppercase tracking-wide">
                  {article.category}
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>

              <h2 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h2>

              <p className="text-gray-500 mb-6 line-clamp-2 flex-grow">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-2 text-dark font-bold text-sm group-hover:translate-x-2 transition-transform">
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;