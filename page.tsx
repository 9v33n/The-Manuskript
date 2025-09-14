import Link from 'next/link'
import { notFound } from 'next/navigation'

// Sample articles data
const sampleArticles = [
  {
    id: 1,
    title: "The Future of Remote Work",
    subtitle: "How technology is reshaping the workplace",
    content: `Remote work has fundamentally changed how we think about productivity, collaboration, and work-life balance. This comprehensive analysis explores the trends, challenges, and opportunities that lie ahead for distributed teams.

## Key Trends

1. **Hybrid Models**: Most companies are adopting flexible hybrid approaches
2. **Digital Tools**: Investment in collaboration software has skyrocketed
3. **Global Talent**: Access to worldwide talent pools has expanded

## Challenges to Address

- Maintaining company culture
- Ensuring effective communication
- Managing different time zones
- Providing adequate support for remote employees

## The Road Ahead

The future of work is undoubtedly more flexible, but it requires intentional design and thoughtful implementation to be successful.`,
    category: "business",
    author_name: "Sarah Johnson",
    author_email: "sarah@example.com",
    created_at: "2024-01-15",
    read_time: 8,
    featured: true,
    tags: ["remote-work", "productivity", "technology", "future-of-work"]
  },
  {
    id: 2,
    title: "Cryptocurrency Market Analysis",
    subtitle: "Understanding the current state of digital assets",
    content: `The cryptocurrency market continues to evolve rapidly, presenting both opportunities and challenges for investors. This analysis provides insights into current market conditions and future outlook.

## Market Overview

The total cryptocurrency market cap has shown significant volatility, with Bitcoin leading the charge and altcoins following various patterns.

## Key Factors

- Regulatory developments
- Institutional adoption
- Technological advancements
- Market sentiment

## Investment Strategies

Diversification remains key in the volatile crypto space, with careful consideration of risk tolerance and investment goals.`,
    category: "finance",
    author_name: "Michael Chen",
    author_email: "michael@example.com",
    created_at: "2024-01-10",
    read_time: 6,
    featured: true,
    tags: ["cryptocurrency", "investment", "blockchain", "trading"]
  }
]

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    business: 'bg-blue-100 text-blue-800',
    finance: 'bg-green-100 text-green-800',
    marketing: 'bg-purple-100 text-purple-800',
    technology: 'bg-gray-100 text-gray-800',
    sports: 'bg-orange-100 text-orange-800',
    culture: 'bg-pink-100 text-pink-800'
  }
  return colors[category] || 'bg-gray-100 text-gray-800'
}

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = sampleArticles.find(a => a.id === parseInt(params.id))

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link 
              href="/articles" 
              className="text-primary hover:text-primary-dark flex items-center"
            >
              ← Back to Articles
            </Link>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          
          {article.subtitle && (
            <p className="text-xl text-gray-600 mb-6">
              {article.subtitle}
            </p>
          )}
          
          <div className="flex items-center justify-between text-sm text-gray-500 border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-4">
              <span>By <strong>{article.author_name}</strong></span>
              <span>•</span>
              <span>{new Date(article.created_at).toLocaleDateString()}</span>
              <span>•</span>
              <span>{article.read_time} min read</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
          />
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to share your own insights?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join our community of writers and publish your own articles on Manuskript.
          </p>
          <Link href="/articles/new" className="btn-secondary bg-white text-primary hover:bg-gray-100">
            Write an Article
          </Link>
        </div>
      </div>
    </div>
  )
}

function formatContent(content: string): string {
  return content
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-6">$1</h1>')
    .replace(/^\d+\.\s(.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/^-\s(.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/^<li/gm, '<ul class="list-disc list-inside mb-4"><li')
    .replace(/<\/li>(?!\s*<li)/g, '</li></ul>')
    .replace(/^<p>/g, '<p class="mb-4">');
}
