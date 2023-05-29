interface IHeader {
  logo: string;
  darkLogo: string;
  menu: {
    title: string;
    link: string;
  }[];
  megaMenu: boolean | string[];
  hideSearchBar: boolean;
  hideLanguageSelector: boolean;
  languageList: {
    lang: string;
    flagSrc: string;
    text: string;
  }[];
  hideThemeSelector: boolean;
  loginButton: {
    title: string;
    hideLoginButton: boolean;
    loginButtonClass: string;
    loginButtonIconName: string;
  };
}
interface IFooter {
  logo: string;
  darkLogo: string;
  footerLinks: {
    title: string;
    links: {
      title: string;
      link: string;
      target?: string;
    }[];
  }[];
  copyRight: string;
  partOf: string;
  emailAPI: string;
  socials: {
    icon: string;
    link: string;
  }[];
}
export default defineAppConfig({
  docus: {
    title: 'Trader4 Documentation',
    description: 'Trader4 Docs',
    url: 'http://trader4.net/docs',
    image: '/social-card-preview.png',
    socials: {
      twitter: '@trader4',
      github: 'traderfour',
    },
  },
  config: {
    header: {
      logo: "/img/h-logo.svg",
      darkLogo: "/img/h-logo-dark.svg",
      menu: [
        { title: "Pricing", link: "/pricing" },
        { title: "Help", link: "/help" },
      ],
      megaMenu: false,
      hideSearchBar: false,
      hideLanguageSelector: false,
      languageList: [
        {
          lang: "en",
          flagSrc: "/img/icon/en.svg",
          text: "English",
        },
        {
          lang: "fa",
          flagSrc: "/img/icon/ir.svg",
          text: "فارسی",
        },
        {
          lang: "ar",
          flagSrc: "/img/icon/ar.svg",
          text: "العربية",
        },
        {
          lang: "tr",
          flagSrc: "/img/icon/tr.svg",
          text: "Türkçe",
        },
        {
          lang: "de",
          flagSrc: "/img/icon/tr.svg",
          text: "Deutsch",
        },
        {
          lang: "es",
          flagSrc: "/img/icon/tr.svg",
          text: "Español",
        },

      ],
      hideThemeSelector: false,
      loginButton: {
        title: "Login",
        hideLoginButton: false,
        loginButtonClass:
          " py-1 rounded  text-blue-600 dark:text-gray-200 ms-3 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all",
        loginButtonIconName: "mdi:account-circle-outline",
      },
    } as IHeader,

    footer: {
      logo: "/img/h-logo.svg",
      darkLogo: "/img/h-logo-dark.svg",
      hideEmailBox: false,
      emailAPI: "https://api.briofy.net/api/Email/ContactUs",
      copyRight: `<span>© 2017-2023
                          <a href="https://trader4.net" class="hover:underline">Trader4</a>.
                          All Rights Reserved.</span
                        >`,
      partOf: `<p>
      Proudly Part Of
      <a
        href="https://briofy.net"
        target="_blank"
        rel="external"
        class="hover:underline font-semibold"
        >Briofy</a
      >
      Family
    </p>`,
      socials: [
        {
          icon: "mdi:linkedin",
          link: "https://www.linkedin.com/company/trader4/",
        },
        {
          icon: "mdi:youtube",
          link: "https://www.youtube.com/@traderfour",
        },
        {
          icon: "mdi:github",
          link: "https://github.com/traderfour",
        },
      ],
      footerLinks: [
        {
          title: "Quick Access",
          links: [
            { title: "About", link: "/about" },
            { title: "Contact", link: "/contact" },
            { title: "Pricing", link: "/pricing" },
            { title: "Newsroom", link: "/blog/news-room" },
            { title: "Blog", link: "/blog" },
            { title: "Careers", link: "/careers" },
            { title: "Privacy Policy", link: "/privacy" },
            { title: "Cookies Policy", link: "/cookies" },
            { title: "Terms Of Service", link: "/terms" },
          ],
        },
        {
          title: "Products",
          links: [
            { title: "Market", link: "/product/market" },
            { title: "Bridge", link: "/product/bridge" },
            { title: "Bazaar", link: "/product/bazaar" },
            { title: "Financial Engineering", link: "/product/financial-engineering" },
            { title: "Marketplace", link: "/product/marketplace" },
            { title: "Algo Trading", link: "/product/algo-trading" },
            { title: "Cloud Trading", link: "/product/cloud-trading" },
            { title: "Trading Framework", link: "/product/trading-framework" },
            { title: "License System", link: "/product/license-system" },
          ],
        },
        {
            links: [
              { title: "Portfolio", link: "/product/portfolio" },
              { title: "TradeHub", link: "/product/tradehub" },
              { title: "ChartHub", link: "/product/charthub" },
              { title: "Team Trading", link: "/product/team-trading" },
              { title: "Pythia", link: "/product/pythia" },
              { title: "Open API", link: "/product/open-api" },
              { title: "Laboratory", link: "/product/laboratory" },
            ]
        },
        {
          title: "Support",
          links: [
            { title: "F.A.Q", link: "/faq" },
            { title: "Documentation", link: "/documentation" },
            { title: "How To", link: "/how-to" },
            { title: "API Docs", link: "/docs/api" },
            {
              title: "Status System",
              link: "https://status.trader4.net",
              target: "_blank",
            },
            { title: "Use Cases", link: "/use-cases" },
            { title: "Brand Book", link: "/brand-book" },
            { title: "DMCA", link: "/dmca" },
            { title: "Do Not Sell My Info", link: "/do-not-sell-my-info" },
          ],
        },
        {
          title: "More",
          links: [
            { title: "Download Android", link: "/mobile/android" },
            { title: "Download iOS", link: "/mobile/ios" },
            { title: "Think and Grow Rich", link: "/think-and-grow-rich" },
            { title: "Rich Dad Poor Dad", link: "/rich-dad-poor-dad" },
            { title: "Open Source", link: "/open-source" },
            { title: "#trader4", link: "/hashtag-trader4" },
            { title: "Bug Bounty", link: "/bug-bounty" },
            { title: "Disclaimer", link: "/disclaimer" },
            { title: "CSR", link: "/csr" },
          ],
        },
        {
          title: "From Family",
          links: [
            { title: "Dalan Capital", link: "https://dalan.capital", target: "_blank" },
            { title: "Werify", link: "https://werify.net", target: "_blank" },
            { title: "Bulutly", link: "https://bulutly.net", target: "_blank" },
            { title: "AzPays", link: "https://azpays.net", target: "_blank" },
            { title: "Pasles", link: "https://pasles.net", target: "_blank" },
            { title: "Daric", link: "https://daric.vc", target: "_blank" },
            { title: "More from Briofy", link: "https://briofy.net/products", target: "_blank"},
          ],
        },
      ],
    } as IFooter,
  },
});
