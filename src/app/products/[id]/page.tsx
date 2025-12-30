import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation />

      {/* Breadcrumbs */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-3 sm:py-4 md:py-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm md:text-base">
          <Link href="/" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors font-medium leading-normal">
            Home
          </Link>
          <span className="text-text-muted-light dark:text-text-muted-dark font-medium leading-normal">/</span>
          <Link href="/products" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors font-medium leading-normal">
            Rings
          </Link>
          <span className="text-text-muted-light dark:text-text-muted-dark font-medium leading-normal">/</span>
          <span className="text-text-main-light dark:text-white font-medium leading-normal">Imperial Topaz Ring</span>
        </div>
      </div>

      {/* Main Product Section: Split Screen */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-16 items-start">
          {/* Left: Gallery (60% width roughly on large screens) */}
          <div className="lg:col-span-7 w-full flex flex-col gap-3 sm:gap-4 md:gap-6">
            {/* Main Hero Image */}
            <div className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/3] relative rounded-lg overflow-hidden group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx9uDpqOf5ZYOioYIUZYx6WY8R5PPK_r3Lzt8BjjYE9x4HzIvGeEfjPe7wp4AMBDNqFlOTf_XaH6LyysFTJAt7OVJoSL4Wly2UDLiiQxJADp3LrGwDeMnw34js0nxUh2diGYooGKqOOI-LHWEjxubwu2IasG42oTiqs7mm-uLW6RssGJuGOuCvgtJcQMvu0h2CsVWVaXhgB9uEHoIjQkDfpBWI-92TZA0JWbC28vzNjKSz-HdRl7yDfxDTG4IXONYAd7gR1fo8ugs"
                alt="Close up of a luxury gold diamond ring on a dark reflective surface"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <button className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-background-dark/80 text-white p-2 rounded-sm hover:bg-primary hover:text-black transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            {/* Secondary Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="w-full aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP7JE9p0wkYjeIC6Vo_rJSTOSd87dLpuNReUeBDE2sD5QPSm5-E9c-KFoYcy6FqPUHzY5ZlHvMOGSz6p5AgzLrJuGP1cIReQRs0ge5sbOyCvuUnHBVs0oQ_PoKSy9W95Z5UzAiGCUE2u82Da2cgcUMyzSYbhGmVpdW_YauNyGGAMZSz-jmLrzBluoSknBKgEqcCvJ6WqU-yKU6s7e6R_TA6-DXWDz1jYDf_pHOWwEeDQ7QtQJvIkhPWDXXotWq2rcXfUmxbAo_zK4"
                  alt="A woman elegantly wearing a gold ring on her hand"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
              <div className="w-full aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABtPdXvkksgRKVU0s7m29h5_RfXbLiMPsg98_s3tdqvPsw_NKFHDA1ay20A3_BpWaidr4JQlOZ8VlkW8LPa7nX4Gt8Sto8vN35VkTZynmtl9WFW0WBY9kWE7JhTHRcTsNYr9wTMEMehzNlImEEgFLlWxsC7OZH5Wxwi-9bBkXBBdE7HUJB1mAYpHjF7TT_Blimq5qE_ax7x8LtscXoBwzM9lCcKDEZSjTF2x3EPr2jOxnT6Pmc8X8jB7ODAnfTcYH9iT1tzUaZNTE"
                  alt="Macro detail shot of the ring setting and diamond clarity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
            </div>
            {/* Full Width Editorial Image */}
            <div className="w-full aspect-video md:aspect-[21/9] relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573408301185-a1d31e66c547?q=80&w=2070&auto=format&fit=crop"
                alt="Abstract golden light reflecting off jewelry textures in dark environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 text-white max-w-md">
                <p className="font-display text-xs sm:text-sm uppercase tracking-widest text-primary mb-1 sm:mb-2">Artistry</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light opacity-90">Crafted with precision, designed for eternity.</p>
              </div>
            </div>
          </div>

          {/* Right: Sticky Product Info (40% width roughly) */}
          <div className="lg:col-span-5 relative h-full">
            <div className="lg:sticky lg:top-24 flex flex-col gap-6 sm:gap-8 md:gap-10 pb-8 sm:pb-12">
              {/* Header & Price */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 sm:pb-6">
                <h1 className="text-text-main-light dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-light leading-tight mb-3 sm:mb-4 tracking-tight">
                  The Imperial Topaz Ring
                </h1>
                <p className="text-primary text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">$12,500</p>
                <p className="text-text-muted-light dark:text-text-muted-dark mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed font-light">
                  An exquisite masterpiece featuring a rare 5-carat imperial topaz, haloed by brilliant-cut diamonds. Set in 18k recycled yellow gold, this piece embodies the timeless elegance of the Golden Legacy collection.
                </p>
              </div>

              {/* Selectors */}
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-end">
                    <label className="text-text-main-light dark:text-white text-xs sm:text-sm font-bold uppercase tracking-wider">Metal</label>
                    <span className="text-text-muted-light dark:text-text-muted-dark text-xs cursor-pointer hover:text-primary transition-colors">Material Guide</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <button className="py-2 sm:py-3 px-2 border border-primary bg-primary/20 text-text-main-light dark:text-white text-xs sm:text-sm font-medium rounded-sm flex flex-col items-center gap-1 min-h-[60px] sm:min-h-[70px]">
                      <span className="size-3 sm:size-4 rounded-full bg-[#E6C200] block"></span>
                      18k Yellow
                    </button>
                    <button className="py-2 sm:py-3 px-2 border border-gray-300 dark:border-gray-600 hover:border-accent-gold bg-transparent text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-white transition-colors text-xs sm:text-sm font-medium rounded-sm flex flex-col items-center gap-1 min-h-[60px] sm:min-h-[70px]">
                      <span className="size-3 sm:size-4 rounded-full bg-[#E1E1E1] block"></span>
                      18k White
                    </button>
                    <button className="py-2 sm:py-3 px-2 border border-gray-300 dark:border-gray-600 hover:border-accent-gold bg-transparent text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-white transition-colors text-xs sm:text-sm font-medium rounded-sm flex flex-col items-center gap-1 min-h-[60px] sm:min-h-[70px]">
                      <span className="size-3 sm:size-4 rounded-full bg-[#E6A57E] block"></span>
                      18k Rose
                    </button>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-end">
                    <label className="text-text-main-light dark:text-white text-xs sm:text-sm font-bold uppercase tracking-wider">Ring Size</label>
                    <span className="text-text-muted-light dark:text-text-muted-dark text-xs cursor-pointer hover:text-primary transition-colors">Size Guide</span>
                  </div>
                  <div className="relative">
                    <select className="w-full bg-white dark:bg-[#2d2416] border border-gray-300 dark:border-gray-600 text-text-main-light dark:text-white py-2 sm:py-3 pl-3 sm:pl-4 pr-8 sm:pr-10 rounded-sm focus:border-primary focus:ring-0 outline-none cursor-pointer text-sm min-h-[44px]">
                      <option>US 4</option>
                      <option>US 5</option>
                      <option selected>US 6 (Standard)</option>
                      <option>US 7</option>
                      <option>US 8</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <button className="w-full bg-primary hover:bg-primary-hover text-white h-12 sm:h-[56px] flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] transition-all rounded-sm px-4 sm:px-6">
                  <span>Add to Bag</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <div className="flex items-center justify-center gap-4 sm:gap-6 mt-1 sm:mt-2">
                  <button className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs uppercase tracking-wider font-medium transition-colors min-h-[44px]">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Wishlist
                  </button>
                  <button className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs uppercase tracking-wider font-medium transition-colors min-h-[44px]">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                  </button>
                </div>
              </div>

              {/* Details Accordion */}
              <div className="border-t border-gray-200 dark:border-gray-700 mt-3 sm:mt-4">
                <details className="group py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer">
                  <summary className="flex items-center justify-between font-bold text-text-main-light dark:text-white text-xs sm:text-sm uppercase tracking-wider list-none min-h-[44px]">
                    <span>Description & Details</span>
                    <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform text-text-muted-light dark:text-text-muted-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="pt-3 sm:pt-4 text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm leading-relaxed">
                    Hand-selected Imperial Topaz from Brazil. VS1 clarity diamonds total 0.50ct. Hallmarked 18k gold. Each piece is unique and may vary slightly in color.
                  </div>
                </details>
                <details className="group py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer">
                  <summary className="flex items-center justify-between font-bold text-text-main-light dark:text-white text-xs sm:text-sm uppercase tracking-wider list-none min-h-[44px]">
                    <span>Shipping & Returns</span>
                    <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform text-text-muted-light dark:text-text-muted-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="pt-3 sm:pt-4 text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm leading-relaxed">
                    Complimentary insured shipping worldwide. Returns accepted within 30 days of delivery for unworn items in original packaging.
                  </div>
                </details>
                <details className="group py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer">
                  <summary className="flex items-center justify-between font-bold text-text-main-light dark:text-white text-xs sm:text-sm uppercase tracking-wider list-none min-h-[44px]">
                    <span>Authenticity</span>
                    <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform text-text-muted-light dark:text-text-muted-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="pt-3 sm:pt-4 text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm leading-relaxed">
                    Includes a GIA certificate of authenticity and a Golden Legacy heritage booklet documenting the sourcing journey.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contextual Banner */}
      <section className="w-full relative h-[40vh] sm:h-[50vh] md:h-[60vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden my-8 sm:my-12">
        <div className="relative w-full h-full">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7H9vTH0SWls37EpIceLDIb9ssiBYagemyX1yRJMYUaI392D0CSBVqt2OU0VJrWT78zIe6KJZulCWEOXhDtSpVFM6IO6p_lNTmxELmb6D5TdsDzuNpfPYqjt-Iqh-dBcx8Ii8crY-2XMNFwDq2ehf_P2SaBHDlGoiiC75aAEfuUBMG8iPi7GBQdN_xjNkRD_VVOaBX482rrcIfrHyQpUtsxlbzFpoSSmM_cEvbUW7nrnVw1O1cIalth8FipeH-XEzksWd0Ol0FG3o"
            alt="Cinematic shot of a model wearing luxury jewelry in a golden hour setting"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <p className="text-primary uppercase tracking-[0.2em] text-xs sm:text-sm mb-3 sm:mb-4 font-bold">The Collection</p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight mb-6 sm:mb-8">Forged in Heritage</h2>
          <Link href="/products" className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 border border-white text-white hover:bg-white hover:text-black transition-colors uppercase text-xs sm:text-sm font-bold tracking-widest rounded-sm min-h-[44px]">
            Discover the Story
          </Link>
        </div>
      </section>

      {/* Recommendations: "Completing the Set" */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 md:pb-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-4">
          <h3 className="text-text-main-light dark:text-white text-xl sm:text-2xl md:text-3xl font-display font-light">Completing the Set</h3>
          <Link href="/products" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors text-xs sm:text-sm font-bold uppercase tracking-wider">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-square w-full relative overflow-hidden bg-[#f5f0e6] dark:bg-[#2d2416] mb-3 sm:mb-4 rounded-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi3_28mMBwKaUkMSYaAMYpo8MmiO2bot_f9X9wBeDz4CTi5_VxSQuXqIvd4WNcriTiKcTN9kWCX1zlau35Uo2oZ9UABxKbiURymI6iTcQhAU4XP7XlGt9yPbugoB6aXG5svKNsJx3n8IEy5ok13o3M3cveU6NP7Y37_WYTdpdMl2tbaEbg-NXfTywgl_tOl_NOeVMeoqKN6bt1c1gHqfbqRYU27PsR4E_0Cn0SwyuIOyVRmdbD4aTfHtO47RhYPOgDx36O7Z_TdBk"
                alt="Golden earrings with topaz gemstones"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 p-2 rounded-full hover:bg-primary text-black min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-text-main-light dark:text-white text-sm sm:text-lg font-medium mb-1 group-hover:text-primary transition-colors">Imperial Earrings</h4>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm">$8,900</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-square w-full relative overflow-hidden bg-[#f5f0e6] dark:bg-[#2d2416] mb-3 sm:mb-4 rounded-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBdMvN4WfQ7rwVlZVvaBsNOGqMLjrf-VFnscEZ43cd-LqQ9GtvK9pgYspP2ua12aHDOisJng2p727pWRT2B5AVQIW5NoZ6L2kr52GmjWgG-t1am4sWCpYOh5BPcGhVzMWOV6B4JpqPBfGMuYMiA489lehapmZXTMoE2L7wVGrl1BXRp9XQyInwY68YmgEHEZLAhWjhe5v6LP8ki4qT87-kNdn4iSb5Ana_LV670Q8LCTcD425DPgAGgOq1V96JhtvNHT1NwjwlrPE"
                alt="Gold necklace pendant on dark background"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 p-2 rounded-full hover:bg-primary text-black min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-text-main-light dark:text-white text-sm sm:text-lg font-medium mb-1 group-hover:text-primary transition-colors">Heritage Pendant</h4>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm">$6,200</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-square w-full relative overflow-hidden bg-[#f5f0e6] dark:bg-[#2d2416] mb-3 sm:mb-4 rounded-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARHI1q2fiuBqUR8jR7Og_VZWBA1C5ryVanaNFs18Bjx8zYBk4igWp6js6nlCGsWMRNmapVsegSpLuqw_Q-mZJK_FK6Qx1DIRIXJ7V6eXFyIN0pKVBB-Cj3zVWtNncfdQ4zjqtR07OFFaCF_tXkpJLyK8wju_CEAI5gFm8K8_PiXRAEiq2WwbWCCBC5LP_boiMgk3luRxb39A4AszbK6xtrUuaBbxyxjnlHPTK2RvlDxlu4oc30g3odROap29wvvMyue_aDtcOtuiU"
                alt="Stackable gold bracelets on wrist"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 p-2 rounded-full hover:bg-primary text-black min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-text-main-light dark:text-white text-sm sm:text-lg font-medium mb-1 group-hover:text-primary transition-colors">Eternal Bangle</h4>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm">$14,500</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group cursor-pointer">
            <div className="aspect-square w-full relative overflow-hidden bg-[#f5f0e6] dark:bg-[#2d2416] mb-3 sm:mb-4 rounded-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlYJYF1qd5OiwQppaHSUfbBUbSE6MwK77sQnZyo03rd3FaJWE7nCpW7W4Ug8h0-AoeHVYulzoA6cdDjockLCz2ORn5VogsPW1Um0nzIro25Qpim4m4-PhlepGQhvDHMMFnty8VqPzQBxUpukdSF1epeo2lpfZUy9xIXQD8ZoWaAVmMc1OkIsrN7Dxvc8vovQsYdLmEzut8n0sKPNSMeG9e1x9D-0UcZgqqua5xAOLAepmfuAHoNaB7LNmepv-MiUIqbqJTo4cePSE"
                alt="Simple gold band ring"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 p-2 rounded-full hover:bg-primary text-black min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-text-main-light dark:text-white text-sm sm:text-lg font-medium mb-1 group-hover:text-primary transition-colors">Classic Band</h4>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm">$3,200</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

