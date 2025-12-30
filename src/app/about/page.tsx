import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-6">
        <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-text-muted-light dark:text-text-muted-dark">
            /
          </span>
          <span className="text-primary">New Arrivals</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 md:pb-16 pt-4 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full">
          {/* Left: Text Content */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="flex flex-col justify-center gap-6 sm:gap-8 py-6 sm:py-10 lg:pr-8 xl:pr-16 order-2 lg:order-1">
              <div className="flex flex-col gap-3 sm:gap-4 text-left">
                <span className="text-accent-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                  The Golden Era Collection
                </span>
                <h1 className="text-text-main-light dark:text-text-main-dark text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extralight leading-tight tracking-tight">
                  OPULENCE <br />
                  <span className="font-bold">REDEFINED</span>
                </h1>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md">
                  Discover the latest additions to the Golden Legacy archives.
                  Where timeless craftsmanship meets modern desire.
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link
                  href="/products"
                  className="group flex items-center justify-center h-11 sm:h-12 px-6 sm:px-8 bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-[0.1em] hover:bg-primary-hover transition-all duration-300 rounded-sm"
                >
                  Explore Collection
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
          {/* Right: Hero Image */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto order-1 lg:order-2">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <ParallaxImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX0Q5P3TpsIq2FEbI_EHi4QIQYwas7Ay0o2JpBbouaGrHOa4w1PA8l9Gxi6kghZlwvIOouyt5mAcpIobYbmQ3pT7ETGpDyno13CEk2qZDMGve0gZ-sUL9RchdHe99HwZEcuNMVi3ciw0Wt-u79fWKnK8_RWZ5XJ1DQof5sYcnPoFiYs_fmZ2h5g5HSmOkkSgeBkGbipbuPQsLLUJVpiOtGDHQD5IGUP26kCZsqIV9e3W7YeCJUn709SZIQOBxKwXyRHuBbCfLK4rg"
                  alt="Elegant woman wearing gold jewelry in dramatic lighting"
                  className="w-full h-full"
                  speed={0.3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent lg:hidden"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter / Tabs Section */}
      <section className="sticky top-[73px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-4 scrollbar-hide">
            <Link
              href="#"
              className="shrink-0 flex flex-col items-center justify-center text-primary relative group cursor-pointer min-h-[44px]"
            >
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] mb-1">
                All Categories
              </span>
              <span className="w-full h-[2px] bg-primary"></span>
            </Link>
            <Link
              href="#"
              className="shrink-0 flex flex-col items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:text-primary relative group cursor-pointer transition-colors min-h-[44px]"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest mb-1">
                Gold
              </span>
              <span className="w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#"
              className="shrink-0 flex flex-col items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:text-primary relative group cursor-pointer transition-colors min-h-[44px]"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest mb-1">
                Platinum
              </span>
              <span className="w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#"
              className="shrink-0 flex flex-col items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:text-primary relative group cursor-pointer transition-colors min-h-[44px]"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest mb-1">
                Gemstones
              </span>
              <span className="w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#"
              className="shrink-0 flex flex-col items-center justify-center text-text-muted-light dark:text-text-muted-dark hover:text-primary relative group cursor-pointer transition-colors min-h-[44px]"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest mb-1">
                Watches
              </span>
              <span className="w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid 1: This Week's Favorites */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col gap-2 mb-8 sm:mb-12 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-light text-text-main-light dark:text-text-main-dark uppercase tracking-[0.05em]">
              This Week&apos;s Favorites
            </h3>
            <div className="w-12 h-px bg-primary mx-auto mt-3 sm:mt-4"></div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-x-8 gap-y-12 sm:gap-y-16">
          {/* Product 1 */}
          <div className="group flex flex-col gap-4 sm:gap-6 cursor-pointer">
            <div className="relative w-full aspect-square overflow-hidden bg-[#f5f0e6] dark:bg-[#1a150d] rounded-lg">
              <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 z-10 rounded-sm">
                New
              </span>
              <div className="relative w-full h-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7PFuE_KnFwSzhXAlws613v5I-0WwRk-HD3IyOjEJjehuMhEnyEAE3Cs40VEImYtzl-WqO5JwPt0LKWqPWZyz9UKwf2YO1ctq9ClVi7RMRJMdbJvJSp1kHgkySiQXvGMmh_0yYtLvCu_yKKNAZx3hf1jone7PvT7BT4YRZTLknvaqggr6HA_d7B8KtfglCSS_ZoBRiZFqVfzGgW6-PRfraY63UhcpmiiaSYNXipKxp0TQu6rt-K5pp8OQ7YH_NQ-yu7ZMZOoR8Ouc"
                  alt="Gold ring with diamonds on dark background"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              {/* Quick Add Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                <Link
                  href="/products/1"
                  className="bg-white/90 hover:bg-primary text-black hover:text-white text-xs font-bold uppercase tracking-widest py-2 sm:py-3 px-4 sm:px-6 rounded-sm w-full backdrop-blur-sm text-center min-h-[44px] flex items-center justify-center"
                >
                  Quick View
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-text-main-light dark:text-text-main-dark text-sm sm:text-base font-medium uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                Eternal Gold Ring
              </h4>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm font-light">
                $1,200
              </p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group flex flex-col gap-4 sm:gap-6 cursor-pointer">
            <div className="relative w-full aspect-square overflow-hidden bg-[#f5f0e6] dark:bg-[#1a150d] rounded-lg">
              <div className="relative w-full h-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO-_xj0EhKreHDoUL5SbyJRVjV7It7E3Cb4yXmLYR9yQUh-roJM0dt5NkFErl1ehXykYTt6ODxmvcbpkS9z5fPH1bbjNi7kvTPH3bZh5HuuRMhQnGWQjuPuUOP_r5K8GryNOtirAmB2b6F03weQRLA0jMNPJa1hjH6eO4fB4ZkefHMkSELoouq3JSWg7xMrFO8HSTk94J3CrXteGuRvcnxptUgODfMrpfDEA00S5Hnb9URzGOf1ISbtcdEOZWnYvauPgKz1jOO0dQ"
                  alt="Luxury gold necklace displayed on bust"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                <Link
                  href="/products/2"
                  className="bg-white/90 hover:bg-primary text-black hover:text-white text-xs font-bold uppercase tracking-widest py-2 sm:py-3 px-4 sm:px-6 rounded-sm w-full backdrop-blur-sm text-center min-h-[44px] flex items-center justify-center"
                >
                  Quick View
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-text-main-light dark:text-text-main-dark text-sm sm:text-base font-medium uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                Legacy Necklace
              </h4>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm font-light">
                $4,500
              </p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group flex flex-col gap-4 sm:gap-6 cursor-pointer">
            <div className="relative w-full aspect-square overflow-hidden bg-[#f5f0e6] dark:bg-[#1a150d] rounded-lg">
              <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-accent-gold text-text-main-light dark:text-text-main-dark text-[10px] font-bold uppercase tracking-wider px-2 py-1 z-10 rounded-sm">
                Bestseller
              </span>
              <div className="relative w-full h-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4dmGdJK92rvfzq_5XXmJKVEOgxD_w4c12Rg8TiydEaXdBhd3itShadiJQNBGdaOzDv1Tk1M9hzihZNG5ph0uV18Cr_hG1LEd0o41mVS7k5peOdUHEnRxrgODIa10XyU6gV5Xik4YYJ3LYJ8uoMH7DDlkX924bxTZ_L3HQrjtuKN9dlPyjMYF0niliSLSqJjFwO1ZHaETiyvIpGeIxrHlncPag4XnG-6dIIG9yFDB9QkVZE8jF9Jxk-TbPse1Pw0K1ivd0z5re8f0"
                  alt="Sapphire earrings with diamond halo"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                <Link
                  href="/products/3"
                  className="bg-white/90 hover:bg-primary text-black hover:text-white text-xs font-bold uppercase tracking-widest py-2 sm:py-3 px-4 sm:px-6 rounded-sm w-full backdrop-blur-sm text-center min-h-[44px] flex items-center justify-center"
                >
                  Quick View
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-text-main-light dark:text-text-main-dark text-sm sm:text-base font-medium uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                Royal Sapphire Earrings
              </h4>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm font-light">
                $8,900
              </p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group flex flex-col gap-4 sm:gap-6 cursor-pointer">
            <div className="relative w-full aspect-square overflow-hidden bg-[#f5f0e6] dark:bg-[#1a150d] rounded-lg">
              <div className="relative w-full h-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKdRb9La0MmK2ZK71IjNEkYPJK74YsVa-BgaNr9wExeDHKydLUuK_lspU1CaBF6s8eAeJ1_b6jAVlHD0UhK426APXJvsfy8JnMuNA5pmvGc9icYDcvoDbfMrOgJIOVGk4X35uWko3JjSKcFzbkoIT_9lqRl0x0K2SsUfZtnxUJHosk0WQX9gDl1euw5t4zN2DyFnR90bbLu5RLyUG1dkID3LXD4a821d_sSG8U2lceeFCvs-2E2AMDqYb5UO91ZTeaYyiS6SYsh-Y"
                  alt="Diamond bracelet on silk surface"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                <Link
                  href="/products/4"
                  className="bg-white/90 hover:bg-primary text-black hover:text-white text-xs font-bold uppercase tracking-widest py-2 sm:py-3 px-4 sm:px-6 rounded-sm w-full backdrop-blur-sm text-center min-h-[44px] flex items-center justify-center"
                >
                  Quick View
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-text-main-light dark:text-text-main-dark text-sm sm:text-base font-medium uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                Timeless Bracelet
              </h4>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm font-light">
                $2,100
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] sm:min-h-[500px]">
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative h-[300px] sm:h-[400px] md:h-auto bg-[#f5f0e6] dark:bg-[#1a150d]">
              <div className="relative w-full h-full">
                <ParallaxImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJCCzynOHU17_mYLwrlpDFlW6zKhTMrbwxFp1b7TR2TQi1DBGOsa0O41jgjgduPo-s6rEACEblaNSZXZoorSxZs9vVSy7b0W04IZDpjyTU7VKVmv88_4-4oV86WqeVBr81HZ56ufrqGBZPhhk5SLztGeufkmrhWEx2BEWJMAp6WyFNn7JRLkrhEV_1TGRVQj_e-U8oHZ8yyzRp71wKgrZK40rwdiEOTTpCazNgkj1njTtytiun4BmThrOSYGTV7aKPKQHQkgnVn6k"
                  alt="Close up artistic shot of a diamond ring on a flower petal"
                  className="w-full h-full"
                  speed={0.4}
                />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.3}>
            <div className="flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 bg-[#fcf7ef] dark:bg-[#16120b] border-l border-gray-200 dark:border-gray-700">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 sm:mb-6">
                Spotlight
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extralight text-text-main-light dark:text-text-main-dark mb-4 sm:mb-6 leading-tight">
                THE ART OF <br /> <span className="font-bold">BRILLIANCE</span>
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base leading-relaxed mb-6 sm:mb-10 max-w-md font-light">
                Our newest solitaire collection features hand-selected diamonds
                of exceptional clarity, set in pure 24k gold. Designed for the
                moment that lasts forever.
              </p>
              <div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 sm:gap-3 text-text-main-light dark:text-text-main-dark text-xs sm:text-sm font-bold uppercase tracking-[0.15em] border-b border-text-main-light/30 dark:border-text-main-dark/30 pb-1 sm:pb-2 hover:text-primary hover:border-primary transition-all min-h-[44px]"
                >
                  View The Spotlight
                  <svg
                    className="w-4 h-4 sm:text-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lifestyle Break Banner */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden my-8 sm:my-10">
        <ParallaxImage
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxXvSahnxLmSwuZyf0-NFZebTBZ91cXBn28Jd36uo9ulKGhvhKvpJif8NT8MtjuOnCAuPR8KTdR1jiKnc5pP0lOy81HlMb-EFqJ67p7kOB1a03hqnupsHQthk2x9w-M1sfRon40BClvSTQMsKcSfSrobMHTQyIrf0CePH_QrT0zTICeKfv3_dPfq6rfW8rzet8ES3NPL5IyKtQlYsNhC9odX94ndp4hpq3CkdU4Xt7F19QJe4JbL_cLe_ly8Rn1EO4pF3hO-dYpmM"
          alt="Cinematic shot of a woman at a gala event wearing jewelry"
          className="relative w-full h-full"
          speed={0.5}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <ScrollReveal direction="fade" delay={0.2}>
            <div className="text-center px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light text-white tracking-wide mb-4 sm:mb-6">
                FOR EVERY <span className="italic font-normal">MOMENT</span>
              </h2>
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-white text-black hover:bg-primary hover:text-white transition-colors duration-300 px-6 sm:px-8 py-2 sm:py-3 uppercase text-xs sm:text-sm font-bold tracking-[0.15em] rounded-sm min-h-[44px]"
              >
                Shop Lifestyle
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Grid 2: More Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 bg-[#fcf7ef] dark:bg-[#1e180e]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Curated
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-light text-text-main-light dark:text-text-main-dark uppercase tracking-[0.05em]">
              Modern Heirlooms
            </h3>
          </div>
          <Link
            href="/products"
            className="text-text-main-light dark:text-text-main-dark hover:text-primary text-xs font-bold uppercase tracking-[0.15em] pb-1 border-b border-text-main-light/20 dark:border-text-main-dark/20 hover:border-primary transition-all"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Collection Item 1 */}
          <div className="group">
            <div className="relative w-full aspect-[4/5] overflow-hidden mb-4 sm:mb-6 rounded-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoXsauKDy3y-S9o-fKOdzT_JZ13H_tdfhSEAa_ZK5pi7eDQB4ZOMEzNDmy7daXuVAUQj8tDKl7MU2ZZ01TzRLJibm1SuB0QrX1OpvW3sR-n0CpK96VVL2utBP_uLAqXdJJHdQaT2YrJFw7xoOIY35MPBDTGeQ8pqq-LeJqKSYGRSA7Ilzs8xita5ZOr9f1h0AXrhDU-3Do2pjpk4_I5WdeDXS-bU1S-B0wwtdKWKfV2ac4oJSkfzbS2DlzO84GjJx_UGx11UDEi6c"
                alt="Model wearing stacked gold bracelets"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="flex justify-between items-start border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4">
              <div>
                <h4 className="text-lg sm:text-xl text-text-main-light dark:text-text-main-dark font-light mb-1">
                  The Stack Collection
                </h4>
                <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm">
                  Starting from $850
                </p>
              </div>
              <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Collection Item 2 */}
          <div className="group">
            <div className="relative w-full aspect-[4/5] overflow-hidden mb-4 sm:mb-6 rounded-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRkQwyVi5I40Kmkl-g7flx54Hd_MyL-tn_KQdYr6YKWTSGZyQFf3Z1rSu7vibNUAtj1B_n_GJ_NduitSOxRMkP10AgW4L_gLigdNX79DnWB53KA7xS0DCbKVdPnYqFE45SDTg8NcQVDccUoYu-AZ-ldxpvGVfRtbg_arrbK2Al6QOdCpw5YU5WAWKY2MvydS-iSgRxxL1IMXqGMBfWo8Mz_25xzhVEzFeagJWy2g4RTVvngNcW-hw7JvKyxUgmGWD1mD4Gpud_Vro"
                alt="Male model wearing luxury watch and ring"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="flex justify-between items-start border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4">
              <div>
                <h4 className="text-lg sm:text-xl text-text-main-light dark:text-text-main-dark font-light mb-1">
                  Men&apos;s Bespoke
                </h4>
                <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm">
                  Starting from $1,500
                </p>
              </div>
              <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Collection Item 3 */}
          <div className="group">
            <div className="relative w-full aspect-[4/5] overflow-hidden mb-4 sm:mb-6 rounded-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI15qNWvoyRh630UTnI0MY2ypdSPbG7j0wkFuxoEVwQS2uQNilXprSyNfXkDx8jo01jv3T0PCSiHRqvW-JsqTkK52k9FxiSMSRg1KJ6v5MOOLikdJP70WtIc7H8Vbm67huAFMgw0IJCFcvM6ATyPeef5qW8HUdNXLOWusbjZpP_etZrq_rj1RBI2w_TqHycZ1Ctuh9xnRK96i4iDKnPA_hwn6ieQ_YcsXQwnHX5qJGYQlYCCDnKXVFmCR9dI1l8Y7GwUi-LHi2PNw"
                alt="Bridal jewelry set on dark velvet"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="flex justify-between items-start border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4">
              <div>
                <h4 className="text-lg sm:text-xl text-text-main-light dark:text-text-main-dark font-light mb-1">
                  Bridal Elegance
                </h4>
                <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm">
                  Consultation Required
                </p>
              </div>
              <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Footer */}
      <section className="bg-[#fcf7ef] dark:bg-[#110e08] border-t border-gray-200 dark:border-gray-700 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 mb-12 sm:mb-20">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-xl sm:text-2xl font-display font-light text-text-main-light dark:text-text-main-dark">
                JOIN THE LEGACY
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark font-light max-w-sm text-sm sm:text-base">
                Be the first to receive updates on new arrivals, exclusive
                events, and bespoke services.
              </p>
              <form className="flex w-full max-w-md gap-0">
                <input
                  className="bg-white dark:bg-[#1a150d] text-text-main-light dark:text-white border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-0 w-full h-11 sm:h-12 px-4 text-xs font-bold tracking-widest uppercase placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark rounded-l-sm focus:outline-none"
                  placeholder="YOUR EMAIL ADDRESS"
                  type="email"
                />
                <button
                  className="bg-primary text-white px-6 sm:px-8 h-11 sm:h-12 text-xs font-bold uppercase tracking-widest hover:bg-primary-hover transition-colors rounded-r-sm min-w-[100px]"
                  type="button"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h4 className="text-text-main-light dark:text-white text-xs font-bold uppercase tracking-widest">
                  Customer Care
                </h4>
                <Link
                  href="#"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs sm:text-sm transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs sm:text-sm transition-colors"
                >
                  Shipping & Returns
                </Link>
                <Link
                  href="#"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs sm:text-sm transition-colors"
                >
                  Size Guide
                </Link>
                <Link
                  href="#"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs sm:text-sm transition-colors"
                >
                  FAQ
                </Link>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <h4 className="text-text-main-light dark:text-white text-xs font-bold uppercase tracking-widest">
                  The Brand
                </h4>
                <Link
                  href="/about"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs sm:text-sm transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="#"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs sm:text-sm transition-colors"
                >
                  Sustainability
                </Link>
                <Link
                  href="#"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs sm:text-sm transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs sm:text-sm transition-colors"
                >
                  Press
                </Link>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <h4 className="text-text-main-light dark:text-white text-xs font-bold uppercase tracking-widest">
                  Follow Us
                </h4>
                <Link
                  href="#"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs sm:text-sm transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs sm:text-sm transition-colors"
                >
                  Pinterest
                </Link>
                <Link
                  href="#"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs sm:text-sm transition-colors"
                >
                  Facebook
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-8 sm:pt-10 gap-4">
            <p className="text-text-muted-light dark:text-text-muted-dark text-xs uppercase tracking-wider">
              © 2024 Jewelley. All Rights Reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link
                href="#"
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs uppercase tracking-wider transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary text-xs uppercase tracking-wider transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
