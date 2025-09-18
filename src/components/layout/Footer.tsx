// components
import FooterColumn from "./FooterColumn";
// constants
import { footerNavigation, socialLinks } from "@/constants/footerData";
// icons
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/assets/svgs";

const Footer = () => {
  const getSocialIcon = (label: string) => {
    switch (label) {
      case "Facebook":
        return <FacebookIcon />;
      case "Instagram":
        return <InstagramIcon />;
      case "Twitter":
        return <TwitterIcon />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerNavigation.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{link.label}</span>
                  {getSocialIcon(link.label)}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Property Finder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
