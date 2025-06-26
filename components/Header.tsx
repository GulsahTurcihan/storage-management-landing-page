import Image from "next/image";
import fullLogo from "@/public/assets/icons/logo-full-brand.svg";
import mobileLogo from "@/public/assets/icons/logo-brand.svg";

const Header = () => {
  return (
    <header className="p-4">
      <div>
        <Image
          src={fullLogo}
          alt="full-logo"
          width={160}
          height={50}
          className="hidden md:block h-auto"
        />
        <Image
          src={mobileLogo}
          width={52}
          height={52}
          alt="mobile-logo"
          className="md:hidden h-auto"
        />
      </div>
    </header>
  );
};
export default Header;
