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
                <div className="text-lg font-bold">MealFlow</div>
                <div className="mt-1 text-sm text-500">
                  © 2025 MealFlow Limited
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>About Us</li>
              <li>MealFlow Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>MealFlow One</li>
              <li>MealFlow Instamart</li>
              <li>MealFlow Dineout</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact us</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Help & Support</li>
              <li>Partner With Us</li>
              <li>Ride With Us</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Available in:</h4>
            <ul className="space-y-2 text-sm text-grey-500">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Life at MealFlow</h4>
            <ul className="space-y-2 text-sm text-grey-500">
              <li>Explore With MealFlow</li>
              <li>MealFlow News</li>
              <li>Snackables</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-rose-600">
              For better experience, download the MealFlow app now
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"
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
              href="https://play.google.com/store/apps/details?id=in.swiggy.android"
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
