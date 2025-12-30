import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background-dark/90 z-10"></div>
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2QVmxViLOCAMEAczUllpj-BaN3R58dNJQAZ499j2AMV8UVnUxAc9Xsqit7-c40bd3-awAuqYNuUgJK6-gPIRmHxErYiLEyRhfI8uymfJ2bikmy7Xkcz_H77c9yAx9sYajxnyB4fcRGEwdxDQSda8a12C9aVxvQkhxDgKZ3TapqZ-T5R7zh3WztYMrQHCJx04cvQxjzfRhpi8NjZGn_N-pN2nMRqNJbTq52zZgru_EXNdOVyRPuECPIRX2J2U_uXWtuqivjKvACLM"
            alt="Abstract golden luxury texture background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-3 sm:mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white">
            The Gold Collection
          </h1>
          <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-200/90 sm:text-text-muted-dark">
            Timeless elegance tailored for you. Discover pieces that embody luxury and sophistication.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[73px] z-40 w-full border-b border-gray-200 dark:border-gray-700 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-auto md:h-16 items-start md:items-center justify-between px-4 sm:px-6 md:px-12 py-3 md:py-0 gap-3 md:gap-0">
          <div className="hidden md:flex items-center gap-6 md:gap-10 w-full md:w-auto">
            <div className="group relative h-full flex items-center">
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors min-h-[44px]">
                Category <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="group relative h-full flex items-center">
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors min-h-[44px]">
                Material <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="group relative h-full flex items-center">
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors min-h-[44px]">
                Price <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <button className="flex md:hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-main-light dark:text-white min-h-[44px]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>
          <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
            <span className="hidden lg:block text-xs font-medium text-text-muted-light dark:text-text-muted-dark/70">Showing 6 of 48 Products</span>
            <div className="flex items-center gap-2 sm:gap-3 border-l border-gray-200 dark:border-gray-700 pl-4 sm:pl-6 h-8">
              <span className="text-xs text-text-muted-light dark:text-text-muted-dark">Sort by:</span>
              <select className="bg-transparent text-xs font-bold text-text-main-light dark:text-white focus:outline-none cursor-pointer uppercase tracking-wider border-none min-h-[44px]">
                <option className="bg-background-light dark:bg-background-dark">Featured</option>
                <option className="bg-background-light dark:bg-background-dark">Newest</option>
                <option className="bg-background-light dark:bg-background-dark">Price: Low - High</option>
                <option className="bg-background-light dark:bg-background-dark">Price: High - Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto flex w-full flex-col px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:gap-x-8 gap-y-16 sm:gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product 1 */}
          <div className="group flex flex-col gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#f5f0e6] dark:bg-[#1a150d]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U"
                alt="Close up of a luxury gold necklace with diamond pendant"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-transparent">
                <Link href="/products/1" className="w-full bg-white py-3 sm:py-4 text-xs font-bold uppercase tracking-[0.15em] text-black hover:bg-primary hover:text-white transition-colors shadow-xl rounded-sm text-center min-h-[44px] flex items-center justify-center">
                  Quick View
                </Link>
              </div>
              <button className="absolute right-3 sm:right-4 top-3 sm:top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-primary transition-colors opacity-0 group-hover:opacity-100 duration-300 min-w-[44px] min-h-[44px]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base sm:text-lg font-display font-medium text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">Celestial Pendant</h3>
                <span className="text-base sm:text-lg font-bold text-primary">$2,400</span>
              </div>
              <p className="text-xs sm:text-sm font-light text-text-muted-light dark:text-text-muted-dark">18k Gold & Diamonds</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group flex flex-col gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#f5f0e6] dark:bg-[#1a150d]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEVvepFADE_UumZT2VDVYmV41mRiRoC9tQx0xYyeQjWkkHG_XgmYXQThVfYLm9EZqtxrf4tz1inPsAw4WE4OmWI0IFQzucFU9yRpK31OoGoIPPy1gpD6WXlDefjCXXBlW4ETSIo09PTAr9OB5EFxenVkd3pliZZuxSYelnMipT0Lx6nI9JavkCnCJwUJ8z8-wV1_TnxzbkBx8vYredEWA2sDA23SLsVP5AWSl_7UHSusLwLNcI8hSVr__PztoklsWg30Zrmfq0wkk"
                alt="Elegant gold bracelet on dark background"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-transparent">
                <Link href="/products/2" className="w-full bg-white py-3 sm:py-4 text-xs font-bold uppercase tracking-[0.15em] text-black hover:bg-primary hover:text-white transition-colors shadow-xl rounded-sm text-center min-h-[44px] flex items-center justify-center">
                  Quick View
                </Link>
              </div>
              <button className="absolute right-3 sm:right-4 top-3 sm:top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-primary transition-colors opacity-0 group-hover:opacity-100 duration-300 min-w-[44px] min-h-[44px]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base sm:text-lg font-display font-medium text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">Eternity Bangle</h3>
                <span className="text-base sm:text-lg font-bold text-primary">$5,200</span>
              </div>
              <p className="text-xs sm:text-sm font-light text-text-muted-light dark:text-text-muted-dark">24k Solid Gold</p>
            </div>
          </div>

          {/* Editorial Card */}
          <div className="relative flex flex-col justify-end overflow-hidden rounded-lg bg-[#f5f0e6] dark:bg-[#1a150d] min-h-[400px] sm:min-h-[500px] group cursor-pointer">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2QVmxViLOCAMEAczUllpj-BaN3R58dNJQAZ499j2AMV8UVnUxAc9Xsqit7-c40bd3-awAuqYNuUgJK6-gPIRmHxErYiLEyRhfI8uymfJ2bikmy7Xkcz_H77c9yAx9sYajxnyB4fcRGEwdxDQSda8a12C9aVxvQkhxDgKZ3TapqZ-T5R7zh3WztYMrQHCJx04cvQxjzfRhpi8NjZGn_N-pN2nMRqNJbTq52zZgru_EXNdOVyRPuECPIRX2J2U_uXWtuqivjKvACLM"
              alt="Abstract Luxury"
              fill
              className="object-cover opacity-70 transition-transform duration-[2s] group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
            <div className="relative z-10 p-6 sm:p-8 md:p-10">
              <span className="mb-2 sm:mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-primary">The Collection</span>
              <h3 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-display font-light text-white leading-tight">Golden<br/>Standards</h3>
              <Link href="/products" className="inline-flex items-center gap-2 sm:gap-3 text-xs font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors min-h-[44px]">
                Discover More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group flex flex-col gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#f5f0e6] dark:bg-[#1a150d]">
              <div className="absolute left-3 sm:left-4 top-3 sm:top-4 z-20">
                <span className="bg-primary/90 backdrop-blur px-2 sm:px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg rounded-sm">New</span>
              </div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI"
                alt="Luxurious diamond ring shot on dark surface"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-transparent">
                <Link href="/products/3" className="w-full bg-white py-3 sm:py-4 text-xs font-bold uppercase tracking-[0.15em] text-black hover:bg-primary hover:text-white transition-colors shadow-xl rounded-sm text-center min-h-[44px] flex items-center justify-center">
                  Quick View
                </Link>
              </div>
              <button className="absolute right-3 sm:right-4 top-3 sm:top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-primary transition-colors opacity-0 group-hover:opacity-100 duration-300 min-w-[44px] min-h-[44px]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base sm:text-lg font-display font-medium text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">Radiance Solitaire</h3>
                <span className="text-base sm:text-lg font-bold text-primary">$8,900</span>
              </div>
              <p className="text-xs sm:text-sm font-light text-text-muted-light dark:text-text-muted-dark">Platinum & Diamond</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group flex flex-col gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#f5f0e6] dark:bg-[#1a150d]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSSE_ewOI2HSQB04rsntQKaEMiiW61Uk_C-GlrRxRwhiIOoi5fOoK_s3VPCWtRJTbO0OPdmfgjTHHFEu-WiTPv4P5tW5mRNbIY7WEB8FlEb1kRnEgoK5FwhtU3ICDtVCw_W7xA2wCDbP_k_Cj4akj4Xtzoqu23zR9lczxcYlaNZegXTBsDMOTHbsIhrK8FGac3COmfzuFQMukv3rBbtG6iIl52nZPvHj9qwdc0FATsDHba4QUYwpchOgbb99DoICZnOGv8robuQcU"
                alt="Pair of minimalist gold earrings"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-transparent">
                <Link href="/products/4" className="w-full bg-white py-3 sm:py-4 text-xs font-bold uppercase tracking-[0.15em] text-black hover:bg-primary hover:text-white transition-colors shadow-xl rounded-sm text-center min-h-[44px] flex items-center justify-center">
                  Quick View
                </Link>
              </div>
              <button className="absolute right-3 sm:right-4 top-3 sm:top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-primary transition-colors opacity-0 group-hover:opacity-100 duration-300 min-w-[44px] min-h-[44px]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base sm:text-lg font-display font-medium text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">Aura Hoops</h3>
                <span className="text-base sm:text-lg font-bold text-primary">$1,850</span>
              </div>
              <p className="text-xs sm:text-sm font-light text-text-muted-light dark:text-text-muted-dark">18k Rose Gold</p>
            </div>
          </div>

          {/* Product 5 */}
          <div className="group flex flex-col gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#f5f0e6] dark:bg-[#1a150d]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfURgwQCUs2JrISBCmfwL8U3uL-3TcjeH0Zhq_qcjcKzTD1VbPRlJ5-vdML0mK-TJNLdAkO6zHAjCzGp1pIT_HdyNn1n5EBOWSyrupkKPUvzPXKzqUbQK00CiVkHYWwe2lxUGE9Gska4pbOzfKBJvnJWqxw0P2gdYpvHaTeA09PK9eJLlqlKCosLIdgcb61xlpZb6UMxVMA2pFiPbxzTOAB7EkFRl8pKI3LaGriNdGWYBazqlYFDVEQfFsIEi_vF-JwpqigW2Jqdw"
                alt="Close up of luxury watch with diamonds"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-transparent">
                <Link href="/products/5" className="w-full bg-white py-3 sm:py-4 text-xs font-bold uppercase tracking-[0.15em] text-black hover:bg-primary hover:text-white transition-colors shadow-xl rounded-sm text-center min-h-[44px] flex items-center justify-center">
                  Quick View
                </Link>
              </div>
              <button className="absolute right-3 sm:right-4 top-3 sm:top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-primary transition-colors opacity-0 group-hover:opacity-100 duration-300 min-w-[44px] min-h-[44px]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base sm:text-lg font-display font-medium text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">Heritage Timepiece</h3>
                <span className="text-base sm:text-lg font-bold text-primary">$12,500</span>
              </div>
              <p className="text-xs sm:text-sm font-light text-text-muted-light dark:text-text-muted-dark">Gold & Leather</p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="group relative overflow-hidden rounded-lg bg-[#f5f0e6] dark:bg-[#1a150d] sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row h-[500px] sm:h-[400px]">
            <div className="relative h-2/3 md:h-full w-full md:w-3/5 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6BxJ2gcD1U_l6JmkKOFDt4dK32w0pq13eIz8YENvebODlT21KufgA4q6YtFGU3Zz-r6_CJ_7Mmzm1fsx6jTJ2q957aPgMwup8Pd5lgKjIXGxaDkKcjb-Ge1eWYnsopz8e_16a5Zh8XRH6Qynbfn0tQ1_dOXa9FDhPEQuvJaz63jBq0f0YJ9zkNfEtrY6j3k7MbomztnM2CEVXq8-N6JkD4a0if0sRnYPhLgLpgm_6LZmnaPm-RCQqI0uI0mhZAiTts9B98-B1MwY"
                alt="A delicate gold necklace on a model"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="flex flex-1 flex-col justify-center bg-[#fcf7ef] dark:bg-[#15110a] p-6 sm:p-8 md:p-12 lg:p-16 border-l border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="h-[1px] w-6 sm:w-8 bg-primary"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent-gold">Editor's Pick</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-text-main-light dark:text-text-main-dark mb-2 sm:mb-3">Serenity Choker</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark/80 mb-6 sm:mb-8 leading-relaxed font-light text-sm sm:text-base">
                Embrace delicate luxury with our signature 14k gold choker. Designed for the modern muse, perfectly balancing simplicity and statement.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl sm:text-2xl font-bold text-primary">$950</span>
                <Link href="/products/6" className="bg-white/5 border border-white/20 dark:border-gray-600 px-6 sm:px-8 py-2 sm:py-3 text-xs font-bold uppercase tracking-[0.15em] text-text-main-light dark:text-white hover:bg-primary hover:text-white transition-all rounded-sm min-h-[44px] flex items-center justify-center">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="mt-12 sm:mt-20 flex justify-center">
          <button className="group flex items-center gap-2 sm:gap-3 rounded-full border border-text-muted-light/30 dark:border-text-muted-dark/30 bg-transparent px-8 sm:px-10 py-3 sm:py-4 text-xs font-bold uppercase tracking-widest text-text-main-light dark:text-white hover:border-primary hover:bg-primary hover:text-white transition-all min-h-[44px]">
            Load More Products
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

