interface IAppConfig {
  nuxtIcon: {
    size?: string;
    aliases?: {
      [key: string]: string;
    };
  };
  config: {
    layout: {
      container: boolean;
    };
    header: IHeader;
    footer: IFooter;
    announcement: IAnnouncement;
    appsMenu: IAppMenu[];
    appCompanyMegaMenu: IAppCompanyMegaMenu;
    userAvatarMenu: IUserAvatarMenu;
  };
}

interface IHeader {
  logo: string;
  darkLogo: string;
  menu: {
    title: string;
    link: string;
  }[];
  subnavLinks?: {
    icon: string;
    title: string;
    link: string;
  }[];
  megaMenu: boolean | string[];
  hideSubnavLink?: boolean;
  hideSearchBar: boolean;
  hideLanguageSelector: boolean;
  hideNotifications: boolean;
  hideappMenu: boolean;
  hideUserInfo: boolean;
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
  hideEmailBox: boolean;
  socials: {
    icon: string;
    link: string;
  }[];
}
interface IAppCompanyMegaMenu {
  plans: Plan[];
  catergories: Category[];
}

interface Plan {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface Category {
  title: string;
  link: string;
}
interface IAnnouncement {
  title: string;
  badge: string;
  link: ILink;
}
interface ILink {
  text: string;
  src: string;
}
interface IAppMenu {
  iconName: string;
  iconTitle: string;
  link: string;
}
interface IUserAvatarMenu {
  accountLinks: AccountLink[];
}
interface AccountLink {
  title: string;
  link: string;
}
export default defineAppConfig({
  nuxtIcon: {
    // Default size
    // size: '2em',
    aliases: {
      nuxt: "NuxtIcon",
    },
  },
  config: {
    layout: {
      container: true,
    },
    header: {
      logo: "/img/briofy.png",
      darkLogo: "/img/briofy.png",
      menu: [],
      megaMenu: true,
      hideSearchBar: false,
      hideLanguageSelector: false,
      languageList: [],
      hideThemeSelector: false,
      hideNotifications: false,
      hideappMenu: false,
      hideSubnavLink: false,
      hideUserInfo: false,
      loginButton: {
        title: "Login",
        hideLoginButton: false,
        loginButtonClass:
          " py-1 rounded  text-blue-600 dark:text-gray-200 ms-3 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all",
        loginButtonIconName: "mdi:account-circle-outline",
      },
    } as IHeader,

    footer: {
      logo: "/img/briofy.png",
      darkLogo: "/img/briofy.png",
      footerLinks: [],
      hideEmailBox: false,
      emailAPI: "https://api.briofy.net/api/Email/ContactUs",
      copyRight: `<span>© 2017-2023
                          <a href="https://trader4.net" class="hover:underline">Trader4</a>.
                          All Rights Reserved.</span
                        >`,
      partOf: `<p> Proudly Part Of
      <a
        href="https://briofy.net"
        target="_blank"
        rel="external"
        class="hover:underline font-semibold"
        >Briofy</a> Family </p>`,
      socials: [],
    } as IFooter,
    announcement: {
      title: "Hello ! here is the announcement test from the Trader4",
      badge: "new",
      link: {
        text: "Homepage",
        src: "/",
      },
    } as IAnnouncement,
    appsMenu: [
      {
        iconName: "mdi-shopping",
        iconTitle: "Sales",
        link: "#",
      },
      {
        iconName: "mdi-account-group",
        iconTitle: "Users",
        link: "#",
      },
      {
        iconName: "mdi-inbox",
        iconTitle: "Inbox",
        link: "#",
      },
      {
        iconName: "mdi-account-circle",
        iconTitle: "Profile",
        link: "#",
      },
      {
        iconName: "mdi-cog",
        iconTitle: "Settings",
        link: "#",
      },
      {
        iconName: "mdi-bitbucket",
        iconTitle: "Products",
        link: "#",
      },
      {
        iconName: "mdi-currency-usd-circle",
        iconTitle: "Pricing",
        link: "#",
      },
      { iconName: "mdi-percent-box", iconTitle: "Billing", link: "#" },
      {
        iconName: "mdi-logout-variant",
        iconTitle: "Logout",
        link: "#",
      },
    ] as IAppMenu[],
    appCompanyMegaMenu: {
      plans: [
        {
          title: "Explore Design Work",
          description: "Trending designs to inspire you",
          icon: "mdi-folder-search",
          link: "#",
        },
        {
          title: "New & Noteworthy",
          description: "Up-and-coming designers",
          icon: "mdi-fire",
          link: "#",
        },
        {
          title: "Playoffs",
          description: "Work designers are riffing on",
          icon: "mdi-folder-multiple",
          link: "#",
        },
        {
          title: "Blog",
          description: "Interviews, tutorials, and more",
          icon: "mdi-cast",
          link: "#",
        },
        {
          title: "Weekly Warm-up",
          description: "Prompt to flex your skills",
          icon: "mdi-calendar",
          link: "#",
        },
      ],

      catergories: [
        { title: "Animation", link: "#" },
        { title: "Branding", link: "#" },
        { title: "Illustration", link: "#" },
        { title: "Mobile", link: "#" },
        { title: "Print", link: "#" },
        { title: "Product Design", link: "#" },
        { title: "Web Design", link: "#" },
      ],
    } as IAppCompanyMegaMenu,
    userAvatarMenu: {
      accountLinks: [
        { title: "My profile", link: "#" },
        { title: "Account settings", link: "#" },
      ],
    } as IUserAvatarMenu,
  },
});