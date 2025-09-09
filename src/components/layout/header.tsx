"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import "@/styles/components.css"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('ENGLISH')
  const languageRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen)
  }

  const languages = ['ENGLISH', 'GERMAN', 'SPANISH', 'FRENCH', 'POLAND']

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setIsLanguageOpen(false)
  }

  // Закрытие выпадающего списка при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }

    if (isLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageOpen])
  return (
    <header>
      {/* Desktop Header */}
      <div className="header-container w-[80%] max-w-[1250px] mx-auto px-5">
        {/* Logo */}
        <div className="header-logo">
          <img
            src="/logo_payinc.svg"
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
            <div 
              className="nav-item nav-item-inactive cursor-pointer"
              onClick={() => {
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="nav-text nav-text-inactive">Features</span>
            </div>
            <div 
              className="nav-item nav-item-inactive cursor-pointer"
              onClick={() => {
                const fintechSection = document.getElementById('fintech-solution');
                if (fintechSection) {
                  fintechSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="nav-text nav-text-inactive">Fintech solution</span>
            </div>
            <div 
              className="nav-item nav-item-inactive cursor-pointer"
              onClick={() => {
                const contactsSection = document.getElementById('contacts');
                if (contactsSection) {
                  contactsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="nav-text nav-text-inactive">Contacts</span>
            </div>
          </div>
        </nav>

        {/* CTA Buttons */}
        <div className="header-cta">
          {/* Language Selector */}
          <div className="language-selector-container" ref={languageRef}>
            {!isLanguageOpen ? (
              <div className="language-selector" onClick={toggleLanguage}>
                <span className="language-text">{selectedLanguage}</span>
                <div className="language-icon">
                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75,0.75l4,4l4,-4" stroke="url(#languageGradient)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="languageGradient" gradientUnits="userSpaceOnUse" x1="0.75" x2="8.25" y1="0.75" y2="4.75">
                        <stop stopColor="#00B8A8" />
                        <stop offset="1" stopColor="#00524B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            ) : (
              <div className="language-dropdown">
                {languages.map((language, index) => (
                  <div
                    key={language}
                    className={`language-option ${selectedLanguage === language ? 'language-option-selected' : ''}`}
                    onClick={() => handleLanguageSelect(language)}
                  >
                    <span className="language-option-text">{language}</span>
                    {selectedLanguage === language && (
                      <div className="language-option-icon">
                        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.75,0.75l4,4l4,-4" stroke="url(#languageGradient)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          <defs>
                            <linearGradient id="languageGradient" gradientUnits="userSpaceOnUse" x1="0.75" x2="8.25" y1="0.75" y2="4.75">
                              <stop stopColor="#00B8A8" />
                              <stop offset="1" stopColor="#00524B" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Log In Button */}
          <button 
            className="header-button-default"
            onClick={() => router.push('/login')}
          >
            <span className="header-button-text">LOG IN</span>
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="mobile-header">
        {/* Logo */}
        <div className="mobile-header-logo">
          <img
            src="/logo_payinc.svg"
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
                src="/logo_payinc.svg"
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
              <div className="mobile-language-selector-container" ref={languageRef}>
                {!isLanguageOpen ? (
                  <div className="mobile-language-selector" onClick={toggleLanguage}>
                    <span className="mobile-language-text">{selectedLanguage}</span>
                    <div className="mobile-language-icon">
                      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.75,0.75l4,4l4,-4" stroke="url(#mobileLanguageGradient)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                          <linearGradient id="mobileLanguageGradient" gradientUnits="userSpaceOnUse" x1="0.75" x2="8.25" y1="0.75" y2="4.75">
                            <stop stopColor="#00B8A8" />
                            <stop offset="1" stopColor="#00524B" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="mobile-language-dropdown">
                    {languages.map((language) => (
                      <div
                        key={language}
                        className={`mobile-language-option ${selectedLanguage === language ? 'mobile-language-option-selected' : ''}`}
                        onClick={() => handleLanguageSelect(language)}
                      >
                        <span className="mobile-language-option-text">{language}</span>
                        {selectedLanguage === language && (
                          <div className="mobile-language-option-icon">
                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.75,0.75l4,4l4,-4" stroke="url(#mobileLanguageGradient)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                              <defs>
                                <linearGradient id="mobileLanguageGradient" gradientUnits="userSpaceOnUse" x1="0.75" x2="8.25" y1="0.75" y2="4.75">
                                  <stop stopColor="#00B8A8" />
                                  <stop offset="1" stopColor="#00524B" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button 
                className="mobile-login-button"
                onClick={() => router.push('/login')}
              >
                <span className="mobile-login-text">LOG IN</span>
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="mobile-menu-nav">
              <div className="mobile-menu-item mobile-menu-item-active">
                <span className="mobile-menu-text mobile-menu-text-active">Main</span>
              </div>
              <div 
                className="mobile-menu-item cursor-pointer"
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }
                }}
              >
                <span className="mobile-menu-text">Features</span>
              </div>
              <div 
                className="mobile-menu-item cursor-pointer"
                onClick={() => {
                  const fintechSection = document.getElementById('fintech-solution');
                  if (fintechSection) {
                    fintechSection.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }
                }}
              >
                <span className="mobile-menu-text">Fintech solution</span>
              </div>
              <div 
                className="mobile-menu-item cursor-pointer"
                onClick={() => {
                  const contactsSection = document.getElementById('contacts');
                  if (contactsSection) {
                    contactsSection.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }
                }}
              >
                <span className="mobile-menu-text">Contacts</span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
