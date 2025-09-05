"use client"

import { Button } from "@/components/ui/button"
import "@/styles/components.css"
import { useState } from "react"

// Иконки из scalable_sol компонентов
const CheckIcon = () => (
  <div className="checkbox-icon"></div>
)

// Иконки заменены на CSS классы с изображениями

const LabelIcon = () => (
  <img 
    src="/circle-check.png" 
    alt="Check" 
    className="w-5 h-5"
  />
)

export function SolutionsSection() {
  const [activeButton, setActiveButton] = useState<string | null>(null)

  const handleMouseEnter = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  const handleMouseLeave = () => {
    setActiveButton(null)
  }

  return (
    <section className="py-20 bg-[#ececec]">
      <div className="solutions-container">
        {/* Заголовок и кнопки */}
        <div className="solutions-header">
          <h2 className="solutions-title">
            Scalable Payment Solutions for Every Business
          </h2>
          
          {/* Category Buttons */}
          <div className="solutions-buttons-container">
            <button 
              className={`category-button ${activeButton === 'convenience' ? 'category-button-hover' : 'category-button-default'}`}
              onMouseEnter={() => handleMouseEnter('convenience')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="category-button-text">Convenience</span>
            </button>
            <button 
              className={`category-button ${activeButton === 'flexibility' ? 'category-button-hover' : 'category-button-default'}`}
              onMouseEnter={() => handleMouseEnter('flexibility')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="category-button-text">Flexibility</span>
            </button>
            <button 
              className={`category-button ${activeButton === 'security' ? 'category-button-hover' : 'category-button-default'}`}
              onMouseEnter={() => handleMouseEnter('security')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="category-button-text">Security</span>
            </button>
          </div>
        </div>

        {/* Карточки решений */}
        <div className="solutions-cards-container">
          {/* SaaS Card */}
          <div className="shadow-[0px_5px_10px_rgba(0,0,0,0.10),0px_18px_18px_rgba(0,0,0,0.09),0px_41px_24px_rgba(0,0,0,0.05),0px_72px_29px_rgba(0,0,0,0.01),0px_113px_32px_rgba(0,0,0,0.00)] bg-[white] flex flex-col items-center gap-5 w-[352px] h-[388px] overflow-hidden px-7 py-9 rounded-[40px]">
            <div className="w-[88px] h-[88px]">
              <div className="border backdrop-blur-md bg-[rgba(255,255,255,0.12)] flex justify-center items-stretch flex-col w-full h-20 px-[22px] rounded-[80px] border-solid">
                <img src="/image_b4a065f7.png" alt="" className="h-[37px] max-w-[initial] block" />
              </div>
              <div className="-mt-16 px-4">
                <div className="bg-gradient-to-br from-[#00b8a8] to-[#00524b] h-[72px] w-[72px] rounded-[80px]" />
              </div>
            </div>
            <p className="font-montserrat text-base font-semibold text-center leading-[19px] text-[black]">
              SaaS (Software-as-a-Service)
            </p>
            <div className="bg-[#f3f3f3] flex flex-col gap-5 w-full px-[18px] py-5 rounded-[20px]">
              <p className="font-montserrat text-sm font-medium text-left leading-[17px] text-[rgba(0,0,0,0.60)]">
                Our company provides a cloud-based online payment solution that:
              </p>
              <div className="flex flex-col gap-2">
                <div className="checkbox-container">
                  <CheckIcon />
                  <p className="checkbox-text">
                    Simplifies transaction acceptance and management
                  </p>
                </div>
                <div className="checkbox-container">
                  <CheckIcon />
                  <p className="checkbox-text">
                    Scales for businesses of any size
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* API & Integration Card */}
          <div className="shadow-[0px_5px_11px_rgba(0,0,0,0.10),0px_20px_20px_rgba(0,0,0,0.09),0px_46px_28px_rgba(0,0,0,0.05),0px_81px_33px_rgba(0,0,0,0.01),0px_127px_36px_rgba(0,0,0,0.00)] bg-gradient-to-b from-[#00b8a8] to-[#00524b] flex flex-col items-center gap-5 w-[352px] overflow-hidden px-7 py-9 rounded-[40px]">
            <div className="w-[88px] h-[88px]">
              <div className="border backdrop-blur-md bg-[rgba(255,255,255,0.12)] flex justify-center items-center flex-col h-20 px-4 rounded-[80px] border-solid">
                API
                {/* <ApiIcon /> */}
              </div>
              <div className="-mt-16 px-4">
                <div className="bg-[white] h-[72px] w-[72px] rounded-[80px]" />
              </div>
            </div>
            <p className="font-montserrat text-base font-semibold text-center leading-[19px] text-[white]">
              API & Integration
            </p>
            <div className="bg-[white] flex flex-col gap-5 w-full px-[19px] py-5 rounded-[20px]">
              <p className="font-montserrat text-sm font-medium text-left leading-[17px] text-[rgba(0,0,0,0.60)]">
                Seamless tools for developers:
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <LabelIcon />
                  <p className="font-montserrat text-sm font-medium text-left leading-[14px] text-[#016b61]">
                    One-click API connectivity
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <LabelIcon />
                  <p className="font-montserrat text-sm font-medium text-left leading-[14px] text-[#016b61]">
                    White-label payment pages
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <LabelIcon />
                  <p className="font-montserrat text-sm font-medium text-left leading-[14px] text-[#016b61]">
                    Real-time analytics dashboard
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <LabelIcon />
                  <p className="font-montserrat text-sm font-medium text-left leading-[14px] text-[#016b61]">
                    AI-powered fraud detection
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <LabelIcon />
                  <p className="font-montserrat text-sm font-medium text-left leading-[14px] text-[#016b61]">
                    Full PCI DSS compliance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Global Payment Processing Card */}
          <div className="shadow-[0px_5px_10px_rgba(0,0,0,0.10),0px_18px_18px_rgba(0,0,0,0.09),0px_41px_24px_rgba(0,0,0,0.05),0px_73px_29px_rgba(0,0,0,0.01),0px_113px_32px_rgba(0,0,0,0.00)] bg-[white] flex flex-col items-center gap-5 w-[352px] h-[388px] overflow-hidden px-7 py-8 rounded-[40px]">
            <div className="w-[88px] h-[88px]">
              <div className="border backdrop-blur-md bg-[rgba(255,255,255,0.12)] flex justify-center items-stretch flex-col w-full h-20 px-5 rounded-[80px] border-solid">
                <img src="/image_231d932c.png" alt="" className="h-[41px] max-w-[initial] block" />
              </div>
              <div className="-mt-16 px-4">
                <div className="bg-gradient-to-br from-[#00b8a8] to-[#00524b] h-[72px] w-[72px] rounded-[80px]" />
              </div>
            </div>
            <p className="font-montserrat text-base font-semibold text-center leading-[19px] text-[black]">
              Global Payment Processing
            </p>
            <div className="bg-[#f3f3f3] flex flex-col gap-2 w-full px-[19px] py-5 rounded-[20px]">
              <div className="payment-item">
                <div className="payment-icon-1"></div>
                <p className="payment-text payment-text-large">
                  150+ payment methods worldwide
                </p>
              </div>
              <div className="payment-item-small">
                <div className="payment-icon-2"></div>
                <p className="payment-text payment-text-small">
                  Multi-currency settlement
                </p>
              </div>
              <div className="payment-item-small">
                <div className="payment-icon-3"></div>
                <p className="payment-text payment-text-small">
                  Intuitive merchant portal
                </p>
              </div>
              <div className="payment-item-small">
                <div className="payment-icon-4"></div>
                <p className="payment-text payment-text-small">
                  AI-powered fraud detection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}