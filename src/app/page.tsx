"use client"

import { useState } from 'react'

export default function HomePage() {
  const [cart, setCart] = useState<number[]>([])

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Toko Online</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#products" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Products</a>
                <a href="#about" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#contact" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Cart ({cart.length})
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Our Store
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Discover amazing products with unbeatable prices
            </p>
            <div className="space-x-4">
              <button className="px-6 py-3 bg-white text-gray-900 rounded-md text-lg font-medium hover:bg-gray-100">
                Shop Now
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-md text-lg font-medium hover:bg-white hover:text-gray-900">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h3>
            <p className="text-lg text-gray-600">Check out our most popular items</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://placehold.co/300x300?text=Smartphone+Premium" 
                  alt="Smartphone Premium"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  New
                </span>
              </div>
              <div className="p-4">
                <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium mb-2">
                  Electronics
                </span>
                <h4 className="text-lg font-semibold mb-2">Smartphone Premium</h4>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">Rp 8.999.000</span>
                  <span className="text-sm text-gray-500 line-through">Rp 9.999.000</span>
                </div>
                <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://placehold.co/300x300?text=Laptop+Gaming" 
                  alt="Laptop Gaming"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium mb-2">
                  Electronics
                </span>
                <h4 className="text-lg font-semibold mb-2">Laptop Gaming</h4>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">Rp 15.999.000</span>
                  <span className="text-sm text-gray-500 line-through">Rp 17.999.000</span>
                </div>
                <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://placehold.co/300x300?text=Wireless+Headphones" 
                  alt="Wireless Headphones"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  New
                </span>
              </div>
              <div className="p-4">
                <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium mb-2">
                  Audio
                </span>
                <h4 className="text-lg font-semibold mb-2">Wireless Headphones</h4>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">Rp 1.299.000</span>
                  <span className="text-sm text-gray-500 line-through">Rp 1.599.000</span>
                </div>
                <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://placehold.co/300x300?text=Smart+Watch" 
                  alt="Smart Watch"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium mb-2">
                  Wearables
                </span>
                <h4 className="text-lg font-semibold mb-2">Smart Watch</h4>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">Rp 2.499.000</span>
                  <span className="text-sm text-gray-500 line-through">Rp 2.999.000</span>
                </div>
                <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Free Shipping</h4>
              <p className="text-gray-600">Free shipping on orders over Rp 500.000</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Secure Payment</h4>
              <p className="text-gray-600">Your payment information is safe with us</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-600">We're here to help you anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">Toko Online</h5>
              <p className="text-gray-400">Your trusted online shopping destination</p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Products</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Electronics</a></li>
                <li><a href="#" className="hover:text-white">Fashion</a></li>
                <li><a href="#" className="hover:text-white">Home & Garden</a></li>
                <li><a href="#" className="hover:text-white">Sports</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@tokoonline.com</li>
                <li>Phone: +62 123 456 7890</li>
                <li>Address: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Toko Online. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
