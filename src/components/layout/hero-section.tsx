import { Button } from "@/components/ui/button"
import "@/styles/components.css"

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="w-[80%] max-w-[1250px] mx-auto px-5">
        <div className="hero-content">
          {/* Phone Mockup Block */}
          <div className="hero-phone-container">
            <div className="phone-left"></div>
            <div className="phone-right"></div>
            <div className="mockup-left"></div>
            <div className="mockup-right"></div>
          </div>
          
          <div className="hero-text-container">
            <h1 className="hero-title">
              Accept payments and manage
              <br />
              your business online!
            </h1>
            <p className="hero-description">
              Easily connect your website with a secure payment gateway and ensure payment transfer of funds directly to your merchant account.
            </p>

            <div className="hero-buttons-container">
              <button className="main-button-default">
                <span className="main-button-text">Get Started</span>
                <div className="button-icon">
                  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17,7l-10,10M17,7h-9M17,7v9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </button>
              <button className="secondary-button-default">
                <span className="secondary-button-text-default">Discover pay.inc</span>
                <div className="button-icon">
                  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="paint44_linear_1_60" gradientUnits="userSpaceOnUse" x1="12.5" x2="12.5" y1="4" y2="22">
                        <stop stopColor="#00B8A8" />
                        <stop offset="1" stopColor="#00524B" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M11.5,16h-7.5c-0.265,0 -0.52,-0.105 -0.707,-0.293c-0.188,-0.187 -0.293,-0.442 -0.293,-0.707v-10c0,-0.265 0.105,-0.52 0.293,-0.707c0.187,-0.188 0.442,-0.293 0.707,-0.293h16c0.265,0 0.52,0.105 0.707,0.293c0.188,0.187 0.293,0.442 0.293,0.707v6.5M7,20h4M9,16v4M20.2,20.2l1.8,1.8M15,18c0,0.796 0.316,1.559 0.879,2.121c0.562,0.563 1.325,0.879 2.121,0.879c0.796,0 1.559,-0.316 2.121,-0.879c0.563,-0.562 0.879,-1.325 0.879,-2.121c0,-0.796 -0.316,-1.559 -0.879,-2.121c-0.562,-0.563 -1.325,-0.879 -2.121,-0.879c-0.796,0 -1.559,0.316 -2.121,0.879c-0.563,0.562 -0.879,1.325 -0.879,2.121z"
                      stroke="url(#paint44_linear_1_60)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
