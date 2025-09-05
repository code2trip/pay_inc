import { Button } from "@/components/ui/button"
import Link from "next/link"
import "@/styles/components.css"

export function Header() {
  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <img
            src="/logo_payinc.png"
            alt="Pay.inc"
            className="logo-image"
          />
        </div>

        {/* Navigation */}
        <nav className="header-navigation">
          <div className="nav-container">
            <div className="nav-item nav-item-active">
              <span className="nav-text nav-text-active">Main</span>
            </div>
            <div className="nav-item nav-item-inactive">
              <span className="nav-text nav-text-inactive">Features</span>
            </div>
            <div className="nav-item nav-item-inactive">
              <span className="nav-text nav-text-inactive">Fintech solution</span>
            </div>
            <div className="nav-item nav-item-inactive">
              <span className="nav-text nav-text-inactive">Contacts</span>
            </div>
          </div>
        </nav>

        {/* CTA Buttons */}
        <div className="header-cta">
          {/* Language Selector */}
          <div className="language-selector">
            <span className="language-text">ENGLISH</span>
            <div className="language-icon">
              <svg viewBox="0 0 10 5" className="language-arrow">
                <path d="M0.75,0.75l4,4l4,-4" fill="url(#languageGradient)" />
                <defs>
                  <linearGradient id="languageGradient" gradientUnits="userSpaceOnUse" x1="0.75" x2="8.25" y1="0.75" y2="4.75">
                    <stop stopColor="#00B8A8" />
                    <stop offset="1" stopColor="#00524B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Log In Button */}
          <button className="header-button-default">
            <span className="header-button-text">LOG IN</span>
          </button>
        </div>
      </div>
    </header>
  )
}
