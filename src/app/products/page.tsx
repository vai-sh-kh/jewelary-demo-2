"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  material: string;
  href: string;
  isNew?: boolean;
  isEditorPick?: boolean;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Celestial Pendant",
    price: "$2,400",
    description: "18k Gold & Diamonds",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
    material: "Gold",
    href: "/products/1",
  },
  {
    id: 2,
    name: "Eternity Bangle",
    price: "$5,200",
    description: "24k Solid Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEVvepFADE_UumZT2VDVYmV41mRiRoC9tQx0xYyeQjWkkHG_XgmYXQThVfYLm9EZqtxrf4tz1inPsAw4WE4OmWI0IFQzucFU9yRpK31OoGoIPPy1gpD6WXlDefjCXXBlW4ETSIo09PTAr9OB5EFxenVkd3pliZZuxSYelnMipT0Lx6nI9JavkCnCJwUJ8z8-wV1_TnxzbkBx8vYredEWA2sDA23SLsVP5AWSl_7UHSusLwLNcI8hSVr__PztoklsWg30Zrmfq0wkk",
    material: "Gold",
    href: "/products/2",
  },
  {
    id: 3,
    name: "Radiance Solitaire",
    price: "$8,900",
    description: "Platinum & Diamond",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI",
    material: "Platinum",
    href: "/products/3",
    isNew: true,
  },
  {
    id: 4,
    name: "Aura Hoops",
    price: "$1,850",
    description: "18k Rose Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSE_ewOI2HSQB04rsntQKaEMiiW61Uk_C-GlrRxRwhiIOoi5fOoK_s3VPCWtRJTbO0OPdmfgjTHHFEu-WiTPv4P5tW5mRNbIY7WEB8FlEb1kRnEgoK5FwhtU3ICDtVCw_W7xA2wCDbP_k_Cj4akj4Xtzoqu23zR9lczxcYlaNZegXTBsDMOTHbsIhrK8FGac3COmfzuFQMukv3rBbtG6iIl52nZPvHj9qwdc0FATsDHba4QUYwpchOgbb99DoICZnOGv8robuQcU",
    material: "Gold",
    href: "/products/4",
  },
  {
    id: 5,
    name: "Heritage Timepiece",
    price: "$12,500",
    description: "Gold & Leather",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfURgwQCUs2JrISBCmfwL8U3uL-3TcjeH0Zhq_qcjcKzTD1VbPRlJ5-vdML0mK-TJNLdAkO6zHAjCzGp1pIT_HdyNn1n5EBOWSyrupkKPUvzPXKzqUbQK00CiVkHYWwe2lxUGE9Gska4pbOzfKBJvnJWqxw0P2gdYpvHaTeA09PK9eJLlqlKCosLIdgcb61xlpZb6UMxVMA2pFiPbxzTOAB7EkFRl8pKI3LaGriNdGWYBazqlYFDVEQfFsIEi_vF-JwpqigW2Jqdw",
    material: "Watches",
    href: "/products/5",
  },
  {
    id: 6,
    name: "Serenity Choker",
    price: "$950",
    description: "14k Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6BxJ2gcD1U_l6JmkKOFDt4dK32w0pq13eIz8YENvebODlT21KufgA4q6YtFGU3Zz-r6_CJ_7Mmzm1fsx6jTJ2q957aPgMwup8Pd5lgKjIXGxaDkKcjb-Ge1eWYnsopz8e_16a5Zh8XRH6Qynbfn0tQ1_dOXa9FDhPEQuvJaz63jBq0f0YJ9zkNfEtrY6j3k7MbomztnM2CEVXq8-N6JkD4a0if0sRnYPhLgLpgm_6LZmnaPm-RCQqI0uI0mhZAiTts9B98-B1MwY",
    material: "Gold",
    href: "/products/6",
    isEditorPick: true,
  },
  {
    id: 7,
    name: "Platinum Elegance Ring",
    price: "$3,200",
    description: "Platinum & Diamond",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOBUv411CpmLidQi2WpSD3af7QO2bCTb3pB5seHvHqjOkux2MpR28GszL1bFSlAGxIwJClODCOVHdKSkVWirCy18oMMZak0eIA8nZ-szWE_cVDBhKMgaZQ21vlHZcPn7ww8bGf_UMCFhLgVc2SlUI4D_FpwvBYZfFc5eqyOmkkwXjLe76Xdw3lqOSDDuyZTFuzTMDKc4uJh5PusIQoQiAXyM5nSjJaKIUh0C-XqVlMTJgkO1qy8OeWAm-RNjuJicuoVa9LbunSidw",
    material: "Platinum",
    href: "/products/7",
  },
  {
    id: 8,
    name: "Sapphire Dream Necklace",
    price: "$4,500",
    description: "18k Gold & Sapphire",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAc7Q_3040_aTHmbm2suK-IvMl9f-9ZeWsKlyfc-0-WGFpm1V9Bik-8QqJL_xjgz4Cwx1_HhFwxU9TRUm3mxu7h0DO0c-9U-3ackUO3iuulf7Lcgqu56_gPBMIHyb-03Oby9TDuDLAXKdhd9rom7gFQCZ2zaYGvoy_CAFH29ffibQtUeJVZo-hozQt3DvyqGFm27KVDoeh3itXRiwCoYNxFAUWRVxm5231DynrwXf7pwYRZ6GUXFjAM94XiZxBgIyZ8ciMGc4h1L04",
    material: "Gemstones",
    href: "/products/8",
  },
  {
    id: 9,
    name: "Ruby Classic Ring",
    price: "$2,800",
    description: "18k Gold & Ruby",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAf1ZQCTBTV1qrfN1vgZxdnkWMZXt1fL7KyoxeDBfuiRmtDs4FK1OYAobfaZXjQHngC0yUKeIXiuji4OtFx3QOG2Yk54bI1jJq4so6PcF6CE5EfUPcrh5haUgdZX0vXMyAJhILAyprl5LbkoFJ8rhaiHfAY8uEp7EP84sz_6ODeQcFfMIQCl7XqPoXHYeKXYMWuWmXKB-zK0QjZVErxdy4PHkUX3tZHGwE9mB4P77IXsx4ee4qe9H6fjZyLCh3wAPk5CYjJ417sIRQ",
    material: "Gemstones",
    href: "/products/9",
  },
  {
    id: 10,
    name: "Platinum Heritage Watch",
    price: "$15,000",
    description: "Platinum & Leather",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeN_fmB-NJtiD0CkQ8HLvy5Lu9i0BWmkzj-dS7IdYOhVfJJAUQPLwoPdSAqKs3cP_VF9hPbpLZrvdMLJQmUdocBH5rZwTKggLVls5RICP9sHoEFlBMmdB7QACvw3ibKyC2MR7Y3AfFeqb_5rkH0UJuXyw5n_q2oSn4qmbLqQMCpAD_YLhIJJSl4iRLWQIlA0sTk370HqMakdgXJKt0yDatQ43kEYSSUZma-fbSeQUQX6lJcBxukHbEmITuOEGa-Ps8tOrp6g6nV_U",
    material: "Watches",
    href: "/products/10",
  },
  {
    id: 11,
    name: "Emerald Grace Earrings",
    price: "$3,600",
    description: "18k Gold & Emerald",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnNIcf14dzow44hhgtWLiR0fq_z2eaZoe8YVtOIO98jQX5b4t8thZxZ-wg1QqeVa909SVsYhFUZMY6HWR9isu3szgkrHGhKIqJGwQV9VRGek1Ml7EX_iMRUYPK8bjyyF45TseFKCqJdohwDrGYJEsYHti6hYaUpSUVfgz9Cj5wNhJFaZMMhN0gz60phpjtMZ-s-FLXZVFu5h-PZmsRKDKyP1BoASuqE0_bWyyTnsjtnIa67nLo1yhqFvFGY0MukGd11QJxq-unv4Y",
    material: "Gemstones",
    href: "/products/11",
  },
  {
    id: 12,
    name: "Diamond Solitaire Ring",
    price: "$6,500",
    description: "Platinum & Diamond",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR8di1lrueoq_2yu682FeI7eTEqJYf89HSuPmbmI2uoH1czMRRw--f-sRE0jEuf0meZQvRcUT6ksbdlLtxtiEyQrDeKrnaQlE9QLn12_evzCo-Zsq6ENd9p3l9tlcTrJ20mJ85By09UkBTNV2jk6d-gO-MoiPn1hkdXj5xR_6RSZwllaMbiki2i7h_dz5V5MIkj4YrLoqnkLIo9IjgbmgSILq8E8bZBl1ek1PhqlxQgwfEyAteIfBtyLR3vI9nHEFyT0XhfFRNP0A",
    material: "Platinum",
    href: "/products/12",
  },
];

const categories = [
  "All Categories",
  "Gold",
  "Platinum",
  "Gemstones",
  "Watches",
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All Categories") {
      return allProducts;
    }
    return allProducts.filter((product) => product.material === activeCategory);
  }, [activeCategory]);

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
            Timeless elegance tailored for you. Discover pieces that embody
            luxury and sophistication.
          </p>
        </div>
      </section>

      {/* Categories Navbar */}
      <section className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 flex flex-col items-center justify-center relative group cursor-pointer min-h-[44px] transition-colors ${
                  activeCategory === category
                    ? "text-primary"
                    : "text-text-muted-light dark:text-text-muted-dark hover:text-primary"
                }`}
              >
                <span
                  className={`text-xs sm:text-sm uppercase tracking-widest mb-1 ${
                    activeCategory === category ? "font-bold" : "font-medium"
                  }`}
                >
                  {category}
                </span>
                <span
                  className={`h-[2px] bg-primary transition-all duration-300 ${
                    activeCategory === category
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto flex w-full flex-col px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
              No products found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:gap-x-8 gap-y-16 sm:gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => {
              // Show editorial card for first product when showing all categories
              if (index === 2 && activeCategory === "All Categories") {
                return (
                  <div
                    key="editorial"
                    className="relative flex flex-col justify-end overflow-hidden rounded-lg bg-[#f5f0e6] dark:bg-[#1a150d] min-h-[400px] sm:min-h-[500px] group cursor-pointer"
                  >
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2QVmxViLOCAMEAczUllpj-BaN3R58dNJQAZ499j2AMV8UVnUxAc9Xsqit7-c40bd3-awAuqYNuUgJK6-gPIRmHxErYiLEyRhfI8uymfJ2bikmy7Xkcz_H77c9yAx9sYajxnyB4fcRGEwdxDQSda8a12C9aVxvQkhxDgKZ3TapqZ-T5R7zh3WztYMrQHCJx04cvQxjzfRhpi8NjZGn_N-pN2nMRqNJbTq52zZgru_EXNdOVyRPuECPIRX2J2U_uXWtuqivjKvACLM"
                      alt="Abstract Luxury"
                      fill
                      className="object-cover opacity-70 transition-transform duration-[2s] group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                    <div className="relative z-10 p-6 sm:p-8 md:p-10">
                      <span className="mb-2 sm:mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        The Collection
                      </span>
                      <h3 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-display font-light text-white leading-tight">
                        Golden
                        <br />
                        Standards
                      </h3>
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-2 sm:gap-3 text-xs font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors min-h-[44px]"
                      >
                        Discover More{" "}
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
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              }

              // Show editor's pick card for editor pick products
              if (product.isEditorPick) {
                return (
                  <div
                    key={product.id}
                    className="group relative overflow-hidden rounded-lg bg-[#f5f0e6] dark:bg-[#1a150d] sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row h-[500px] sm:h-[400px]"
                  >
                    <div className="relative h-2/3 md:h-full w-full md:w-3/5 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                    <div className="flex flex-1 flex-col justify-center bg-[#fcf7ef] dark:bg-[#15110a] p-6 sm:p-8 md:p-12 lg:p-16 border-l border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="h-[1px] w-6 sm:w-8 bg-primary"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent-gold">
                          Editor&apos;s Pick
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-medium text-text-main-light dark:text-text-main-dark mb-2 sm:mb-3">
                        {product.name}
                      </h3>
                      <p className="text-text-muted-light dark:text-text-muted-dark/80 mb-6 sm:mb-8 leading-relaxed font-light text-sm sm:text-base">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl sm:text-2xl font-bold text-primary">
                          {product.price}
                        </span>
                        <Link
                          href={product.href}
                          className="bg-white/5 border border-white/20 dark:border-gray-600 px-6 sm:px-8 py-2 sm:py-3 text-xs font-bold uppercase tracking-[0.15em] text-text-main-light dark:text-white hover:bg-primary hover:text-white transition-all rounded-sm min-h-[44px] flex items-center justify-center"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular product card
              return (
                <div
                  key={product.id}
                  className="group flex flex-col gap-3 sm:gap-4"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#f5f0e6] dark:bg-[#1a150d]">
                    {product.isNew && (
                      <div className="absolute left-3 sm:left-4 top-3 sm:top-4 z-20">
                        <span className="bg-primary/90 backdrop-blur px-2 sm:px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg rounded-sm">
                          New
                        </span>
                      </div>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-transparent">
                      <Link
                        href={product.href}
                        className="w-full bg-white py-3 sm:py-4 text-xs font-bold uppercase tracking-[0.15em] text-black hover:bg-primary hover:text-white transition-colors shadow-xl rounded-sm text-center min-h-[44px] flex items-center justify-center"
                      >
                        Quick View
                      </Link>
                    </div>
                    <button className="absolute right-3 sm:right-4 top-3 sm:top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-primary transition-colors opacity-0 group-hover:opacity-100 duration-300 min-w-[44px] min-h-[44px]">
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
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-base sm:text-lg font-display font-medium text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-base sm:text-lg font-bold text-primary">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-light text-text-muted-light dark:text-text-muted-dark">
                      {product.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        <div className="mt-12 sm:mt-20 flex justify-center">
          <button className="group flex items-center gap-2 sm:gap-3 rounded-full border border-text-muted-light/30 dark:border-text-muted-dark/30 bg-transparent px-8 sm:px-10 py-3 sm:py-4 text-xs font-bold uppercase tracking-widest text-text-main-light dark:text-white hover:border-primary hover:bg-primary hover:text-white transition-all min-h-[44px]">
            Load More Products
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
