"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  href: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Celestial Pendant",
    price: "$2,400",
    description: "18k Gold & Diamonds",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8U-QRd4LifKF6XHuAdsP0QpQRlSAs9lHy-KZZjL4Nu8BvOLoGrZ3h_afJRmZpoR1kt5kHg8cWWxUc7OJf2yieutp-gRMgOw4wv3E7MbK0GxRvgK6y24_0xoo4nRHDuDTRKT-ilVBd2t4Fb2MGHXOt23dwi6CSz9U38lnUHSzJTiq1q2xYDvwslTGvGj6Hs3bpJ4migyWBqFPDO7r6JgoRRTSLQ54BMWcLuJZSPkgzmvG-tOP-pmXyu6dU-gKBF8O4vDxc4_xya5U",
    category: "Necklace",
    href: "/products/1",
  },
  {
    id: 2,
    name: "Eternity Bangle",
    price: "$5,200",
    description: "24k Solid Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEVvepFADE_UumZT2VDVYmV41mRiRoC9tQx0xYyeQjWkkHG_XgmYXQThVfYLm9EZqtxrf4tz1inPsAw4WE4OmWI0IFQzucFU9yRpK31OoGoIPPy1gpD6WXlDefjCXXBlW4ETSIo09PTAr9OB5EFxenVkd3pliZZuxSYelnMipT0Lx6nI9JavkCnCJwUJ8z8-wV1_TnxzbkBx8vYredEWA2sDA23SLsVP5AWSl_7UHSusLwLNcI8hSVr__PztoklsWg30Zrmfq0wkk",
    category: "Bracelet",
    href: "/products/2",
  },
  {
    id: 3,
    name: "Radiance Solitaire",
    price: "$8,900",
    description: "Platinum & Diamond",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJLaIEuPEFJixqYVqm2BIPrrQca-oKskPWBrzXoTA3x1elmQSgguNHCC2Bg2g6EV2Gn69BEghHfjqp-yr5YE0wgippByTcx213g4il3K2mWwE5i-_wl9w8794kvMONRhHqAFUqZyv-h9kDGlB4yOEZZee9YGko1ItavblnHwn9BWhpn-g9wk3AHaxz051XVMoXx4jRJLvZIWhxRHAATu6yDnTcPtFrQxrZU_MP6B3423u8CbotHeWVvcHrzzqHmuWPoPMh0gzFOI",
    category: "Ring",
    href: "/products/3",
  },
  {
    id: 4,
    name: "Aura Hoops",
    price: "$1,850",
    description: "18k Rose Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSE_ewOI2HSQB04rsntQKaEMiiW61Uk_C-GlrRxRwhiIOoi5fOoK_s3VPCWtRJTbO0OPdmfgjTHHFEu-WiTPv4P5tW5mRNbIY7WEB8FlEb1kRnEgoK5FwhtU3ICDtVCw_W7xA2wCDbP_k_Cj4akj4Xtzoqu23zR9lczxcYlaNZegXTBsDMOTHbsIhrK8FGac3COmfzuFQMukv3rBbtG6iIl52nZPvHj9qwdc0FATsDHba4QUYwpchOgbb99DoICZnOGv8robuQcU",
    category: "Earrings",
    href: "/products/4",
  },
  {
    id: 5,
    name: "Heritage Timepiece",
    price: "$12,500",
    description: "Gold & Leather",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfURgwQCUs2JrISBCmfwL8U3uL-3TcjeH0Zhq_qcjcKzTD1VbPRlJ5-vdML0mK-TJNLdAkO6zHAjCzGp1pIT_HdyNn1n5EBOWSyrupkKPUvzPXKzqUbQK00CiVkHYWwe2lxUGE9Gska4pbOzfKBJvnJWqxw0P2gdYpvHaTeA09PK9eJLlqlKCosLIdgcb61xlpZb6UMxVMA2pFiPbxzTOAB7EkFRl8pKI3LaGriNdGWYBazqlYFDVEQfFsIEi_vF-JwpqigW2Jqdw",
    category: "Watch",
    href: "/products/5",
  },
  {
    id: 6,
    name: "Eternal Gold Hoops",
    price: "$550",
    description: "18k Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3q2EhMYF6VB9FZ4OqJ6IT1zmBQjIJw4_gXuKk3K5p5tsiIqritVNwIuxkSE4rrARRGWTIQ--4v1NHqUgtWkSJeSQItVLvA89Um2iXDbp7ChaI5i7TitwzNowSSUyrok46YxFUI36LPbSFVDklnOYMg8lwtqJo-TZdtVFNzwDy4ea4DvayFz55ksjzjib48XNRdvlyYzZGU74OzbopaGRkLouZ9MglrzbSJPbqn2IqgSrB8Nj7sq1GpS5rFCkYZwkK0WL0hFxAj9A",
    category: "Earrings",
    href: "/products/5",
  },
  {
    id: 7,
    name: "Solitaire Diamond Ring",
    price: "$2,250",
    description: "Platinum & Diamond",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOBUv411CpmLidQi2WpSD3af7QO2bCTb3pB5seHvHqjOkux2MpR28GszL1bFSlAGxIwJClODCOVHdKSkVWirCy18oMMZak0eIA8nZ-szWE_cVDBhKMgaZQ21vlHZcPn7ww8bGf_UMCFhLgVc2SlUI4D_FpwvBYZfFc5eqyOmkkwXjLe76Xdw3lqOSDDuyZTFuzTMDKc4uJh5PusIQoQiAXyM5nSjJaKIUh0C-XqVlMTJgkO1qy8OeWAm-RNjuJicuoVa9LbunSidw",
    category: "Ring",
    href: "/products/6",
  },
  {
    id: 8,
    name: "Heirloom Chain",
    price: "$1,850",
    description: "24k Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAc7Q_3040_aTHmbm2suK-IvMl9f-9ZeWsKlyfc-0-WGFpm1V9Bik-8QqJL_xjgz4Cwx1_HhFwxU9TRUm3mxu7h0DO0c-9U-3ackUO3iuulf7Lcgqu56_gPBMIHyb-03Oby9TDuDLAXKdhd9rom7gFQCZ2zaYGvoy_CAFH29ffibQtUeJVZo-hozQt3DvyqGFm27KVDoeh3itXRiwCoYNxFAUWRVxm5231DynrwXf7pwYRZ6GUXFjAM94XiZxBgIyZ8ciMGc4h1L04",
    category: "Necklace",
    href: "/products/7",
  },
  {
    id: 9,
    name: "Infinity Bangle",
    price: "$980",
    description: "18k Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAf1ZQCTBTV1qrfN1vgZxdnkWMZXt1fL7KyoxeDBfuiRmtDs4FK1OYAobfaZXjQHngC0yUKeIXiuji4OtFx3QOG2Yk54bI1jJq4so6PcF6CE5EfUPcrh5haUgdZX0vXMyAJhILAyprl5LbkoFJ8rhaiHfAY8uEp7EP84sz_6ODeQcFfMIQCl7XqPoXHYeKXYMWuWmXKB-zK0QjZVErxdy4PHkUX3tZHGwE9mB4P77IXsx4ee4qe9H6fjZyLCh3wAPk5CYjJ417sIRQ",
    category: "Bracelet",
    href: "/products/8",
  },
  {
    id: 10,
    name: "Huggie Earrings",
    price: "$1,450",
    description: "18k Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeN_fmB-NJtiD0CkQ8HLvy5Lu9i0BWmkzj-dS7IdYOhVfJJAUQPLwoPdSAqKs3cP_VF9hPbpLZrvdMLJQmUdocBH5rZwTKggLVls5RICP9sHoEFlBMmdB7QACvw3ibKyC2MR7Y3AfFeqb_5rkH0UJuXyw5n_q2oSn4qmbLqQMCpAD_YLhIJJSl4iRLWQIlA0sTk370HqMakdgXJKt0yDatQ43kEYSSUZma-fbSeQUQX6lJcBxukHbEmITuOEGa-Ps8tOrp6g6nV_U",
    category: "Earrings",
    href: "/products/1",
  },
  {
    id: 11,
    name: "Chain Monogram Necklace",
    price: "$1,450",
    description: "18k Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnNIcf14dzow44hhgtWLiR0fq_z2eaZoe8YVtOIO98jQX5b4t8thZxZ-wg1QqeVa909SVsYhFUZMY6HWR9isu3szgkrHGhKIqJGwQV9VRGek1Ml7EX_iMRUYPK8bjyyF45TseFKCqJdohwDrGYJEsYHti6hYaUpSUVfgz9Cj5wNhJFaZMMhN0gz60phpjtMZ-s-FLXZVFu5h-PZmsRKDKyP1BoASuqE0_bWyyTnsjtnIa67nLo1yhqFvFGY0MukGd11QJxq-unv4Y",
    category: "Necklace",
    href: "/products/2",
  },
  {
    id: 12,
    name: "Pearl Bow Earrings",
    price: "$850",
    description: "Pearl & Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR8di1lrueoq_2yu682FeI7eTEqJYf89HSuPmbmI2uoH1czMRRw--f-sRE0jEuf0meZQvRcUT6ksbdlLtxtiEyQrDeKrnaQlE9QLn12_evzCo-Zsq6ENd9p3l9tlcTrJ20mJ85By09UkBTNV2jk6d-gO-MoiPn1hkdXj5xR_6RSZwllaMbiki2i7h_dz5V5MIkj4YrLoqnkLIo9IjgbmgSILq8E8bZBl1ek1PhqlxQgwfEyAteIfBtyLR3vI9nHEFyT0XhfFRNP0A",
    category: "Earrings",
    href: "/products/3",
  },
];

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Prevent auto-focus on mobile
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.blur();
    }
  }, [isOpen]);

  const filteredProducts = useMemo(() => {
    if (searchQuery.trim() === "") {
      return [];
    }

    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const preventScroll = (e: TouchEvent) => {
      if (isOpen) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent background scrolling
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalWidth = document.body.style.width;
      const originalTop = document.body.style.top;
      const scrollY = window.scrollY;

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;

      // Prevent touch scrolling on mobile
      document.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("touchmove", preventScroll);
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.width = originalWidth;
        document.body.style.top = originalTop;
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col md:items-start md:justify-start md:pt-8">
      {/* Backdrop - Only on desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Mobile: Full Screen Container */}
      <div className="md:hidden fixed inset-0 bg-background-light dark:bg-background-dark flex flex-col">
        {/* Mobile Header with Back Button and Search */}
        <div className="sticky top-0 z-10 bg-background-light/98 dark:bg-background-dark/98 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-700/80 shadow-sm">
          <div className="flex items-center gap-2 px-4 py-4">
            {/* Back Button */}
            <button
              onClick={onClose}
              className="text-text-main-light dark:text-text-main-dark hover:text-primary active:scale-95 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/50 -ml-1"
              aria-label="Close search"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-3 bg-white dark:bg-[#1a150d] border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 shadow-sm focus-within:border-primary focus-within:shadow-md transition-all duration-200">
              <svg
                className="w-5 h-5 text-text-muted-light dark:text-text-muted-dark shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jewelry, rings, necklaces..."
                className="flex-1 bg-transparent text-text-main-light dark:text-text-main-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none text-base font-medium"
                autoFocus={false}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary active:scale-95 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/50"
                  aria-label="Clear search"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: Scrollable Results Area */}
        <div className="flex-1 overflow-y-auto min-h-0 max-h-full overscroll-contain">
          {searchQuery.trim() !== "" ? (
            filteredProducts.length > 0 ? (
              <div className="px-4 py-6">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider mb-1">
                      Search Results
                    </p>
                    <p className="text-sm font-medium text-text-main-light dark:text-text-main-dark">
                      {filteredProducts.length}{" "}
                      {filteredProducts.length === 1 ? "item" : "items"} found
                    </p>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={product.href}
                      onClick={onClose}
                      className="group flex flex-col gap-3 active:scale-[0.98] transition-transform duration-150"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#f5f0e6] dark:bg-[#1a150d] shadow-sm group-active:shadow-md transition-shadow duration-200">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-active:scale-105"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-sm font-display font-semibold text-text-main-light dark:text-text-main-dark group-active:text-primary transition-colors line-clamp-2 leading-tight">
                          {product.name}
                        </h3>
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-base font-bold text-primary">
                            {product.price}
                          </span>
                          <span className="text-[10px] font-medium text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider px-2 py-0.5 bg-gray-100 dark:bg-gray-800/50 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-xs font-light text-text-muted-light dark:text-text-muted-dark line-clamp-1 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center px-6 py-16 min-h-[60vh] text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-text-muted-light dark:text-text-muted-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-display font-semibold text-text-main-light dark:text-text-main-dark mb-2">
                  No results found
                </h3>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6 max-w-xs leading-relaxed">
                  We couldn&apos;t find any products matching &quot;
                  <span className="font-medium text-text-main-light dark:text-text-main-dark">
                    {searchQuery}
                  </span>
                  &quot;
                </p>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <p className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider mb-2">
                    Try searching for:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      "Rings",
                      "Necklaces",
                      "Earrings",
                      "Bracelets",
                      "Watches",
                    ].map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="px-4 py-2 text-xs font-medium text-text-main-light dark:text-text-main-dark bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-primary hover:text-primary active:scale-95 transition-all duration-200 min-h-[36px]"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-center px-6 py-12 min-h-[60vh]">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent-gold/10 flex items-center justify-center mb-6">
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-text-main-light dark:text-text-main-dark mb-3">
                Start Searching
              </h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-8 max-w-xs text-center leading-relaxed">
                Search for jewelry, rings, necklaces, earrings, and more
              </p>
              <div className="w-full max-w-xs">
                <p className="text-xs font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider mb-4 text-center">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "Gold Rings",
                    "Diamond Necklaces",
                    "Earrings",
                    "Bracelets",
                    "Watches",
                  ].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-5 py-2.5 text-sm font-medium text-text-main-light dark:text-text-main-dark bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-95 transition-all duration-200 min-h-[44px] shadow-sm"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop: Modal Container */}
      <div className="hidden md:flex relative z-[101] w-full max-w-4xl mx-auto min-h-[400px] max-h-[80vh] flex-col p-4 sm:p-6">
        {/* Close Button Above Modal */}
        <div className="flex justify-end mb-4 pr-2 shrink-0">
          <button
            onClick={onClose}
            className="  w-10 h-10 flex items-center justify-center rounded-sm shadow-md transition-colors"
            aria-label="Close search"
          >
            <svg
              className="w-8 h-8 text-text-main-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Search Input */}
        <div className="bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-sm shadow-2xl flex flex-col min-h-[300px] max-h-[calc(80vh-80px)] overflow-hidden">
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700 shrink-0">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-text-muted-light dark:text-text-muted-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for jewelry, rings, necklaces..."
              className="flex-1 bg-transparent text-text-main-light dark:text-text-main-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none text-sm sm:text-base"
              autoFocus={false}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-colors underline text-xs sm:text-sm"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>

          {/* Desktop: Scrollable Search Results */}
          {searchQuery.trim() !== "" && (
            <div className="flex-1 overflow-y-auto custom-scrollbar min-h-[200px] max-h-[calc(80vh-180px)]">
              {filteredProducts.length > 0 ? (
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-text-muted-light dark:text-text-muted-dark mb-4 font-medium uppercase tracking-widest">
                    {filteredProducts.length} Result
                    {filteredProducts.length !== 1 ? "s" : ""} Found
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={product.href}
                        onClick={onClose}
                        className="group flex flex-col gap-3 hover:opacity-90 transition-opacity"
                      >
                        <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg bg-[#f5f0e6] dark:bg-[#1a150d]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between items-baseline">
                            <h3 className="text-sm sm:text-base font-display font-medium text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                            <span className="text-sm sm:text-base font-bold text-primary">
                              {product.price}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-light text-text-muted-light dark:text-text-muted-dark">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-8 sm:p-12 text-center">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base">
                    No products found matching &quot;{searchQuery}&quot;
                  </p>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-xs sm:text-sm mt-2">
                    Try searching for rings, necklaces, earrings, or bracelets
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Desktop: Empty State */}
          {searchQuery.trim() === "" && (
            <div className="flex-1 flex items-center justify-center p-8 sm:p-12 text-center min-h-[200px] max-h-[calc(80vh-180px)] overflow-y-auto">
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base">
                Start typing to search for products...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
