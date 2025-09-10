import Link from "next/link"

// Иконки из footer компонентов
const MapPinIcon = ({ className }: { className?: string }) => (
  <div className={`${className} w-5 h-5 flex grow-0 shrink-0 basis-auto box-border overflow-hidden`}>
    <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
      <g id="map-pin" xmlns="http://www.w3.org/2000/svg">
        <g id="Vector_8">
          <path
            d="M7.5,9.17c0,0.66 0.263,1.3 0.732,1.76c0.469,0.47 1.105,0.74 1.768,0.74c0.663,0 1.299,-0.27 1.768,-0.74c0.469,-0.46 0.732,-1.1 0.732,-1.76c0,-0.67 -0.263,-1.3 -0.732,-1.77c-0.469,-0.47 -1.105,-0.73 -1.768,-0.73c-0.663,0 -1.299,0.26 -1.768,0.73c-0.469,0.47 -0.732,1.1 -0.732,1.77z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.714,13.88l-3.536,3.54c-0.312,0.31 -0.736,0.48 -1.178,0.48c-0.441,0 -0.865,-0.17 -1.178,-0.48l-3.536,-3.54c-0.932,-0.93 -1.567,-2.12 -1.825,-3.41c-0.257,-1.3 -0.125,-2.64 0.38,-3.85c0.504,-1.22 1.359,-2.26 2.455,-3c1.097,-0.73 2.385,-1.12 3.704,-1.12c1.319,0 2.607,0.39 3.704,1.12c1.096,0.74 1.951,1.78 2.455,3c0.505,1.21 0.637,2.55 0.38,3.85c-0.258,1.29 -0.893,2.48 -1.825,3.41z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  </div>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <div className={`${className} w-5 h-5 flex grow-0 shrink-0 basis-auto box-border overflow-hidden`}>
    <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
      <g id="phone-call" xmlns="http://www.w3.org/2000/svg">
        <path
          id="Vector_6"
          d="M12.5,5.83c0.44,0 0.87,0.18 1.18,0.49c0.31,0.31 0.49,0.74 0.49,1.18M12.5,2.5c1.33,0 2.6,0.53 3.54,1.46c0.93,0.94 1.46,2.21 1.46,3.54M4.17,3.33h3.33l1.67,4.17l-2.09,1.25c0.9,1.81 2.36,3.27 4.17,4.17l1.25,-2.09l4.17,1.67v3.33c0,0.45 -0.18,0.87 -0.49,1.18c-0.31,0.31 -0.74,0.49 -1.18,0.49c-3.25,-0.2 -6.32,-1.58 -8.62,-3.88c-2.3,-2.3 -3.68,-5.37 -3.88,-8.62c0,-0.44 0.18,-0.87 0.49,-1.18c0.31,-0.31 0.73,-0.49 1.18,-0.49z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </div>
)

const MailIcon = ({ className }: { className?: string }) => (
  <div className={`${className} w-5 h-5 flex grow-0 shrink-0 basis-auto box-border overflow-hidden`}>
    <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
      <g id="mail" xmlns="http://www.w3.org/2000/svg">
        <path
          id="Vector_7"
          d="M2.5,5.83c0,-0.44 0.18,-0.86 0.49,-1.18c0.31,-0.31 0.73,-0.48 1.18,-0.48h11.66c0.45,0 0.87,0.17 1.18,0.48c0.31,0.32 0.49,0.74 0.49,1.18M2.5,5.83v8.34c0,0.44 0.18,0.86 0.49,1.18c0.31,0.31 0.73,0.48 1.18,0.48h11.66c0.45,0 0.87,-0.17 1.18,-0.48c0.31,-0.32 0.49,-0.74 0.49,-1.18v-8.34M2.5,5.83l7.5,5l7.5,-5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </div>
)

export function Footer() {
  return (
    <>
      {/* Десктопная версия */}
      <footer className="footer-container bg-[#16202a] text-white pt-[26.5px] pb-[87px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Логотип и карты */}
            <div className="w-full lg:w-[18.16%] pb-[15.5px]">
              <img 
                src="/logo_footer.svg" 
                alt="Pay.inc" 
                className="h-8 w-[130px]"
              />
              <div className="mt-[17px]">
                <img 
                  src="/image_a255959f.png" 
                  alt="Pay.inc cards" 
                  className="h-[19.5px] w-[180px]"
                />
              </div>
            </div>

            {/* Ссылки */}
            <div className="flex justify-center items-center flex-col w-full lg:w-[48.50%] pl-0 lg:pl-[164px] pb-[5px]">
              <div className="flex justify-center items-center flex-col gap-2 w-[156px]">
                <p className="text-sm font-medium text-white">Terms and Conditions</p>
                <p className="text-sm font-medium text-center text-white">Website Policy</p>
                <p className="text-sm font-medium text-center text-white">Cashier services</p>
              </div>
            </div>

            {/* Контактная информация */}
            <div className="flex justify-start items-end flex-col w-full lg:w-[33.33%] pt-[5px]">
              <div className="flex justify-center items-end flex-col gap-2 w-[239px]">
                <div className="flex justify-start items-start flex-row gap-2">
                  <PhoneIcon className="w-5 h-5 flex grow-0 shrink-0 basis-auto box-border overflow-hidden" />
                  <p className="text-sm font-medium uppercase text-white">+1 (123) 456-7890</p>
                </div>
                <div className="flex justify-start items-end flex-row gap-2">
                  <MailIcon className="w-5 h-5 flex grow-0 shrink-0 basis-auto box-border overflow-hidden" />
                  <p className="text-sm font-medium text-white">info@payinc.com</p>
                </div>
                <div className="flex justify-start items-center flex-row gap-2">
                  <MapPinIcon className="w-5 h-5 flex grow-0 shrink-0 basis-auto box-border overflow-hidden" />
                  <p className="text-sm font-medium text-white">Pineapple Loft, 22 Pink St, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Мобильная версия */}
      <div className="mobile-footer">
        {/* Логотип - по центру, выше всех */}
        <img 
          src="/logo_footer.svg" 
          alt="Pay.inc" 
          className="mobile-footer-logo"
        />

        {/* Ссылки - по центру под логотипом */}
        <div className="mobile-footer-nav">
          <Link href="#" className="mobile-footer-nav-link">Terms and Conditions</Link>
          <Link href="#" className="mobile-footer-nav-link">Website Policy</Link>
          <Link href="#" className="mobile-footer-nav-link">Cashier services</Link>
        </div>

        {/* Контактная информация - по центру под ссылками */}
        <div className="mobile-footer-contact">
          {/* Телефон */}
          <div className="mobile-footer-phone">
            <div className="mobile-footer-phone-icon">
              <PhoneIcon className="w-4 h-4" />
            </div>
            <p className="mobile-footer-phone-text">+1 (123) 456-7890</p>
          </div>

          {/* Email */}
          <div className="mobile-footer-email">
            <div className="mobile-footer-email-icon">
              <MailIcon className="w-4 h-4" />
            </div>
            <p className="mobile-footer-email-text">info@payinc.com</p>
          </div>

          {/* Адрес */}
          <div className="mobile-footer-address">
            <div className="mobile-footer-address-icon">
              <MapPinIcon className="w-4 h-4" />
            </div>
            <p className="mobile-footer-address-text">Pineapple Loft, 22 Pink St, NY</p>
          </div>
        </div>

        {/* Карты - внизу по центру */}
        <img 
          src="/image_a255959f.png" 
          alt="Pay.inc cards" 
          className="mobile-footer-cards"
        />
      </div>
    </>
  )
}
