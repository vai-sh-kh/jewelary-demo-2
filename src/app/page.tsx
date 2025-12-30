import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import AnimatedImage from "@/components/AnimatedImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation />

      {/* Hero Section */}
      <header className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <ScrollReveal direction="right" delay={0.2}>
          <div className="relative z-10">
            <div className="absolute -top-4 sm:-top-8 left-0 text-accent-gold text-xl sm:text-2xl animate-pulse">
              ✦
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-text-main-light dark:text-text-main-dark mb-4 sm:mb-6">
              Find
              <span className="inline-block relative align-middle mx-2 h-[0.8em] w-[1.5em] rounded-full overflow-hidden bg-gray-200">
                <img
                  alt="Eye close up"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsx71Nft7VqZibugW83VE0337-26A3vkExla2SXIBtXs-aY8dC5iaRSKRcC1n4oN0mgNf9gDPAyIcvr0GPieriG5PPcd5cZ5-GSZf_Yv4FV8pj8c8DTAsBu99vHvJD8y96Ni2JJTg2DgoBIB2NNhpnnAJqBB84WBlf-369RugcrVayqi7jKt762ZE5Ln1rQVKErr8yrOc7g61rHyt3zaO0Z5p-UTvGuKVl4Ydh_SV4XRCHXT8T0LD34J4HvXClfLeI_i77kxKGnCM"
                />
              </span>
              Your <br />
              <span className="italic font-light">Perfect</span> Piece
            </h1>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-md mb-6 sm:mb-10 text-sm sm:text-base leading-relaxed">
              Discover Timeless Elegance Elevate Your Style with Our Exquisite
              Jewelry Collection.
            </p>
            <div className="flex space-x-3 sm:space-x-4 mb-6 sm:mb-10">
              <AnimatedImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTiv4SBGmZtQPZH-n39x0M9g3SxwWUia7MtvCm9kJVLXuWCAd_n8ufG6i41LIaiSVfV9-qKCVbV6W5BNADjr2puzqO_knNTLiQyQkYPwrSTKAmRcWwDDrf9bn5S7iNfjOP6nUF83dPymnhGu-boonyfucoR8sPneyZ0yMM0_cBUevXDO89G_4rXFzBcBxZItOxYGjmgR_hxSzSD-1kmV3RCKdm-6Es0YT2H5iLRhH3728QtqOlx1h4nnPMkTW-K7esRRu6px2DV1k"
                alt="Jewelry Detail 1"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md"
                delay={0.3}
              />
              <AnimatedImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3wi4Yf_AUl4G4Ip9669eL_1-jVdliPkE2F7p0XOk1UYeS8riy7wKazB7OGBSu4aujn07JleU4UCK0scM66Kh-u3WINrSTqnqOFjbkx0KknacHTqQal-1-JN1rtoysNGc3Gz8k8UUBOLP8q8TMadsy6aXPKWJKSdcKaIkOgW9SYKddZPlblbg01P-lDgYHezCopj3MW_SDIOO59a04WzmJYcC6dZ8Dsak5X7O05X76mEpiPWeX5dmQli38py-kdHl0tV4R3DAN9LQ"
                alt="Jewelry Detail 2"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md"
                delay={0.4}
              />
              <AnimatedImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcpWDjp7SizdNnhL0cvCUCCVAShZW6oaW41MvcSsqMSYX4tJ534O6R8mc9LumHfWLCsXCJQlALQ9roHD78EZT-qohsKlq1Kr5p_XT_q-O72vA2okebkVgHHjhRef6UNi1xm-vKcZThiqDLEqfTwp3xm3px2hiGoAc-KvnEa_4eVl7pSnZDrIh6GavOruKC54uqze2ZEFZOyjy_A70OiO_p4Q4tBLhQKMfKVMQeQR39ciF8gqLpY426qv3cRrJm4gfEGXr3tRPWrbs"
                alt="Jewelry Detail 3"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md"
                delay={0.5}
              />
            </div>
            <Link
              href="/products"
              className="inline-flex items-center text-xs sm:text-sm font-bold tracking-wide uppercase text-text-main-light dark:text-text-main-dark border-b border-text-main-light dark:border-text-main-dark pb-1 hover:text-primary hover:border-primary transition-all group"
            >
              Shop Now
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
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.3}>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-6 sm:top-10 left-0 lg:-left-12 z-20 flex items-center space-x-2">
              <div className="h-px w-8 sm:w-12 bg-gray-400"></div>
              <span className="text-xs uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark font-semibold">
                Play Video
              </span>
            </div>
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-t-full border border-gray-300 dark:border-gray-700 p-2 sm:p-3 bg-white/30 dark:bg-black/20 backdrop-blur-sm">
              <ParallaxImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkQGdIDH4iT3cdaxRkezD24bczvhNyheJ8S7eKxAgkECY0hdlGHNm5GuF4ILKeZbEETCIKCmQrmDw9njVmgFuX7KjXLbzlOkzkidex7J20Me0RDdvol1zVyT6qQB1gcovDhjrM9d6htXqhXZOtC3W3jVk5vUefaVimJyuGFZ24aI4KrT1aBSQ4QE3vOnMdrtfLSK48_Eq1LR_U6uIMn53U0DCMoEycmmhiJ2Wc1dUfBYSvroFCa_rPCcSCvYRVkfFaKrwaWkfSUNI"
                alt="Model wearing luxury necklace"
                className="w-full h-full rounded-t-full overflow-hidden relative"
                speed={0.3}
              />
              <button className="absolute top-12 sm:top-16 left-6 sm:left-8 bg-white text-primary rounded-full p-2 sm:p-3 shadow-lg hover:scale-110 transition-transform duration-300 z-10">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="absolute top-4 right-8 sm:right-12 text-white text-xl sm:text-2xl animate-spin-slow z-10">
                ✦
              </div>
            </div>
          </div>
        </ScrollReveal>
      </header>

      {/* Shop by Category Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex justify-between items-end mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-main-light dark:text-text-main-dark">
              Shop by Category
            </h2>
            <div className="hidden sm:flex space-x-2">
              <button className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          <div className="group cursor-pointer">
            <div className="w-full aspect-square rounded-full overflow-hidden mb-3 sm:mb-4 border border-transparent group-hover:border-primary transition-all p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  alt="Earrings"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcyS9zkykoTXDqDlUvcZm-86ue13VbNQYD9M1qd7_bTHr6-crSIjOX4d3PS6NhuMrqMPmIDTkHNxlOLFRIBBip9dQ9nAxD2TZTsTDndw1o3DENMbop0ocH4LKvcbOjjwZ01NO54KfWnVKrReNj2R2xiIsd9e5TWoM9-rBi3yGtKi1oIZr3-ciA9SzBKSjFM-nSOsRSGY5r2UbAUi1kwTiIER-MCo7FCKLvLykDRQ_CBTlPeZ9f9vu66WF4X66qjk96JzGyXQve8hc"
                />
              </div>
            </div>
            <h3 className="font-display text-sm sm:text-lg uppercase tracking-wide">
              Earrings
            </h3>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
              45 Products
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="w-full aspect-square rounded-full overflow-hidden mb-3 sm:mb-4 border border-transparent group-hover:border-primary transition-all p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  alt="Bracelet"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaZw_FF3QD4_WmfqyYhqblM4sRZD4Y02F3wPfuEiALUPhL9_NwVioOXlaRkG_ryY4ZHHQKXzcgdHpH6glfXxhydpXvKW4-6596FDSAPW3BLs_H_GRJMnKo50uS1fh4jmwniXu3lB1-ZzJx_UeYIaeNi7Gf4X-rMuaevFUAZg60QtCnSTL58HM_Z21v5Yzpq7dgvSHhReEFcQWYR80JnxcnpowIv41SVfeIYzXu65XCPzttCsPztziLJpLg_gk7HS7yjewna-VqRbk"
                />
              </div>
            </div>
            <h3 className="font-display text-sm sm:text-lg uppercase tracking-wide">
              Bracelet
            </h3>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
              30 Products
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="w-full aspect-square rounded-full overflow-hidden mb-3 sm:mb-4 border border-transparent group-hover:border-primary transition-all p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  alt="Necklace"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkEKfQhDQBxWOoXWEvZOuwqokAPE8qDmjFpQF-lCNCTZ37MYr6FYkdjoOPsGn_HKRlHZLQM8EPua9okbVFIBLzZVNYJK8weNVaC3dChaaLvSY4zb93mn5y7lFsyNDFQulbvkmH5ozdXFjCxngcEs7cX8MuUj0sCJHAUVWefRyjYzq8ReYuT-2yHmOxPpiXA0UbKT1Ppf-JDJ0zUatZRqdI3DHgGIoT7ZNsE4xqT5X_oO9n6ua5PisR-1tDS0lWDqUlEBNt-OBhrIM"
                />
              </div>
            </div>
            <h3 className="font-display text-sm sm:text-lg uppercase tracking-wide">
              Necklace
            </h3>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
              56 Products
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="w-full aspect-square rounded-full overflow-hidden mb-3 sm:mb-4 border border-transparent group-hover:border-primary transition-all p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  alt="Rings"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCESaFW-i2Y8kCw3hsjFV5QXBxvDuy1NI68iNcSm7sArxBqzoY_ZT398lqcXhOhBWwHRqMuN2PZZTHNU9m9cVSNiicu5j1t_SxPSDcyhpouy3eCPgSGDHFJR49nhVbeUIGlk23URnn6M4b7p5ygraXXCzq7QHeIOySWDFPVOPGW4uEC4Dv280bsiKRLuA_14oP79HCRyQFIFxrxqnjTeT_EJzZRiroW1hsxVzmQ9I31I4bdYIeeo0kGvGnVPrHe78yEsGqcnJN7AJU"
                />
              </div>
            </div>
            <h3 className="font-display text-sm sm:text-lg uppercase tracking-wide">
              Rings
            </h3>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
              30 Products
            </p>
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 text-xs sm:text-sm font-medium uppercase tracking-wider hover:bg-primary hover:text-white hover:border-primary transition-all min-h-[44px]"
          >
            View All Categories
          </Link>
        </div>
      </section>

      {/* Bestseller Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex justify-between items-center mb-8 sm:mb-10">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-main-light dark:text-text-main-dark mb-2">
                Bestseller Products
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm">
                Discover our bestselling products, each a testament to quality
                and style.
              </p>
            </div>
            <div className="hidden md:flex space-x-2">
              <button className="h-10 w-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="h-10 w-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Product 1 */}
          <div className="group">
            <div className="relative bg-[#f5f0e6] dark:bg-[#1a1a1a] rounded-lg overflow-hidden mb-4 p-6 sm:p-8 flex items-center justify-center h-64 sm:h-80 transition-colors duration-300">
              <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-red-500 z-10">
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
              <img
                alt="Huggie Earrings"
                className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal transform group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeN_fmB-NJtiD0CkQ8HLvy5Lu9i0BWmkzj-dS7IdYOhVfJJAUQPLwoPdSAqKs3cP_VF9hPbpLZrvdMLJQmUdocBH5rZwTKggLVls5RICP9sHoEFlBMmdB7QACvw3ibKyC2MR7Y3AfFeqb_5rkH0UJuXyw5n_q2oSn4qmbLqQMCpAD_YLhIJJSl4iRLWQIlA0sTk370HqMakdgXJKt0yDatQ43kEYSSUZma-fbSeQUQX6lJcBxukHbEmITuOEGa-Ps8tOrp6g6nV_U"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-display text-base sm:text-lg text-text-main-light dark:text-text-main-dark">
                  Huggie Earrings
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-primary font-bold text-sm sm:text-base">
                    $1450
                  </span>
                  <span className="text-text-muted-light dark:text-text-muted-dark line-through text-xs sm:text-sm">
                    $1800
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs text-yellow-500 mt-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="ml-1 text-text-muted-light dark:text-text-muted-dark">
                  4.5
                </span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group">
            <div className="relative bg-[#f5f0e6] dark:bg-[#1a1a1a] rounded-lg overflow-hidden mb-4 p-6 sm:p-8 flex items-center justify-center h-64 sm:h-80 transition-colors duration-300">
              <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-red-500 z-10">
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
              <img
                alt="Chain Monogram Necklace"
                className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal transform group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnNIcf14dzow44hhgtWLiR0fq_z2eaZoe8YVtOIO98jQX5b4t8thZxZ-wg1QqeVa909SVsYhFUZMY6HWR9isu3szgkrHGhKIqJGwQV9VRGek1Ml7EX_iMRUYPK8bjyyF45TseFKCqJdohwDrGYJEsYHti6hYaUpSUVfgz9Cj5wNhJFaZMMhN0gz60phpjtMZ-s-FLXZVFu5h-PZmsRKDKyP1BoASuqE0_bWyyTnsjtnIa67nLo1yhqFvFGY0MukGd11QJxq-unv4Y"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-display text-base sm:text-lg text-text-main-light dark:text-text-main-dark">
                  Chain Monogram Necklace
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-primary font-bold text-sm sm:text-base">
                    $1450
                  </span>
                  <span className="text-text-muted-light dark:text-text-muted-dark line-through text-xs sm:text-sm">
                    $1600
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs text-yellow-500 mt-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="ml-1 text-text-muted-light dark:text-text-muted-dark">
                  4.9
                </span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group">
            <div className="relative bg-[#f5f0e6] dark:bg-[#1a1a1a] rounded-lg overflow-hidden mb-4 p-6 sm:p-8 flex items-center justify-center h-64 sm:h-80 transition-colors duration-300">
              <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-red-500 z-10">
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
              <img
                alt="Pearl Bow Earrings"
                className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal transform group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR8di1lrueoq_2yu682FeI7eTEqJYf89HSuPmbmI2uoH1czMRRw--f-sRE0jEuf0meZQvRcUT6ksbdlLtxtiEyQrDeKrnaQlE9QLn12_evzCo-Zsq6ENd9p3l9tlcTrJ20mJ85By09UkBTNV2jk6d-gO-MoiPn1hkdXj5xR_6RSZwllaMbiki2i7h_dz5V5MIkj4YrLoqnkLIo9IjgbmgSILq8E8bZBl1ek1PhqlxQgwfEyAteIfBtyLR3vI9nHEFyT0XhfFRNP0A"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-display text-base sm:text-lg text-text-main-light dark:text-text-main-dark">
                  Pearl Bow Earrings
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-primary font-bold text-sm sm:text-base">
                    $850
                  </span>
                  <span className="text-text-muted-light dark:text-text-muted-dark line-through text-xs sm:text-sm">
                    $950
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs text-yellow-500 mt-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="ml-1 text-text-muted-light dark:text-text-muted-dark">
                  4.9
                </span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group">
            <div className="relative bg-[#f5f0e6] dark:bg-[#1a1a1a] rounded-lg overflow-hidden mb-4 p-6 sm:p-8 flex items-center justify-center h-64 sm:h-80 transition-colors duration-300">
              <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-red-500 z-10">
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
              <img
                alt="Stitchband Bracelet"
                className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal transform group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGZYBpH4_xWISLt0fX6U7xxp_Z_5G4EywzuCCPqsv7o0Ww8K4VpceTUXsjrlpQvJRrXSIytE03nhzHEByR5dY0oGk1HxJXZ5HtISTjJHr0_G2_fFI8gwum7DWUyz1e1ilIIQdpv0PE0zTS4j_sI5bvfspemF9GLE26sOeNKtJtej786908Wzy_sIUtXz4MrEs8WWDp5ZfBcgVtpjqMbMKHcDoQq23S7hKlJsgJ0gl3OXT3hNAOtoxnw6j01QAd3OAgl3lSeEqZsW8"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-display text-base sm:text-lg text-text-main-light dark:text-text-main-dark">
                  Stitchband Bracelet
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-primary font-bold text-sm sm:text-base">
                    $1150
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs text-yellow-500 mt-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="ml-1 text-text-muted-light dark:text-text-muted-dark">
                  4.6
                </span>
              </div>
            </div>
          </div>

          {/* Product 5 */}
          <div className="group">
            <div className="relative bg-[#f5f0e6] dark:bg-[#1a1a1a] rounded-lg overflow-hidden mb-4 p-6 sm:p-8 flex items-center justify-center h-64 sm:h-80 transition-colors duration-300">
              <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-red-500 z-10">
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
              <img
                alt="Flower Collar Necklace"
                className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal transform group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-SmWoBcOhgyPLFa4u58VEdSMw8vfic75g5XvO0O4CunLOptrfchffLvCXdsyfX8_DZE2v4ljTsDV62GXjXxbk_ahy7MTvJNbGUaOXj26qq5IUTmEQbjhzxcoRM7kRdCNmHHUodNQmVL3t6uBnpf-5RNOpd9ucqeIW1c6naiy92htU7eWsR-kgzltNSkWIifLuZdFFreCwjupRASQFJJtSPMPX65M2ztJ1meakOAE0Zucn3w32riFtI-S7rx6nllm7BUwy0tY34U8"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-display text-base sm:text-lg text-text-main-light dark:text-text-main-dark">
                  Flower Collar Necklace
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-primary font-bold text-sm sm:text-base">
                    $1330
                  </span>
                  <span className="text-text-muted-light dark:text-text-muted-dark line-through text-xs sm:text-sm">
                    $1500
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs text-yellow-500 mt-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="ml-1 text-text-muted-light dark:text-text-muted-dark">
                  4.9
                </span>
              </div>
            </div>
          </div>

          {/* Product 6 */}
          <div className="group">
            <div className="relative bg-[#f5f0e6] dark:bg-[#1a1a1a] rounded-lg overflow-hidden mb-4 p-6 sm:p-8 flex items-center justify-center h-64 sm:h-80 transition-colors duration-300">
              <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-red-500 z-10">
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
              <img
                alt="Glass Stone Bracelet"
                className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal transform group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTHZF8ZcZRki-1s8AzLPujpwG5_WBxYy8SFwxCrPun_buroKgAo0bRaOGOkxi0pbXFPnZ6TklMJm3MW6qjlCogsEiC7846tKF8xGqI1mX59qgVFIrdHZ5wNEtp3767kgxJeuySivn_bPNjoPD-cOSsQq1wC6AUVkiWWzU11Tcvi6N1UVllDocPxDYxjDdeu-MSBo8gXTIW7itwgvAncMLJTlJEad9XlXz-3omZCnpoTNxcl1Che3yWXsTmWuX3m_Pz7S68eSiWJWY"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-display text-base sm:text-lg text-text-main-light dark:text-text-main-dark">
                  Glass Stone Bracelet
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-primary font-bold text-sm sm:text-base">
                    $1250
                  </span>
                  <span className="text-text-muted-light dark:text-text-muted-dark line-through text-xs sm:text-sm">
                    $1350
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs text-yellow-500 mt-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="ml-1 text-text-muted-light dark:text-text-muted-dark">
                  4.9
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl">
        <ScrollReveal direction="right" delay={0.2}>
          <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden">
            <ParallaxImage
              alt="Close up jewelry model"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGw-hwtsqHCJS7X1uYc2soJRtbBR9KVh2qDa5Y2sQ1wfP1vdG5HqDDtkTi679z4CQmSZxzrb9Dv6k6w245rwobXgCkiV83nSAGbG-1Pv3UonrVzyTupqcYiAPLnxN_gtlc6gWPqXfc8YDpFMiHRZj7GS-PHrwvwqaArcV4zZbgrGEw4q3JBx2nZv4krZaGp1AqMXTBchgMGF3oloSWb0-JP-jYYN8ThX0QEu5_HCTz7itA07kkdQsgL6-wTLStV5AReQc4TnWajJY"
              className="w-full h-full"
              speed={0.4}
            />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.3}>
          <div className="bg-[#fcf7ef] dark:bg-[#252525] p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-main-light dark:text-text-main-dark mb-4 sm:mb-6 leading-tight">
              Creates Lasting Memories of Each Occasion
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 border border-gray-400 dark:border-gray-500 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all min-h-[44px]"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
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
      </section>

      {/* Feature Section 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl">
        <ScrollReveal direction="right" delay={0.2}>
          <div className="bg-[#fcf7ef] dark:bg-[#252525] p-8 sm:p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-main-light dark:text-text-main-dark mb-4 sm:mb-6 leading-tight">
              Craft and Designer
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
              Distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 border border-gray-400 dark:border-gray-500 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all min-h-[44px]"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
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
        <ScrollReveal direction="left" delay={0.3}>
          <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden order-1 lg:order-2">
            <ParallaxImage
              alt="Jewelry model portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrLdaS8SdLdyU-jemGs4R9g-U4jKihuObDTqGLksuV7ubbu33ydEM6YhFVJsVr4BoPug7r31tLSv4TLBRqvbvVqSVdj68U0j0VBSOJ6co47A_4qzCRtaLxOSqjpaMHD5oAjCcw0sxlDe8jcrqTfVnW-FNVILZvYk76Ul1r2AB3P_VnecwZ1XUY_ah7890W5-sPYL2z3NJtcWXwBbOozqxtG4kMoveHvK_113w0HWXgwATPpc30OTXw1gs9t1WQVETJHbxvax1LrRk"
              className="w-full h-full"
              speed={0.4}
            />
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
