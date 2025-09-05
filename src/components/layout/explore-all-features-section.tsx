"use client"

import "@/styles/components.css"

// Иконка стрелки вниз
const ArrowDownIcon = () => (
  <div className="explore-icon">
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
      <defs>
        <linearGradient id="paint30_linear_1_60" gradientUnits="userSpaceOnUse" xmlns="http://www.w3.org/2000/svg" x1="12" x2="12" y1="5" y2="19">
          <stop stopColor="#00B8A8" />
          <stop offset="1" stopColor="#00524B" />
        </linearGradient>
      </defs>
      <g id="arrow-down" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector_265" d="M12,5v14M12,19l6,-6M12,19l-6,-6" stroke="url(#paint30_linear_1_60)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
      </g>
    </svg>
  </div>
)

// Иконка для кнопки
const ButtonIcon = () => (
  <div className="explore-button-icon">
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17,7l-10,10M17,7h-9M17,7v9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  </div>
)

// Иконки для карточек функций
const CustomCheckoutIcon = () => (
  <div className="explore-feature-icon">
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

const AnalyticsIcon = () => (
  <div className="explore-feature-icon">
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3v18h18M18 9l-5 5-4-4-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

const SecurityIcon = () => (
  <div className="explore-feature-icon">
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

const MultiCurrencyIcon = () => (
  <div className="explore-feature-icon">
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

const ApiIcon = () => (
  <div className="explore-feature-icon">
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

const SupportIcon = () => (
  <div className="explore-feature-icon">
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

export function ExploreAllFeaturesSection() {
  return (
    <section className="explore-section">
      <div className="explore-container">
        {/* Заголовок */}
        <div className="explore-header">
          <h2 className="explore-title">
            Explore all features
          </h2>
          <p className="explore-subtitle">
            Experience payments like never before
          </p>
          <div className="explore-icon-container">
            <ArrowDownIcon />
          </div>
        </div>

        {/* Сетка функций */}
        <div className="explore-features-grid">
          {/* Custom Branded Checkout */}
          <div className="explore-feature-card">
            <CustomCheckoutIcon />
            <h3 className="explore-feature-title">Custom Branded Checkout</h3>
            <p className="explore-feature-description">
              Launch a payment page tailored to your brand quickly and easily.
            </p>
          </div>

          {/* Real-time Analytics */}
          <div className="explore-feature-card">
            <AnalyticsIcon />
            <h3 className="explore-feature-title">Real-time Analytics</h3>
            <p className="explore-feature-description">
              Track your payment performance with detailed insights and reporting.
            </p>
          </div>

          {/* Advanced Security */}
          <div className="explore-feature-card">
            <SecurityIcon />
            <h3 className="explore-feature-title">Advanced Security</h3>
            <p className="explore-feature-description">
              Bank-level security with fraud detection and PCI compliance.
            </p>
          </div>

          {/* Multi-currency Support */}
          <div className="explore-feature-card">
            <MultiCurrencyIcon />
            <h3 className="explore-feature-title">Multi-currency Support</h3>
            <p className="explore-feature-description">
              Accept payments in multiple currencies with automatic conversion.
            </p>
          </div>

          {/* API Integration */}
          <div className="explore-feature-card">
            <ApiIcon />
            <h3 className="explore-feature-title">API Integration</h3>
            <p className="explore-feature-description">
              Seamlessly integrate with your existing systems and workflows.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="explore-feature-card">
            <SupportIcon />
            <h3 className="explore-feature-title">24/7 Support</h3>
            <p className="explore-feature-description">
              Get help whenever you need it with our dedicated support team.
            </p>
          </div>
        </div>

        {/* Кнопка */}
        <button className="explore-button">
          contact us
          <ButtonIcon />
        </button>
      </div>
    </section>
  )
}
