import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] py-8 sm:py-12 md:py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <div className="text-xl sm:text-2xl font-display font-bold tracking-tight mb-3 sm:mb-4">
            Jewelley
          </div>
          <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Crafting memories, one piece at a time. Experience luxury in every
            detail.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Shop
          </h4>
          <ul className="space-y-2 text-xs text-text-muted-light dark:text-text-muted-dark">
            <li>
              <Link
                href="/products"
                className="hover:text-primary transition-colors"
              >
                Earrings
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-primary transition-colors"
              >
                Necklace
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-primary transition-colors"
              >
                Bracelets
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-primary transition-colors"
              >
                Rings
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            About Us
          </h4>
          <ul className="space-y-2 text-xs text-text-muted-light dark:text-text-muted-dark">
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                Designers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Newsletter
          </h4>
          <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-3 sm:mb-4">
            Subscribe for latest updates and offers.
          </p>
          <div className="flex">
            <input
              className="w-full px-3 py-2 text-xs border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-l-sm focus:outline-none focus:border-primary"
              placeholder="Your email"
              type="email"
            />
            <button className="bg-primary text-white px-3 sm:px-4 py-2 text-xs rounded-r-sm hover:bg-primary-hover transition-colors min-h-[44px]">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-xs text-text-muted-light dark:text-text-muted-dark">
        © 2023 Jewelley. All Rights Reserved.
      </div>
    </footer>
  );
}
