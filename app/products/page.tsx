'use client'

import { useState } from 'react'
import { Search, X, ArrowLeft, Heart, Sparkles } from 'lucide-react'
import { useLang } from '@/context/LangContext'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import { ProductCard, type ProductItem } from '@/components/sections/Products'
import Link from 'next/link'

export default function ProductsPage() {
  const { t } = useLang()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Categories list
  const categoryKeys = Object.keys(t.products.categories) as Array<keyof typeof t.products.categories>

  // Filter products based on category and search query
  const filteredProducts = t.products.items.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
  }

  return (
    <>
      <CustomCursor />
      <Header />

      <main className="relative min-h-screen pt-32 pb-24 bg-bg-main dark:bg-bg-dark overflow-hidden bg-pattern">
        {/* Background gradients */}
        <div className="absolute top-0 right-[-10%] w-[700px] h-[700px] rounded-full opacity-10 dark:opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C5A059 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-10 left-[-10%] w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #7A0016 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs / Back Link */}
          <div className="mb-8 animate-fadeIn">
            <Link
              href="/"
              id="back-home-link"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-accent transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              {t.hero.ctaSecondary}
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-accent border border-accent/25 bg-accent/8 mb-5">
              <Sparkles size={12} className="animate-pulse" />
              {t.products.tag}
            </span>
            <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-text-main dark:text-text-dark mb-4">
              {t.products.title}{' '}
              <span className="gradient-text">{t.products.titleAccent}</span>
            </h1>
            <p className="text-text-muted dark:text-text-dark-muted max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              {t.products.subtitle}
            </p>
            <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          {/* Search Box and Controls */}
          <div className="max-w-xl mx-auto mb-12 relative z-10 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="relative group">
              <input
                type="text"
                id="product-search-input"
                placeholder={t.products.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-4 rounded-2xl border border-border-light dark:border-border-dark bg-white/70 dark:bg-[#161618]/70 backdrop-blur-md text-text-main dark:text-text-dark shadow-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all duration-300 placeholder-text-muted"
              />
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors" />
              {searchQuery && (
                <button
                  id="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {categoryKeys.map((key) => {
              const active = selectedCategory === key
              return (
                <button
                  key={key}
                  id={`cat-tab-${key}`}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all duration-300 ${
                    active
                      ? 'bg-accent/10 border-accent text-accent shadow-sm shadow-accent/10'
                      : 'border-border-light dark:border-border-dark bg-transparent text-text-muted hover:text-accent hover:border-accent'
                  }`}
                >
                  {t.products.categories[key]}
                </button>
              )
            })}
          </div>

          {/* Catalog Grid */}
          {filteredProducts.length > 0 ? (
            <div
              id="products-catalog-grid"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fadeInUp"
              style={{ animationDelay: '0.3s' }}
            >
              {filteredProducts.map((item, i) => (
                <ProductCard key={item.id} item={item as ProductItem} index={i} t={t} />
              ))}
            </div>
          ) : (
            /* No results state */
            <div className="text-center py-20 animate-scaleIn">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-border-light dark:border-border-dark bg-bg-card dark:bg-bg-card-dark text-text-muted mb-6">
                <Search size={28} />
              </div>
              <h3 className="font-serif font-bold text-2xl text-text-main dark:text-text-dark mb-2">
                {t.products.noResults}
              </h3>
              <p className="text-text-muted max-w-sm mx-auto text-sm leading-relaxed mb-6">
                {"Qidiruv so'zini o'zgartirib ko'ring yoki barcha mahsulotlarni ko'rish uchun filtrlarni tozalang."}
              </p>
              <button
                id="clear-filters-btn"
                onClick={clearFilters}
                className="btn-primary text-xs px-6 py-2.5"
              >
                Filtrlarni tozalash
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  )
}
