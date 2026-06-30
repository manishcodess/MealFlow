// ===== FOOTER COMPONENT =====
// Multi-column footer styled to match the example

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-red-600-900 border-t border-rose-100">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-100 text-lg font-bold text-orange-600">
                MF
              </span>
              <div>
                <div className="text-lg font-bold">DineSwift</div>
                <div className="text-gray-400 text-sm mt-2">
                  © 2025 DineSwift Limited
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
              <li>DineSwift Corporate</li>
              <li>DineSwift One</li>
              <li>DineSwift Instamart</li>
              <li>DineSwift Dineout</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact us</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
            
            <div className="mt-8">
              <h4 className="mb-3 text-sm font-semibold">Legal</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
                <li>Investor Relations</li>
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">We deliver to:</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Life at DineSwift</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Explore With DineSwift</li>
              <li>DineSwift News</li>
              <li>Snackables</li>
            </ul>
            
            <div className="mt-8 border border-gray-700 rounded-lg p-3 w-max">
              <p className="text-xs text-gray-400 font-semibold">
              For better experience, download the DineSwift app now
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <a
              href="https://apps.apple.com/in/app/dineswift-food-order-delivery/id989540920"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10 w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=in.dineswift.android"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
