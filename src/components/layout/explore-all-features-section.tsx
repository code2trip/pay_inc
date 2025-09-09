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
    <img src="/send.svg" alt="Send" className="w-5 h-5" />
  </div>
)

export function ExploreAllFeaturesSection() {
  return (
    <section id="features" className="explore-section">
      <div className="w-[80%] max-w-[1250px] mx-auto px-5 explore-container">
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
        <div className="explore-features-grid w-full">
          {/* Custom Branded Checkout */}
          <div className="explore-feature-card">
            <img src="/credit-card.svg" alt="Credit Card" className="explore-feature-icon" />
            <h3 className="explore-feature-title">Custom Branded Checkout</h3>
            <p className="explore-feature-description">
              Launch a payment page tailored to your brand quickly and easily.
            </p>
          </div>

          {/* AI-Powered Fraud Detection */}
          <div className="explore-feature-card">
            <img src="/brain.svg" alt="Credit Card" className="explore-feature-icon" />
            <h3 className="explore-feature-title">AI-Powered Fraud Detection</h3>
            <p className="explore-feature-description">
              Benefit from protection using advanced AI and machine learning algorithms.
            </p>
          </div>

          {/* Live Transaction Insights */}
          <div className="explore-feature-card">
            <img src="/chart-histogram.svg" alt="Credit Card" className="explore-feature-icon" />
            <h3 className="explore-feature-title">Live Transaction Insights</h3>
            <p className="explore-feature-description">
              Access real-time analytics to monitor payments, refunds, and chargebacks.
            </p>
          </div>

          {/* Secure Transactions */}
          <div className="explore-feature-card">
            <img src="/shield-half-filled.svg" alt="Credit Card" className="explore-feature-icon" />
            <h3 className="explore-feature-title">Secure Transactions</h3>
            <p className="explore-feature-description">
              Ensure each payment is protected with advanced 3D Secure protocols.
            </p>
          </div>

          {/* Advanced Merchant Dashboard */}
          <div className="explore-feature-card">
            <img src="/layout-dashboard.svg" alt="Credit Card" className="explore-feature-icon" />
            <h3 className="explore-feature-title">Advanced Merchant Dashboard</h3>
            <p className="explore-feature-description">
              Manage your operations efficiently with a flexible and robust back office system.
            </p>
          </div>

          {/* Automated Weekly Reporting */}
          <div className="explore-feature-card">
            <img src="/file-analytics.svg" alt="Credit Card" className="explore-feature-icon" />
            <h3 className="explore-feature-title">Automated Weekly Reporting</h3>
            <p className="explore-feature-description">
              Receive clear financial summaries delivered to your dashboard every week.
            </p>
          </div>

          {/* Flexible Back Office Tools */}
          <div className="explore-feature-card">
            <img src="/apps.svg" alt="Credit Card" className="explore-feature-icon" />
            <h3 className="explore-feature-title">Flexible Back Office Tools</h3>
            <p className="explore-feature-description">
              Customize your interface to view, organize, and export the data you need.
            </p>
          </div>

          {/* Quick API Integration */}
          <div className="explore-feature-card">
            <img src="/api.svg" alt="Credit Card" className="explore-feature-icon" />
            <h3 className="explore-feature-title">Quick API Integration</h3>
            <p className="explore-feature-description">
              Integrate your site with our API in no time using clear developer documentation.
            </p>
          </div>

          {/* PCI DSS Compliance Ready */}
          <div className="explore-feature-card">
            <img src="/discount-check.svg" alt="Credit Card" className="explore-feature-icon" />
            <h3 className="explore-feature-title">PCI DSS Compliance Ready</h3>
            <p className="explore-feature-description">
              Securely process transactions via PCI DSS-compliant server integration.
            </p>
          </div>
        </div>

        {/* Кнопка */}
        <button 
          className="explore-button"
          onClick={() => {
            const contactsSection = document.getElementById('contacts');
            if (contactsSection) {
              contactsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          contact us
          <ButtonIcon />
        </button>
      </div>
    </section>
  )
}
