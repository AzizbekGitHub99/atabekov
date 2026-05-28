'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Scale,
  Flame,
  Clock,
  ListChecks,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Thermometer,
  Truck,
  ArrowRight
} from 'lucide-react'
import { useLang } from '@/context/LangContext'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import { type ProductItem } from '@/components/sections/Products'

export default function ProductDetailPage() {
  const { t } = useLang()
  const params = useParams()
  const router = useRouter()
  const productId = Number(params.id)

  // Find product details
  const product = t.products.items.find((item) => item.id === productId) as ProductItem | undefined

  if (!product) {
    return (
      <>
        <CustomCursor />
        <Header />
        <main className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-bg-main dark:bg-bg-dark">
          <div className="text-center px-4 animate-scaleIn">
            <h1 className="font-serif font-black text-3xl sm:text-4xl text-text-main dark:text-text-dark mb-4">
              Mahsulot topilmadi
            </h1>
            <p className="text-text-muted max-w-sm mx-auto mb-6 text-sm">
              {"Siz qidirgan mahsulot tizimda mavjud emas yoki o'chirilgan bo'lishi mumkin."}
            </p>
            <Link href="/products" className="btn-primary text-xs px-6 py-2.5">
              Katalogga qaytish
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Get categories key translation mapping
  const categoryLabel = t.products.categories[product.category as keyof typeof t.products.categories] || product.category

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
          
          {/* Back link */}
          <div className="mb-8 animate-fadeIn">
            <Link
              href="/products"
              id="back-catalog-link"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-accent transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              {t.products.single.backBtn}
            </Link>
          </div>

          {/* Main Product Layout */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left: Product Image (Large aspect) */}
            <div className="lg:col-span-6 animate-fadeInLeft">
              <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-border-light dark:border-border-dark group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                
                {/* Halal Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="halal-badge text-sm px-4 py-2 bg-black/40 backdrop-blur-md">
                    {t.products.halal}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Product details and metadata */}
            <div className="lg:col-span-6 space-y-8 animate-fadeInRight">
              
              {/* Category & Title */}
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-accent border border-accent/30 bg-accent/8">
                  {categoryLabel}
                </span>
                <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-text-main dark:text-text-dark">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base text-text-muted dark:text-text-dark-muted leading-relaxed">
                  {product.desc}
                </p>
              </div>

              {/* Specifications Cards Grid */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-main dark:text-text-dark border-b border-border-light dark:border-border-dark pb-2">
                  Xususiyatlari
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { icon: Scale, label: t.products.single.weightLabel, value: product.weight },
                    { icon: Flame, label: t.products.single.caloriesLabel, value: product.calories },
                    { icon: Clock, label: t.products.single.shelfLabel, value: product.shelf },
                    { icon: ListChecks, label: t.products.single.ingredientsLabel, value: product.ingredients },
                  ].map(({ icon: Icon, label, value }, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-bg-card dark:bg-bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:border-accent/35 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-xl bg-accent/8 dark:bg-accent/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-accent" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] text-text-muted dark:text-text-dark-muted uppercase tracking-wider">{label}</div>
                        <div className="text-sm font-bold text-text-main dark:text-text-dark leading-tight mt-0.5">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information (Long info) */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-main dark:text-text-dark border-b border-border-light dark:border-border-dark pb-2">
                  {"Batafsil ma'lumot"}
                </h3>
                <div className="space-y-3.5 text-xs sm:text-sm">
                  {/* Storage */}
                  <div className="flex gap-3">
                    <Thermometer size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-text-main dark:text-text-dark">{t.products.single.storage}: </span>
                      <span className="text-text-muted dark:text-text-dark-muted">{t.products.single.storageValue}</span>
                    </div>
                  </div>
                  {/* Certifications */}
                  <div className="flex gap-3">
                    <ShieldCheck size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-text-main dark:text-text-dark">{t.products.single.certifications}: </span>
                      <span className="text-text-muted dark:text-text-dark-muted">{t.products.single.certificationsValue}</span>
                    </div>
                  </div>
                  {/* Delivery */}
                  <div className="flex gap-3">
                    <Truck size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-text-main dark:text-text-dark">{t.products.single.delivery}: </span>
                      <span className="text-text-muted dark:text-text-dark-muted">{t.products.single.deliveryValue}</span>
                    </div>
                  </div>
                </div>
              </div>



            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
