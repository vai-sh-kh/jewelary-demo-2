import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";

export default function GiftsPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background-dark/90"></div>
          <ParallaxImage
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu21tUwKKHXQSIAYeINgWkKEQHZtca_YAhTpxxE1Ib1W7fQEILzP9YUc8yWCikSeEbV-BCPgTsyyX1ptA6TSpDiLWt9AuryqfPKlwI8zBOZOoQVNg0Qd1AIoM9EgqxA0RPM5RwehsLyvH1IYBoabIhsVuB9yLwOX002yx1bIAKrJ2dtmi57Ws5oVvDZbDlsgrEr03vU5GKft5_2I5-IVf01uRG5o6m2CRYpSP_l03xDkyGSVtl78Ovt1LU-jP_HZW7zp8O6yvNQuw"
            alt="Close up of hands opening a luxury jewelry gift box with warm lighting"
            className="relative w-full h-full"
            speed={0.5}
          />
        </div>
        <ScrollReveal direction="fade" delay={0.3}>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
            <h2 className="text-accent-gold text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-1 sm:mb-2">
              Unwrap the Extraordinary
            </h2>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light leading-tight tracking-tight">
              THE ART OF <br />
              <span className="font-semibold text-accent-gold/90">GIFTING</span>
            </h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl leading-relaxed mt-1 sm:mt-2 opacity-90">
              Discover gifts that transcend time. From marking milestones to
              daily reminders of love, find the perfect piece to tell your
              story.
            </p>
            <div className="mt-4 sm:mt-6 md:mt-8">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold tracking-widest uppercase py-2 sm:py-3 px-5 sm:px-6 rounded-sm transition-all duration-300 transform hover:-translate-y-1 min-h-[44px]"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Sticky Category Navigation */}
      <div className="sticky top-[73px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur border-b border-gray-200 dark:border-gray-700 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-3 sm:gap-4 min-w-max md:justify-center">
            <Link
              href="#"
              className="px-4 sm:px-6 py-2 border border-gray-300 dark:border-gray-600 hover:border-primary text-text-main-light dark:text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm bg-white dark:bg-[#221c11] min-h-[44px] flex items-center justify-center"
            >
              Under $500
            </Link>
            <Link
              href="#"
              className="px-4 sm:px-6 py-2 border border-gray-300 dark:border-gray-600 hover:border-primary text-text-main-light dark:text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm bg-white dark:bg-[#221c11] min-h-[44px] flex items-center justify-center"
            >
              Most Loved
            </Link>
            <Link
              href="#"
              className="px-4 sm:px-6 py-2 border border-gray-300 dark:border-gray-600 hover:border-primary text-text-main-light dark:text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm bg-white dark:bg-[#221c11] min-h-[44px] flex items-center justify-center"
            >
              Personalized
            </Link>
            <Link
              href="#"
              className="px-4 sm:px-6 py-2 border border-gray-300 dark:border-gray-600 hover:border-primary text-text-main-light dark:text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm bg-white dark:bg-[#221c11] min-h-[44px] flex items-center justify-center"
            >
              For Her
            </Link>
            <Link
              href="#"
              className="px-4 sm:px-6 py-2 border border-gray-300 dark:border-gray-600 hover:border-primary text-text-main-light dark:text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm bg-white dark:bg-[#221c11] min-h-[44px] flex items-center justify-center"
            >
              For Him
            </Link>
            <Link
              href="#"
              className="px-4 sm:px-6 py-2 border border-gray-300 dark:border-gray-600 hover:border-primary text-text-main-light dark:text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm bg-white dark:bg-[#221c11] min-h-[44px] flex items-center justify-center"
            >
              Anniversary
            </Link>
          </div>
        </div>
      </div>

      {/* Editorial Feature Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12 md:gap-20">
          <ScrollReveal direction="right" delay={0.2}>
            <div className="flex-1 space-y-6 sm:space-y-8 text-center md:text-left">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-accent-gold tracking-[0.2em] text-xs font-bold uppercase">
                  Featured Collection
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-text-main-light dark:text-text-main-dark leading-tight">
                  THE GOLD <br />
                  <span className="font-bold">STANDARD</span>
                </h2>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md mx-auto md:mx-0">
                  Elevate your everyday with solid gold essentials that define
                  modern luxury. Meticulously crafted to be worn, loved, and
                  passed down.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold tracking-widest uppercase py-2 sm:py-3 px-6 sm:px-8 rounded-sm transition-colors border-l-2 border-accent-gold min-h-[44px]"
              >
                Shop The Collection
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.3}>
            <div className="flex-1 w-full h-full relative group">
              <div className="relative overflow-hidden w-full aspect-[4/3] md:aspect-square rounded-lg">
                <ParallaxImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLob1vcPSRmqk8YWkdzf7cUdeAu6q2x98ETpC-rzuN_XPdoFOuSqePwC_8i8RstfL2ai8oi77fsSVgd5DUpsywzzRKO8vbz87O-Qet1E72U_h2R46Cx48XaKMsgQpBhlMwdjjH1SHI7j2PvbbO__KEPUTgibBeTjtM6paWIe4qDTcI6BSistfVzaJFTuAQHuUbIAa6o2TFadELbVHlPsXnOD_G9hbtDPF_aPbX08ai2Hxt2hD48Yo60TDaZj11kWNlbGIr2jV8shE"
                  alt="Woman wearing elegant gold necklace and earrings in soft lighting"
                  className="w-full h-full"
                  speed={0.3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent opacity-60"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Best Sellers Product Carousel */}
      <section className="py-12 sm:py-16 bg-[#fcf7ef] dark:bg-[#2c2417] border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-light text-text-main-light dark:text-text-main-dark mb-1 sm:mb-2">
                  BEST SELLERS
                </h3>
                <p className="text-accent-gold text-xs sm:text-sm tracking-wide">
                  Most wished for pieces
                </p>
              </div>
              <Link
                href="/products"
                className="hidden md:flex items-center gap-2 text-text-main-light dark:text-white hover:text-primary transition-colors text-xs font-bold tracking-widest uppercase group"
              >
                View All
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-x-6 gap-y-10 sm:gap-y-12">
            {/* Product Card 1 */}
            <div className="group flex flex-col items-center">
              <div className="relative w-full aspect-square overflow-hidden mb-4 sm:mb-6 bg-[#f5f0e6] dark:bg-[#1a150d] rounded-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3q2EhMYF6VB9FZ4OqJ6IT1zmBQjIJw4_gXuKk3K5p5tsiIqritVNwIuxkSE4rrARRGWTIQ--4v1NHqUgtWkSJeSQItVLvA89Um2iXDbp7ChaI5i7TitwzNowSSUyrok46YxFUI36LPbSFVDklnOYMg8lwtqJo-TZdtVFNzwDy4ea4DvayFz55ksjzjib48XNRdvlyYzZGU74OzbopaGRkLouZ9MglrzbSJPbqn2IqgSrB8Nj7sq1GpS5rFCkYZwkK0WL0hFxAj9A"
                  alt="Gold hoop earrings on dark stone surface"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  <button className="text-text-main-light dark:text-white hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href="/products/5"
                    className="bg-white/90 hover:bg-white text-text-main-light dark:text-text-main-dark text-xs font-bold tracking-widest uppercase py-2 sm:py-3 px-4 sm:px-6 rounded-sm translate-y-4 group-hover:translate-y-0 transition-all duration-300 min-h-[44px] flex items-center justify-center"
                  >
                    Quick View
                  </Link>
                </div>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-text-main-light dark:text-white font-medium text-sm sm:text-base tracking-wide">
                  Eternal Gold Hoops
                </h4>
                <p className="text-primary font-light text-sm sm:text-base">
                  $550
                </p>
                <button className="mt-2 text-text-main-light dark:text-white border-b border-transparent hover:border-primary text-xs font-bold tracking-widest uppercase pb-0.5 transition-all min-h-[44px]">
                  Add to Bag
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group flex flex-col items-center">
              <div className="relative w-full aspect-square overflow-hidden mb-4 sm:mb-6 bg-[#f5f0e6] dark:bg-[#1a150d] rounded-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOBUv411CpmLidQi2WpSD3af7QO2bCTb3pB5seHvHqjOkux2MpR28GszL1bFSlAGxIwJClODCOVHdKSkVWirCy18oMMZak0eIA8nZ-szWE_cVDBhKMgaZQ21vlHZcPn7ww8bGf_UMCFhLgVc2SlUI4D_FpwvBYZfFc5eqyOmkkwXjLe76Xdw3lqOSDDuyZTFuzTMDKc4uJh5PusIQoQiAXyM5nSjJaKIUh0C-XqVlMTJgkO1qy8OeWAm-RNjuJicuoVa9LbunSidw"
                  alt="Close up of a diamond ring on a hand"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  <button className="text-text-main-light dark:text-white hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href="/products/6"
                    className="bg-white/90 hover:bg-white text-text-main-light dark:text-text-main-dark text-xs font-bold tracking-widest uppercase py-2 sm:py-3 px-4 sm:px-6 rounded-sm translate-y-4 group-hover:translate-y-0 transition-all duration-300 min-h-[44px] flex items-center justify-center"
                  >
                    Quick View
                  </Link>
                </div>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-text-main-light dark:text-white font-medium text-sm sm:text-base tracking-wide">
                  Solitaire Diamond Ring
                </h4>
                <p className="text-primary font-light text-sm sm:text-base">
                  $2,250
                </p>
                <button className="mt-2 text-text-main-light dark:text-white border-b border-transparent hover:border-primary text-xs font-bold tracking-widest uppercase pb-0.5 transition-all min-h-[44px]">
                  Add to Bag
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group flex flex-col items-center">
              <div className="relative w-full aspect-square overflow-hidden mb-4 sm:mb-6 bg-[#f5f0e6] dark:bg-[#1a150d] rounded-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc7Q_3040_aTHmbm2suK-IvMl9f-9ZeWsKlyfc-0-WGFpm1V9Bik-8QqJL_xjgz4Cwx1_HhFwxU9TRUm3mxu7h0DO0c-9U-3ackUO3iuulf7Lcgqu56_gPBMIHyb-03Oby9TDuDLAXKdhd9rom7gFQCZ2zaYGvoy_CAFH29ffibQtUeJVZo-hozQt3DvyqGFm27KVDoeh3itXRiwCoYNxFAUWRVxm5231DynrwXf7pwYRZ6GUXFjAM94XiZxBgIyZ8ciMGc4h1L04"
                  alt="Elegant gold chain necklace on a model's neck"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  <button className="text-text-main-light dark:text-white hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href="/products/7"
                    className="bg-white/90 hover:bg-white text-text-main-light dark:text-text-main-dark text-xs font-bold tracking-widest uppercase py-2 sm:py-3 px-4 sm:px-6 rounded-sm translate-y-4 group-hover:translate-y-0 transition-all duration-300 min-h-[44px] flex items-center justify-center"
                  >
                    Quick View
                  </Link>
                </div>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-text-main-light dark:text-white font-medium text-sm sm:text-base tracking-wide">
                  Heirloom Chain
                </h4>
                <p className="text-primary font-light text-sm sm:text-base">
                  $1,850
                </p>
                <button className="mt-2 text-text-main-light dark:text-white border-b border-transparent hover:border-primary text-xs font-bold tracking-widest uppercase pb-0.5 transition-all min-h-[44px]">
                  Add to Bag
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group flex flex-col items-center">
              <div className="relative w-full aspect-square overflow-hidden mb-4 sm:mb-6 bg-[#f5f0e6] dark:bg-[#1a150d] rounded-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf1ZQCTBTV1qrfN1vgZxdnkWMZXt1fL7KyoxeDBfuiRmtDs4FK1OYAobfaZXjQHngC0yUKeIXiuji4OtFx3QOG2Yk54bI1jJq4so6PcF6CE5EfUPcrh5haUgdZX0vXMyAJhILAyprl5LbkoFJ8rhaiHfAY8uEp7EP84sz_6ODeQcFfMIQCl7XqPoXHYeKXYMWuWmXKB-zK0QjZVErxdy4PHkUX3tZHGwE9mB4P77IXsx4ee4qe9H6fjZyLCh3wAPk5CYjJ417sIRQ"
                  alt="Delicate gold bracelet on wrist"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  <button className="text-text-main-light dark:text-white hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href="/products/8"
                    className="bg-white/90 hover:bg-white text-text-main-light dark:text-text-main-dark text-xs font-bold tracking-widest uppercase py-2 sm:py-3 px-4 sm:px-6 rounded-sm translate-y-4 group-hover:translate-y-0 transition-all duration-300 min-h-[44px] flex items-center justify-center"
                  >
                    Quick View
                  </Link>
                </div>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-text-main-light dark:text-white font-medium text-sm sm:text-base tracking-wide">
                  Infinity Bangle
                </h4>
                <p className="text-primary font-light text-sm sm:text-base">
                  $980
                </p>
                <button className="mt-2 text-text-main-light dark:text-white border-b border-transparent hover:border-primary text-xs font-bold tracking-widest uppercase pb-0.5 transition-all min-h-[44px]">
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 text-center md:hidden">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-transparent border border-gray-300 dark:border-gray-600 text-text-main-light dark:text-white text-xs font-bold tracking-widest uppercase py-2 sm:py-3 px-6 sm:px-8 rounded-sm w-full min-h-[44px]"
            >
              View All Best Sellers
            </Link>
          </div>
        </div>
      </section>

      {/* Gift Guide Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
        <ScrollReveal direction="up" delay={0.1}>
          <h3 className="text-2xl sm:text-3xl font-display font-light text-text-main-light dark:text-text-main-dark text-center mb-10 sm:mb-16">
            FIND YOUR STYLE
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Guide Card 1 */}
          <div className="group relative h-[400px] sm:h-[500px] overflow-hidden cursor-pointer rounded-lg">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrEi0jfJYAUK_5B4wev03RUAok_mRkAgq75VBChmkO3WCbMzPmoLVgIYe9Tj0m5e9Lqep5Lr1FOrntGqdkPRp0lfcgf4E4GrZ_Zu-aUAWFCtJJsEooszwGS1Auk9JwOVt1N1rTMs-whevM4ScrdtwqjPRfAVH0RgfHtWmgiJZs5Ezg-cV26Z69k_D5uelh8EqEfZgkVsyf3zpLS93hgZJP3kXFmPScfO00fmrjg3y7Qtf_F1505yEfTIVisWBDkYMIiYCJR9cfTQc"
              alt="Woman wearing modern minimalistic jewelry portrait"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white text-xl sm:text-2xl font-light tracking-wide mb-3 sm:mb-4 transform translate-y-0 transition-transform duration-300">
                MODERN MUSE
              </h4>
              <Link
                href="/products"
                className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary pb-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 min-h-[44px] flex items-center"
              >
                Shop The Look
              </Link>
            </div>
          </div>

          {/* Guide Card 2 */}
          <div className="group relative h-[400px] sm:h-[500px] overflow-hidden cursor-pointer rounded-lg">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj5UlDypBQ9UEVGJ9L9MKbL8HOS9qm6HZbu5fHL969V9Sf2OHt80ftalx76WbzyEe3PFqZkcwv32Ti9kDnNt9I0dDvHTw66ns6sJoCle-izHtJGqxAd73LM1A1i0E9P6gFN2nQVrTlnA4XCgQI78ovnuZa3kGblv2XP1iWVEGUZxfLpVs6nrupxEuuCwhBGc3cCg4ev3LEvZkWfiNi64Cr-Q5W_PPqt0n6BGdHt5T6mQ5HO6e6hbwooUXOlPQrz7Kk5GLK58eOgEU"
              alt="Couple holding hands wearing wedding bands"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white text-xl sm:text-2xl font-light tracking-wide mb-3 sm:mb-4 transform translate-y-0 transition-transform duration-300">
                TIMELESS ROMANCE
              </h4>
              <Link
                href="/products"
                className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary pb-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 min-h-[44px] flex items-center"
              >
                Shop Wedding
              </Link>
            </div>
          </div>

          {/* Guide Card 3 */}
          <div className="group relative h-[400px] sm:h-[500px] overflow-hidden cursor-pointer rounded-lg">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgspOY9r-bqVPhVq1XoJ7MoCs9BWagmOna0GGy4pzuM65Q_oNV45gqm7VPa7qLcw9Qmk_lqEKZ7IZ3gc7wIm3NnoqAiz8lj0duW2xkG0j69oCKdSAVB3f0lZxXj_xcON4t-81OmZTCM9xD5I6bIWfobUswd_5wK4luXSyqgvh69JLOyETUeVud6gyZ5AjOzSjBkDHuGDXNdeqhmO8b2iEh0bTiUbxhOXVpkPTXevVFp2XMXq70wde9U-pHJVja3hY0sw4Chn1fo1M"
              alt="Elegant jewelry laid out on a silk texture"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white text-xl sm:text-2xl font-light tracking-wide mb-3 sm:mb-4 transform translate-y-0 transition-transform duration-300">
                VINTAGE GLAMOUR
              </h4>
              <Link
                href="/products"
                className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary pb-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 min-h-[44px] flex items-center"
              >
                Shop Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#fcf7ef] dark:bg-[#1a150d] py-12 sm:py-16 md:py-20 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-4xl text-primary mb-4 sm:mb-6">✉</div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-light text-text-main-light dark:text-text-main-dark mb-3 sm:mb-4">
            JOIN THE GOLDEN CIRCLE
          </h3>
          <p className="text-text-muted-light dark:text-text-muted-dark mb-6 sm:mb-8 font-light text-sm sm:text-base">
            Sign up to receive exclusive offers, early access to new
            collections, and a welcome gift on your first order.
          </p>
          <form className="flex flex-col md:flex-row gap-3 sm:gap-4">
            <input
              className="flex-1 bg-white dark:bg-[#221c11] border border-gray-300 dark:border-gray-700 text-text-main-light dark:text-white px-4 sm:px-6 py-2 sm:py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-sm placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark text-sm"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              className="bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold tracking-widest uppercase py-2 sm:py-3 px-6 sm:px-8 rounded-sm transition-colors min-h-[44px] flex items-center justify-center"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
