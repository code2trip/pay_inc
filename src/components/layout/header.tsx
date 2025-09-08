"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import "@/styles/components.css"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header>
      {/* Desktop Header */}
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

      {/* Mobile Header */}
      <div className="mobile-header">
        {/* Logo */}
        <div className="mobile-header-logo">
          <img
            src="/logo_payinc.png"
            alt="Pay.inc"
          />
        </div>

        {/* Burger Menu / Close Button */}
        <button className="mobile-burger-menu" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="url(#burgerGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="burgerGradient" gradientUnits="userSpaceOnUse" x1="3" y1="6" x2="21" y2="18">
                  <stop stopColor="#00B8A8"/>
                  <stop offset="1" stopColor="#00524B"/>
                </linearGradient>
              </defs>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="mobile-menu-modal">
          {/* Header with Logo and Close Button */}
          <div className="mobile-menu-header">
            <div className="mobile-header-logo">
              <img
                src="/logo_payinc.png"
                alt="Pay.inc"
              />
            </div>
            <button className="mobile-burger-menu" onClick={toggleMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="mobile-menu-content">
            {/* CTA Buttons */}
            <div className="mobile-menu-buttons">
              <div className="mobile-language-selector">
                <span className="mobile-language-text">ENGLISH</span>
                <div className="mobile-language-icon">
                  <svg viewBox="0 0 10 5" className="mobile-language-arrow">
                    <path d="M0.75,0.75l4,4l4,-4" fill="url(#mobileLanguageGradient)" />
                    <defs>
                      <linearGradient id="mobileLanguageGradient" gradientUnits="userSpaceOnUse" x1="0.75" x2="8.25" y1="0.75" y2="4.75">
                        <stop stopColor="#00B8A8" />
                        <stop offset="1" stopColor="#00524B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <button className="mobile-login-button">
                <span className="mobile-login-text">LOG IN</span>
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="mobile-menu-nav">
              <div className="mobile-menu-item mobile-menu-item-active">
                <span className="mobile-menu-text mobile-menu-text-active">Main</span>
              </div>
              <div className="mobile-menu-item">
                <span className="mobile-menu-text">Features</span>
              </div>
              <div className="mobile-menu-item">
                <span className="mobile-menu-text">Fintech solution</span>
              </div>
              <div className="mobile-menu-item">
                <span className="mobile-menu-text">Contacts</span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
