export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Manuskript</h3>
            <p className="text-gray-600 text-sm">
              Publish anything - A minimalist platform for sharing knowledge across business, technology, culture, and more.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Browse</h4>
            <ul className="space-y-2">
              <li><a href="/articles" className="text-sm text-gray-600 hover:text-gray-900">All Articles</a></li>
              <li><a href="/articles/new" className="text-sm text-gray-600 hover:text-gray-900">Create Article</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/articles?category=business" className="text-sm text-gray-600 hover:text-gray-900">Business</a></li>
              <li><a href="/articles?category=technology" className="text-sm text-gray-600 hover:text-gray-900">Technology</a></li>
              <li><a href="/articles?category=culture" className="text-sm text-gray-600 hover:text-gray-900">Culture</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © 2024 Manuskript. Built with Next.js and Supabase.
          </p>
        </div>
      </div>
    </footer>
  )
}
